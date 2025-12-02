const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWeather(city: string) {
  const response = await fetch(`${API_URL}/weather/${city}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar clima");
  }

  const result = await response.json();

  return {
    city: result.city,
    temperature: result.weather.temperature,
    wind_speed: result.weather.wind_speed,
    humidity: result.weather.humidity,
    rain: result.weather.rain,

  agronomic_analysis: result.agronomic_analysis
  };

}
