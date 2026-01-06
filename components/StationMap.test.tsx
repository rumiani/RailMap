import { render, screen } from "@testing-library/react";
import { StationMap } from "./StationMap";
import stationsMock from "@/__mocks__/stationsMock";


describe("StationMap", () => {
  it("renders cluster container", () => {
    render(<StationMap stations={stationsMock
    } />);
    expect(screen.getByTestId("cluster")).toBeInTheDocument();
  });
});
