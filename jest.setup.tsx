import "@testing-library/jest-dom";

// --- Mock CSS imports so Jest doesn't break ---
jest.mock("leaflet/dist/leaflet.css", () => ({}));

// --- Mock react-leaflet-cluster ---
jest.mock("react-leaflet-cluster", () => ({
  __esModule: true,
  default: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="cluster">{children}</div>
  ),
}));

// --- Mock react-leaflet completely ---
jest.mock("react-leaflet", () => ({
  __esModule: true,
  MapContainer: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="map">{children}</div>
  ),
  TileLayer: () => <div data-testid="tile-layer" />,
  Marker: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="marker">{children}</div>
  ),
  Popup: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="popup">{children}</div>
  ),
  useMap: () => ({
    setView: jest.fn(),
    getZoom: jest.fn().mockReturnValue(10),
  }),
}));
