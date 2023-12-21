import React from "react";
import { render } from "@testing-library/react";
import AboutMe from "../components/AboutMe";

describe("AboutMe", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<AboutMe />);

    expect(asFragment()).toMatchSnapshot();
  });
});
