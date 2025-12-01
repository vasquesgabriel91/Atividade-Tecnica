from app.infra.services.weather_service import WeatherService

class GetWeatherUseCase:

    def __init__(self):
        self.service = WeatherService()

    async def execute(self, city: str):
        if not city or len(city) < 2:
            raise ValueError("Cidade inválida")

        return await self.service.get_weather(city)
