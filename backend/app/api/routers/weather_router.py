from fastapi import APIRouter, Query
from app.api.controllers.weather_controller import AgronomicController

router = APIRouter()
controller = AgronomicController()

@router.get("/weather/{city}")
async def analyze(city):
    return await controller.analyze(city)
