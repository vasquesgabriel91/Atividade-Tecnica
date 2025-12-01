"use client";

import { useState } from "react";

export default function Home() {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState<any>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const fetchWeather = async () => {
        if (!city) {
            setError("Informe uma cidade válida.");
            return;
        }

        setLoading(true);
        setError("");
        setWeather(null);

        try {
            const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/weather/${city}`);

            if (!res.ok) {
                throw new Error("Cidade não encontrada");
            }

            const data = await res.json();
            setWeather(data);

        } catch (err: any) {
            setError(err.message || "Erro inesperado.");
        } finally {
            setLoading(false);
        }
    };

    return (
        <main className="min-h-screen flex flex-col items-center justify-center p-6 bg-green-50">
            <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-md">
                <h1 className="text-2xl font-bold mb-4 text-green-700">
                    🌦️ Consulta Climática para Cana-de-Açúcar
                </h1>

                <input
                    type="text"
                    placeholder="Digite o nome da cidade"
                    className="w-full border p-3 rounded mb-4"
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                />

                <button
                    onClick={fetchWeather}
                    className="w-full bg-green-600 hover:bg-green-700 text-white p-3 rounded"
                >
                    Buscar clima
                </button>

                {loading && (
                    <p className="text-center text-gray-600 mt-4">Carregando...</p>
                )}

                {error && (
                    <p className="text-center text-red-600 mt-4">{error}</p>
                )}

                {weather && (
                    <div className="mt-6 border-t pt-4">
                        <h2 className="text-xl font-semibold mb-3">🌍 {weather.city}</h2>

                        <p><strong>🌡 Temperatura:</strong> {weather.temperature}°C</p>
                        <p><strong>💨 Vento:</strong> {weather.wind_speed} km/h</p>
                        <p><strong>💧 Umidade:</strong> {weather.humidity}%</p>
                        <p><strong>🌧 Chuva:</strong> {weather.rain} mm</p>
                    </div>
                )}
            </div>
        </main>
    );
}
