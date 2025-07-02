import React from "react";
import { render, screen } from "@testing-library/react";
import UserCard from "./UserCard";

describe("UserCard component", () => {
  test("renders user information and avatar", () => {
    render(
      <UserCard
        name="Jane Doe"
        email="jane@example.com"
        avatarUrl="https://example.com/avatar.jpg"
      />
    );

    expect(screen.getByText(/Name:/)).toHaveTextContent("Name: Jane Doe");
    expect(screen.getByText(/Email:/)).toHaveTextContent("Email: jane@example.com");
    const img = screen.getByAltText("User avatar");
    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", "https://example.com/avatar.jpg");
  });
});
