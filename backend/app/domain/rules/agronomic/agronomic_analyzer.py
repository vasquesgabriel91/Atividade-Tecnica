class AgronomicAnalyzer:

    def __init__(self, rules):
        self.rules = rules

    def analyze(self, weather):
        results = {}

        for rule in self.rules:
            key, value = rule.analyze(weather)
            results[key] = value

        return results
