from app.domain.rules.agronomic.base_rule import AgronomicRule
import logging
logger = logging.getLogger(__name__)

class ThermalStressRule(AgronomicRule):
    def analyze(self, weather):
        temp = weather.temperature
        logger.info(f"temp={temp}")

        if temp >= 35:
            result = "Alto risco de estresse térmico."
        elif temp >= 30:
            result = "Temperatura elevada, mas aceitável."
        else:
            result = "Temperatura adequada para a cana."

        return ("thermal_stress", result)
