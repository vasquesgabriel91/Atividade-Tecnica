from app.domain.entities.weather import Weather
from app.domain.rules.agronomic.harvest_rule import HarvestRule
from app.domain.rules.agronomic.pest_risk_rule import PestRiskRule
from app.domain.rules.agronomic.thermal_stress_rule import ThermalStressRule
from app.domain.rules.agronomic.wind_risk_rule import WindRiskRule
from app.infra.services.weather_service import WeatherService
from app.domain.rules.agronomic.agronomic_analyzer import AgronomicAnalyzer

class AnalyzeAgronomicUseCase:

    def __init__(self):
        self.weather_service = WeatherService()
        self.rules = [HarvestRule(), PestRiskRule(), ThermalStressRule(), WindRiskRule()]
        self.analyzer = AgronomicAnalyzer(self.rules)

    async def execute(self, city: str):
        weather: Weather = await self.weather_service.get_weather(city)
        if not weather:
            return None

        analysis = self.analyzer.analyze(weather)
        return {
            "city": city,
            "weather": weather.dict(),
            "agronomic_analysis": analysis
        }
