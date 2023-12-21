import React from "react";
import { render } from "@testing-library/react";
import ProjectCard from "../components/ProjectCard";

describe("ProjectCard", () => {
  it("renders correctly", () => {
    const { asFragment } = render(<ProjectCard />);

    expect(asFragment()).toMatchSnapshot();
  });
});
