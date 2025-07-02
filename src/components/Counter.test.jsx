import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Counter from "./Counter";

describe("Counter Component", () => {
  test("renders counter with initial value 0", () => {
    render(<Counter />);
    const countText = screen.getByText(/Count:/i);
    expect(countText).toHaveTextContent("Count:0");
  });

  test("increments the counter when Increment button is clicked", () => {
    render(<Counter />);
    const incrementButton = screen.getByText("Increment");
    fireEvent.click(incrementButton);
    expect(screen.getByText(/Count:/i)).toHaveTextContent("Count:1");
  });

  test("decrements the counter when Decrement button is clicked", () => {
    render(<Counter />);
    const decrementButton = screen.getByText("Decrement");
    fireEvent.click(decrementButton);
    expect(screen.getByText(/Count:/i)).toHaveTextContent("Count:-1");
  });
});
