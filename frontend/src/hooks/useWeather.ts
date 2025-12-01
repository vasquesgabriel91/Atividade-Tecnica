import { useState } from "react";
import { fetchWeather } from "../services/weatherService";
import { Weather } from "../types/Weather";

export function useWeather() {
  const [data, setData] = useState<Weather | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function getWeather(city: string) {
    try {
      setLoading(true);
      setError(null);

      const result = await fetchWeather(city);
      setData(result);
    } catch (err: any) {
      setError("Cidade não encontrada ou erro na API.");
    } finally {
      setLoading(false);
    }
  }

  return { data, loading, error, getWeather };
}
