from fastapi import HTTPException
from app.domain.usecases.analyze_agronomic_usecase import AnalyzeAgronomicUseCase

class AgronomicController:

    def __init__(self):
        self.usecase = AnalyzeAgronomicUseCase()

    async def analyze(self, city: str):
        try:
            result = await self.usecase.execute(city)
            if not result:
                raise HTTPException(status_code=404, detail="Cidade não encontrada")
            return result
        except ValueError as ve:
            raise HTTPException(status_code=400, detail=str(ve))
        except Exception as e:
            raise HTTPException(status_code=500, detail="Erro interno na análise agronômica")
