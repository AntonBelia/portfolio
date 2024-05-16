import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import Home from "./Home";

describe("Home", () => {
  test("renders avatar", () => {
    render(<Home />);
    const avatar = screen.getByTestId("home-avatar");
    expect(avatar).toBeInTheDocument();
  });

  test("renders name and hand emoji", () => {
    render(<Home />);
    const name = screen.getByText("Anton");
    const handEmoji = screen.getByText("🤚");
    expect(name).toBeInTheDocument();
    expect(handEmoji).toBeInTheDocument();
  });

  test("renders bio bullets", () => {
    render(<Home />);
    const homeContent = screen.getByTestId("home-content");
    expect(homeContent).toBeInTheDocument();
  });

  test("navigates to social links when clicked", () => {
    const { getByTestId } = render(<Home />);
    const githubLink = getByTestId("Github");
    expect(githubLink).toBeInTheDocument();
  });
});