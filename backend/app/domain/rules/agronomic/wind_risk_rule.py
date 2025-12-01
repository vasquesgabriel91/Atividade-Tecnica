from app.domain.rules.agronomic.base_rule import AgronomicRule
import logging

logger = logging.getLogger(__name__)
class WindRiskRule(AgronomicRule):

    def analyze(self, weather):
        wind = weather.wind_speed
        logger.info(f"wind={wind}")

        if wind > 40:
            result = "Risco alto de acamamento."
        elif wind > 25:
            result = "Ventos moderados."
        else:
            result = "Sem risco por vento."

        return ("wind_risk", result)
