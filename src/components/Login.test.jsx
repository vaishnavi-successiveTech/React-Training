
import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Login from "./Login";


jest.mock("next/navigation", () => ({
  redirect: jest.fn(),
}));

const mockLogin = jest.fn();
const mockUseAuth = jest.fn();

jest.mock("@/context/AuthContext", () => ({
  useAuth: () => mockUseAuth(),
}));

describe("Login component", () => {
  beforeEach(() => {
    mockUseAuth.mockReturnValue({
      loggedIn: false,
      login: mockLogin,
    });
    jest.clearAllMocks();
  });

  test("renders inputs and buttons", () => {
    render(<Login />);

    expect(screen.getByPlaceholderText("Enter UserName")).toBeInTheDocument();
    expect(screen.getByPlaceholderText("password")).toBeInTheDocument();
    expect(screen.getByText("Log In")).toBeInTheDocument();
    expect(screen.getByText("Reset")).toBeInTheDocument();
    expect(screen.getByText("Please Login")).toBeInTheDocument();
  });

  test("accepts user input in fields", () => {
    render(<Login />);

    const usernameInput = screen.getByPlaceholderText("Enter UserName");
    const passwordInput = screen.getByPlaceholderText("password");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });

    expect(usernameInput.value).toBe("testuser");
    expect(passwordInput.value).toBe("mypassword");
  });

  test("reset button clears inputs", () => {
    render(<Login />);

    const usernameInput = screen.getByPlaceholderText("Enter UserName");
    const passwordInput = screen.getByPlaceholderText("password");
    const resetButton = screen.getByText("Reset");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });

    fireEvent.click(resetButton);

    expect(usernameInput.value).toBe("");
    expect(passwordInput.value).toBe("");
  });

  test("login button calls login with username and password", () => {
    render(<Login />);

    const usernameInput = screen.getByPlaceholderText("Enter UserName");
    const passwordInput = screen.getByPlaceholderText("password");
    const loginButton = screen.getByText("Log In");

    fireEvent.change(usernameInput, { target: { value: "testuser" } });
    fireEvent.change(passwordInput, { target: { value: "mypassword" } });

    fireEvent.click(loginButton);

    expect(mockLogin).toHaveBeenCalledWith("testuser", "mypassword");
  });

  test("shows welcome message when loggedIn is true", () => {
    // Mock loggedIn true
    mockUseAuth.mockReturnValue({
      loggedIn: true,
      login: mockLogin,
    });

    render(<Login />);

    expect(screen.getByText(/Welcome back/i)).toBeInTheDocument();
  });
});
