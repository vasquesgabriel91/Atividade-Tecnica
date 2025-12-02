import React from "react";
import { Weather } from "../types/Weather";

interface Props {
  data: Weather;
}

export function WeatherCard({ data }: Props) {
  return (
    <div className="p-4 shadow rounded bg-white max-w-md mx-auto">
      <h2 className="text-xl font-bold mb-2">{data.city}</h2>

        <div className="p-4 rounded-lg shadow bg-white">
          <p>🌡️ Temperatura: {data.temperature}°C</p>
          <p>💧 Umidade: {data.humidity}%</p>
          <p>🌬️ Vento: {data.wind_speed} km/h</p>
          <p>🌧️ Chuva: {data.rain} mm</p>
      </div>


      <div className="mt-6">
        <h3 className="font-semibold">Análise Agronômica</h3>

        <div className="bg-green-50 p-3 rounded mt-2 text-sm">
          <p>
            <strong>🌾 Risco de Colheita:</strong>{" "}
            {data.agronomic_analysis.harvest_risk}
          </p>

          <p>
            <strong>🐛 Pressão de Pragas:</strong>{" "}
            {data.agronomic_analysis.pest_conditions}
          </p>

          <p>
            <strong>🔥 Estresse Térmico:</strong>{" "}
            {data.agronomic_analysis.thermal_stress}
          </p>

          <p>
            <strong>💨 Risco por Vento:</strong>{" "}
            {data.agronomic_analysis.wind_risk}
          </p>
        </div>
      </div>
    </div>
  );
}
