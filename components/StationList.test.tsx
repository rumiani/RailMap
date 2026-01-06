// StationList.test.tsx
import { render, screen, fireEvent } from "@testing-library/react";
import { StationList } from "./StationList";
import stationsMock from "@/__mocks__/stationsMock";


describe("StationList", () => {
  test("renders cities and stations dropdowns", () => {
    render(
      <StationList
        stations={stationsMock}
        cities={["Berlin", "Munich"]}
        selectedCity=""
        onSelectCity={() => {}}
        onSelectStation={() => {}}
      />
    );

    // Cities dropdown
    const citySelect = screen.getByRole("combobox", { name: /city/i });
    expect(citySelect).toBeInTheDocument();
    expect(citySelect.children.length).toBe(3); // Select City + 2 cities

    // Stations dropdown
    const stationSelect = screen.getByRole("combobox", { name: /station/i });
    expect(stationSelect).toBeInTheDocument();
    expect(stationSelect.children.length).toBe(4); // Select Station + 3 stations
  });

  test("calls onSelectCity when a city is selected", () => {
    const onSelectCity = jest.fn();

    render(
      <StationList
        stations={stationsMock}
        cities={["Berlin", "Munich"]}
        selectedCity=""
        onSelectCity={onSelectCity}
        onSelectStation={() => {}}
      />
    );

    const citySelect = screen.getByRole("combobox", { name: /city/i });
    fireEvent.change(citySelect, { target: { value: "Munich" } });

    expect(onSelectCity).toHaveBeenCalledWith("Munich");
  });

  test("calls onSelectStation when a station is selected", () => {
    const onSelectStation = jest.fn();

    render(
      <StationList
        stations={stationsMock}
        cities={["Berlin", "Munich"]}
        selectedCity=""
        onSelectCity={() => {}}
        onSelectStation={onSelectStation}
      />
    );

    const stationSelect = screen.getByRole("combobox", { name: /station/i });
    fireEvent.change(stationSelect, { target: { value: "3" } });

    expect(onSelectStation).toHaveBeenCalledWith(stationsMock[2]); // Munich Hbf
  });
});
