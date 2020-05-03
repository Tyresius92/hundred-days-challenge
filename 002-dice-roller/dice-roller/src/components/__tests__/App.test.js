import React from "react";
import { render } from "@testing-library/react";
import App from "../App";

describe("App", () => {
  it("renders the h1", () => {
    const { getByText } = render(<App />);
    expect(getByText("Specify your roll")).toBeInTheDocument();
  });
});
