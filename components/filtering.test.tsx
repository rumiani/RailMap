import { render, screen } from "@testing-library/react";
import { StationList } from "./StationList";
import stationsMock from "@/__mocks__/stationsMock";

test("filters stations by selected city", () => {
  const onSelectCity = jest.fn();
  render(
    <StationList
      stations={stationsMock}
      cities={["Berlin", "Munich"]}
      selectedCity="Berlin"
      onSelectCity={onSelectCity}
      onSelectStation={() => {}}
    />
  );

  const stationSelect = screen.getByRole("combobox", { name: /station/i });

  // Only Berlin stations should be in the dropdown
  expect([...stationSelect.children].some(opt => opt.textContent?.includes("Frankfurt"))).toBe(false);
  expect([...stationSelect.children].some(opt => opt.textContent?.includes("Berlin"))).toBe(true);
});
