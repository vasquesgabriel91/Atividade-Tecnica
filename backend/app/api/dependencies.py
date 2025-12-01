from fastapi import Depends
from app.infra.services.weather_service import WeatherService
from app.domain.usecases.get_weather_usecase import GetWeatherUseCase
def get_weather_service():
    return WeatherService()

def get_weather_usecase(
    service: WeatherService = Depends(get_weather_service)
):
    return GetWeatherUseCase(service)