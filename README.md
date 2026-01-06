# Germany Train Stations Map

### Application: [Rail-Map](https://rail-map-de.vercel.app/)


### Description:
  A Next + TypeScript + Leaflet app that visualizes train stations in Germany. 
  Users can filter stations by city, select individual stations, and explore them 
  on an interactive map. State management is handled with Zustand and styling is done with TailwindCSS.

### Features:
  - Fetch train station data from a public API (GitHub Gist)
  - Display stations on a Leaflet map with clustering
  - City and station dropdown filters
  - Click a city to zoom to its area
  - Click a station to zoom directly to it
  - Responsive and clean UI
  - Unit tests using Jest + React Testing Library

### Technologies:
  - frontend:
    - Next
    - TypeScript
    - TailwindCSS
  - mapping:
    - Leaflet.js
  - state_management:
    - Zustand
  - dev_tools:
    - Jest
    - React Testing Library

### Installation:
    - Clone the repository:
      command: git clone https://github.com/yourusername/railmap.git
    - Navigate to project directory:
      command: cd railmap
    - Install dependencies:
      command: npm install
    - Run development server:
      command: npm dev
    - Run tests:
      command: npm test

### Usage:
  - Select a city from the dropdown to filter stations and zoom the map
  - Select a station to zoom directly to that station
  - Click markers on the map to view station information
  - Marker clusters can be clicked to zoom in and reveal individual stations

### Folder_structure:
  ### src:
    - components: "React components (StationMap, StationList, etc.)"
    - store: "Zustand store for state management"
    - styles: "Tailwind or global styles"
    - tests: "Unit and integration tests"
    - page.tsx: "Main application entry"

### Testing:
  - Description:
    Tests cover rendering of city and station dropdowns, filtering stations by city,
    map interactions (zoom on station click), and marker clustering behavior.
- command: npm test
