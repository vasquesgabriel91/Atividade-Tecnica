// types/weather.ts

export interface DailyForecast {
  day: string; // Ex: 'WED', 'THU'
  temp: number; // Temperatura esperada
  icon: 'rain' | 'cloudy' | 'partly-cloudy' | 'snow' | 'sun'; // Ícone para o dia
}

export interface Weather {
  city: string;
  temperature: number; // Temperatura atual
  wind_speed: number;
  humidity: number;
  rain: number;
  forecast: DailyForecast[]; // Adicionamos a previsão de 5 dias
}