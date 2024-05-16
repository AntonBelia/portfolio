import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import { createMemoryHistory } from "history";
import { Router } from "react-router-dom";
import Navbar from "./Navbar";

describe("Navbar", () => {
  const history = createMemoryHistory();

  test("navigates to home page on click", () => {
    history.push("/about");
    render(
      <Router location={history.location} navigator={history}>
        <Navbar />
      </Router>
    );

    const homeLink = screen.getByTestId("home");
    fireEvent.click(homeLink);

    expect(history.location.pathname).toBe("/");
  });

});
