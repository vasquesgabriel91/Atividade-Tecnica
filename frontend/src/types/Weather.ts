// types/weather.ts

export interface DailyForecast {
  day: string; // Ex: 'WED', 'THU'
  temp: number; // Temperatura esperada
  icon: 'rain' | 'cloudy' | 'partly-cloudy' | 'snow' | 'sun'; // Ícone para o dia
}

export interface AgronomicAnalysis {
  harvest_risk: string;
  pest_conditions: string;
  thermal_stress: string;
  wind_risk: string;
}

export interface Weather {
  city: string;
  temperature: number;
  wind_speed: number;
  humidity: number;
  rain: number;
  forecast: DailyForecast[];

  agronomic_analysis: AgronomicAnalysis; // <-- adicionar
}
