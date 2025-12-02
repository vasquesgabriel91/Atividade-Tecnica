"use client";

import { useState } from "react";
import { useWeather } from "../hooks/useWeather";
import { WeatherCard } from "../components/WeatherInfoCard";
export default function WeatherPage() {
    const [city, setCity] = useState("");
    const { data, loading, error, getWeather } = useWeather();

    function handleSearch(e: React.FormEvent) {
        e.preventDefault();
        if (city.trim().length > 0) getWeather(city);
    }

    return (

        <div
            className="p-6 max-w-xl mx-auto m-8"
            style={{ backgroundColor: "var(--agro-green)" }}
        >            <h1 className="text-2xl font-bold mb-4">Clima & Risco Agronômico</h1>

            <form onSubmit={handleSearch} className="flex gap-2 mb-4 w-full">
                <input
                    type="text"
                    placeholder="Digite a cidade..."
                    value={city}
                    onChange={(e) => setCity(e.target.value)}
                    className="border p-2 rounded w-[70%]"
                />
                <button
                    type="submit"
                    className="bg-green-600 hover:bg-green-700 text-white px-4 rounded w-[30%]"
                >
                    Buscar
                </button>
            </form>

            {loading && <p>Carregando...</p>}
            {error && <p className="text-red-500">{error}</p>}

            {data && <WeatherCard data={data} />}
        </div>
    );
}
