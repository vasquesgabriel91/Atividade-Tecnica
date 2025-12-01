import logging
from app.domain.rules.agronomic.base_rule import AgronomicRule

logger = logging.getLogger(__name__)

class PestRiskRule(AgronomicRule):

    def analyze(self, weather):
        hum = weather.humidity
        rain = weather.rain
        logger.info(f"hum={rain} - {hum}")

        if hum is None or rain is None:
            return ("pest_conditions", "Dados insuficientes para análise de pragas")
        if hum > 80 and rain > 2:
            result = "Alta probabilidade de doenças fúngicas."
        elif hum > 60:
            result = "Umidade elevada — fique atento."
        else:
            result = "Baixa pressão de doenças."

        return ("pest_conditions", result)
