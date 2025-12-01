const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function fetchWeather(city: string) {
  const response = await fetch(`${API_URL}/weather/${city}`);

  if (!response.ok) {
    throw new Error("Erro ao buscar clima");
  }

  return await response.json();
}
