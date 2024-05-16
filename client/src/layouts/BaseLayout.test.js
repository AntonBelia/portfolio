import React from "react";
import { render, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import BaseLayout from "./BaseLayout";

jest.mock('axios', () => ({
  get: jest.fn(() => Promise.resolve({ data: {} })),
}));

describe("BaseLayout", () => {
  const history = createMemoryHistory();

  test("renders home component on root path", () => {
    history.push("/");
    render(
      <Router location={history.location} navigator={history}>
        <BaseLayout />
      </Router>
    );

    const homeComponent = screen.getByTestId("home");
    expect(homeComponent).toBeInTheDocument();
  });

  test("renders about component on about path", () => {
    history.push("/about");
    render(
      <Router location={history.location} navigator={history}>
        <BaseLayout />
      </Router>
    );

    const aboutComponent = screen.getByTestId("about");
    expect(aboutComponent).toBeInTheDocument();
  });
});
