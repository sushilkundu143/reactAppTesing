import { render, screen } from "@testing-library/react";
import Palindrome from "./Palindrome";

describe("App component test", () => {
  test("render app input component", () => {
    render(<Palindrome />);
    const input = screen.getByTestId("palindrome");
    expect(input).toBeInTheDocument();
  });
});
