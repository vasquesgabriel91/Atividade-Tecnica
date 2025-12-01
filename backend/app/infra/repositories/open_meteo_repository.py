import httpx
from app.core.exceptions import ExternalAPIException
from app.core.config import settings
from app.infra.http.http_client import async_client

class OpenMeteoRepository:

    async def get_weather(self, lat: float, lon: float):
        url = "https://api.open-meteo.com/v1/forecast"
        params = {
            "latitude": lat,
            "longitude": lon,
            "current_weather": True,
            "hourly": "relativehumidity_2m,precipitation"
        }

        response = await async_client.get(url, params=params)

        if response.status_code != 200:

            print("⚠️ ERRO NA API OPEN-METEO")
            print("STATUS:", response.status_code)
            print("URL:", response.url)
            try:
                print("BODY:", response.text)
            except:
                pass
            raise ExternalAPIException("Falha ao consultar API externa")


        return response.json()