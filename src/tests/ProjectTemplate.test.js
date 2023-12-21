import React from "react";
import { render } from "@testing-library/react";
import ProjectCard from "../components/projects/ProjectTemplate";

describe("ProjectCard", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ProjectCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});
