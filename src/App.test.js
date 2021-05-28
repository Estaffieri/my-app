import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom";
import App from "./App";

describe("Website", () => {
  it("should render a simple website with a button", () => {
    const mockFunction = jest.fn();
    render(<App buttonClick={mockFunction} />);

    expect(
      screen.getByText("Welcome to my minimalist site!")
    ).toBeInTheDocument();
    expect(screen.getByText("Check In")).toBeInTheDocument();
  });

  it("should render new text when the button is clicked", () => {
    const mockButtonClick = jest.fn();
    render(<App buttonClick={mockButtonClick} />);

    const checkInButton = screen.getByText("Check In");
    fireEvent.click(checkInButton);

    expect(screen.getByText("Thanks for stopping by!")).toBeInTheDocument();
  });
});
