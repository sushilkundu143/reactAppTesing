import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Palindrome from "./Palindrome";
import {isPalidrome} from "../utils/utils";

describe("App component test", () => {
  test("render app input component", () => {
    render(<Palindrome />);
    const input = screen.getByTestId("palindrome");
    expect(input).toBeInTheDocument();
  });
  test("render input text is a palindrome", () => {
    render(<Palindrome />);
    const input = screen.getByTestId("palindrome");
    userEvent.type(input, 'aba');
    const checkPalidrome = isPalidrome(input.value);
    expect(checkPalidrome).toBe(true);
  });

  test("render input text is not a palindrome", () => {
    render(<Palindrome />);
    const input = screen.getByTestId("palindrome");
    userEvent.type(input, 'abc');
    const checkPalidrome = isPalidrome(input.value);
    expect(checkPalidrome).toBe(false);
  })
});
