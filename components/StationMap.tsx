import { MapContainer, TileLayer, Marker, Popup, useMap } from "react-leaflet";
import { divIcon, Icon, type DivIcon } from "leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import "leaflet/dist/leaflet.css";
import type { Station } from "@/store/stationStore";

interface Props {
    stations: Station[];
    highlighted?: Station | null;
}

export function StationMap({ stations, highlighted }: Props) {
    const customIcon = new Icon({
        iconUrl: "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
        iconSize: [38, 38],
        iconAnchor: [19, 38],
        popupAnchor: [0, -38],
        shadowUrl: "https://unpkg.com/leaflet@1.7.1/dist/images/marker-shadow.png",
        shadowSize: [41, 41],
    });

    const createCustomClusterIcon = (cluster: any): DivIcon => {
        return divIcon({
            html: `<div class="cluster-icon"><span>${cluster.getChildCount()}</span></div>`,
            iconSize: [40, 40],
            iconAnchor: [20, 40],
            popupAnchor: [0, -40],
            className: "custom-cluster-icon",
        });
    };

    const ZoomMarker = ({ station }: { station: Station }) => {
        const map = useMap();
        if (highlighted && highlighted.id === station.id) {
            map.setView([station.lat, station.lng], 14, { animate: true });
        }

        return (
            <Marker
                position={[station.lat, station.lng]}
                icon={customIcon}
                eventHandlers={{
                    click: () =>
                        map.setView([station.lat, station.lng], map.getZoom() + 3, {
                            animate: true,
                        }),
                }}
            >
                <Popup>
                    <strong>{station.name}</strong>
                    <br />
                    {station.city}
                </Popup>
            </Marker>
        );
    };

    return (
        <div className="relative h-[500] w-full">
            <MapContainer
                center={[51.1657, 10.4515]}
                zoom={6}
                style={{ height: "80%", width: "100%" }}
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution="© OpenStreetMap contributors"
                />
                <MarkerClusterGroup
                    chunkedLoading
                    iconCreateFunction={createCustomClusterIcon}
                >
                    {stations.map((station) => (
                        <ZoomMarker key={station.id} station={station} />
                    ))}
                </MarkerClusterGroup>
            </MapContainer>
        </div>
    );
}
