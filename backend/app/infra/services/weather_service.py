import httpx
from app.infra.repositories.open_meteo_repository import OpenMeteoRepository
from app.domain.entities.weather import Weather
from app.infra.http.http_client import async_client


class WeatherService:
    def __init__(self):
        self.repo = OpenMeteoRepository()

    async def get_coordinates(self, city: str):
        url = "https://geocoding-api.open-meteo.com/v1/search"
        params = {"name": city}

        response = await async_client.get(url, params=params)
        data = response.json()

        if "results" not in data:
            return None

        coords = data["results"][0]
        return coords["latitude"], coords["longitude"]

    async def get_weather(self, city: str):
        coords = await self.get_coordinates(city)
        if not coords:
            return None

        lat, lon = coords
        weather_raw = await self.repo.get_weather(lat, lon)

        current = weather_raw["current_weather"]

        return Weather(
            city=city,
            temperature=current["temperature"],
            wind_speed=current["windspeed"],
            humidity=50,
            rain=weather_raw.get("hourly", {}).get("precipitation", [0])[0]
        )
