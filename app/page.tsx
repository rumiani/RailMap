"use client";
import { useState, useEffect } from "react";
import { StationList } from "../components/StationList";
import { useStationStore, type Station } from "../store/stationStore";
import dynamic from "next/dynamic";
const StationMap = dynamic(() => import("@/components/StationMap").then((mod) => mod.StationMap), {
  ssr: false,
});
export default function Home() {
  const { stations, fetchStations, loading, error } = useStationStore();
  const cities = Array.from(new Set(stations.map((s) => s.city)));

  // New state to store current city filter
  const [selectedCity, setSelectedCity] = useState<string>("");

  const [highlightedStation, setHighlightedStation] = useState<Station | null>(null);

  useEffect(() => {
    fetchStations();
  }, [fetchStations]);

  // Filter stations by city
  const filteredStations = selectedCity
    ? stations.filter((s) => s.city === selectedCity)
    : stations;

  const handleSelectStation = (station: Station) => {
    setHighlightedStation(station);
  };

  const handleSelectCity = (city: string) => {
    setSelectedCity(city);
    if (!city) {
      setHighlightedStation(null);
      return;
    }
    // Zoom to first station in that city
    const firstStation = stations.find((s: Station) => s.city === city);
    if (firstStation) setHighlightedStation(firstStation);
  };

  return (

    <div className="flex flex-col">
      <h1 className="text-xl font-bold p-4! text-center">RailMap DE</h1>
      {stations.length > 0 ?
        <div>
          <div className="w-full">
            <StationList
              cities={cities}
              stations={filteredStations}
              onSelectStation={handleSelectStation}
              onSelectCity={handleSelectCity}
              selectedCity={selectedCity}
            />
          </div>
          <div className="flex-1">
            <StationMap
              stations={filteredStations}
              highlighted={highlightedStation}
            />
          </div>
        </div>
        : <div>
          {loading && <p className="p-2">Loading stations...</p>}
          {error && <p className="p-2 text-red-500">{error}</p>}
        </div>
      }
    </div>
  );
}
