import type { Station } from "@/store/stationStore";

interface Props {
    stations: Station[];
    onSelectStation: (station: Station) => void;
    onSelectCity: (city: string) => void;
    selectedCity: string;
    cities: string[];
}

export function StationList({
    stations,
    onSelectStation,
    selectedCity,
    onSelectCity,
    cities
}: Props) {

    return (
        <div className="flex flex-row gap-4 items-center bg-gray-100 p-2! border-b border-gray-200">
            {/* City Selector */}
            <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    City
                </label>
                <select
                    className="border border-gray-300 rounded-md p-1! text-sm shadow-sm
                               focus:outline-none focus:ring-1 focus:ring-blue-500 focus:border-blue-500
                               bg-white"
                    id="city-select"
                    aria-label="City"
                    value={selectedCity}
                    onChange={(e) => onSelectCity(e.target.value)}
                >
                    <option value="">All Cities</option>
                    {cities.map((city) => (
                        <option key={city} value={city}>
                            {city}
                        </option>
                    ))}
                </select>
            </div>

            {/* Station Selector */}
            <div className="flex items-center gap-2">
                <label className="text-sm font-semibold text-gray-700 uppercase tracking-wide">
                    Station
                </label>
                <select
                    className="border border-gray-300 rounded-md p-1! text-sm shadow-sm
                               focus:outline-none focus:ring-1 focus:ring-red-600 focus:border-red-600
                               bg-white min-w-55"
                    id="station-select"
                    aria-label="Station"
                    defaultValue=""
                    onChange={(e) => {
                        const station = stations.find(s => s.id === Number(e.target.value));
                        if (station) onSelectStation(station);
                    }}
                >
                    <option value="">{selectedCity ? selectedCity + " Stations" : "All Stations"}</option>
                    {stations.map((station) => (
                        <option key={station.id} value={station.id}>
                            {station.name} — {station.city}
                        </option>
                    ))}
                </select>
            </div>
        </div>
    );
}
