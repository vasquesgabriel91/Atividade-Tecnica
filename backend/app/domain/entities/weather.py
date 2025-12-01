from pydantic import BaseModel

class Weather(BaseModel):
    city: str
    temperature: float
    wind_speed: float
    humidity: float
    rain: float
