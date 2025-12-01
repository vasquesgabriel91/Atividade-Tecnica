from abc import ABC, abstractmethod

class AgronomicRule(ABC):

    @abstractmethod
    def analyze(self, weather):
        pass
