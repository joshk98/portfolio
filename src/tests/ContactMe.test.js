import React from "react";
import { render } from "@testing-library/react";
import ContactMe from "../components/ContactMe";

describe("ContactMe", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ContactMe />);

    expect(asFragment()).toMatchSnapshot();
  });
});
