import { render, screen } from "@testing-library/react";
import Greeting from "./Greeting";
import userEvent from "@testing-library/user-event";

describe("Greeting test component", () => {
  test("render hello world", () => {
    render(<Greeting />);

    const helloWorldElemet = screen.getByText("Hello World");
    expect(helloWorldElemet).toBeInTheDocument();
  });

  test("render good to see you", () => {
    render(<Greeting />);

    const helloWorldElemet = screen.getByText("good to see you", {
      exact: false,
    });
    expect(helloWorldElemet).toBeInTheDocument();
  });

  test("Paragram without button click", () => {
    render(<Greeting />);

    const helloWorldElemet = screen.getByText("Paragram", {
      exact: false,
    });
    expect(helloWorldElemet).toBeInTheDocument();
  });

  test("Changed with button click", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const helloWorldElemet = screen.getByText("Changed");
    expect(helloWorldElemet).toBeInTheDocument();
  });

  test("'Paragram' should not be there when button was click", () => {
    render(<Greeting />);

    const buttonElement = screen.getByRole("button");
    userEvent.click(buttonElement);

    const outputElement = screen.queryByText("Paragram", { exact: false });
    expect(outputElement).toBeNull();
  });
});
