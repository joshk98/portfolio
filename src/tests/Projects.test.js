import React from "react";
import { render } from "@testing-library/react";
import Projects from "../components/Projects";

describe("Projects", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Projects />);

    expect(asFragment()).toMatchSnapshot();
  });
});
