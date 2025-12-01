from app.domain.rules.agronomic.base_rule import AgronomicRule

import logging
logger = logging.getLogger(__name__)

class HarvestRule(AgronomicRule):

    def analyze(self, weather):
        rain = weather.rain
        logger.info(f"rain={rain}")

        if rain >= 20:
            result = "Chuva intensa — não recomendado colher."
        elif rain > 0:
            result = "Chuva leve — pode atrapalhar operações."
        else:
            result = "Sem chuva — condições ideais de colheita."

        return ("harvest_risk", result)
