import React from "react";
import { render } from "@testing-library/react";
import ProjectTemplate from "../components/projects/ProjectTemplate";

describe("ProjectTemplate", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ProjectTemplate />);

    expect(asFragment()).toMatchSnapshot();
  });
});
