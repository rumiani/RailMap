import { create } from "zustand";

export interface Station {
    id: number;
    name: string;
    city: string;
    lat: number;
    lng: number;
}

interface StationState {
    stations: Station[];
    loading: boolean;
    error: string | null;
    fetchStations: () => Promise<void>;
}
const url = "https://gist.githubusercontent.com/neysidev/bbd40032f0f4e167a1e6a8b3e99a490c/raw/fc7dc242f41393845d90edaa99e32e28f1ddfe24/train-stations.json"

export const useStationStore = create<StationState>((set) => ({
    stations: [],
    loading: false,
    error: null,
    fetchStations: async () => {
        set({ loading: true, error: null });
        try {
            const res = await fetch(url);
            if (!res.ok) throw new Error("Failed to fetch stations");
            const data: Station[] = await res.json();
            set({ stations: data, loading: false });
        } catch (err: any) {
            set({ error: err.message, loading: false });
        }
    },
}));
