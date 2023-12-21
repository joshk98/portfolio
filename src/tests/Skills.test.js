import React from "react";
import { render } from "@testing-library/react";
import Skills from "../components/Skills";

describe("Skills", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<Skills />);

    expect(asFragment()).toMatchSnapshot();
  });
});
