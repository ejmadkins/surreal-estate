import React from "react";
import { render } from "@testing-library/react";
import Properties from "../components/Properties";

describe("Properties", () => {
  test("renders Properties component correctly", () => {
    const { asFragment } = render(<Properties />);
    expect(asFragment()).toMatchSnapshot();
  });
});
