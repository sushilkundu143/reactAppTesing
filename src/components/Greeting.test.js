import Greetings from "./Greetings";
import {render, screen} from "@testing-library/react";
import userEvent from "@testing-library/user-event";


describe("Greeting Component", () => {
    test('render "hello world"  as a text', () => {
        // Arrange
        render(<Greetings />);
        // Act
    
        // Asset
        const helloWorldElement = screen.getByText("Hello World!");
        expect(helloWorldElement).toBeInTheDocument();
    });

    test('render "good to see you" as a text exist', () => {
        render(<Greetings />);
        const checktext = screen.getByText("good to see you", {exact: false});
        expect(checktext).toBeInTheDocument();
    });

    test('render "good to see you" not exist on button click', () => {
        render(<Greetings />);
        const button = screen.getByRole("button");
        userEvent.click(button);
        const checktext = screen.queryByText("good to see you", {exact: false});
        expect(checktext).toBeNull();
    });

    test('render "Changed Text" should visible on button click', () => {
        render(<Greetings />);
        const button = screen.getByRole("button");
        userEvent.click(button);
        const checktext = screen.getByText("Changed Text", {exact: false});
        expect(checktext).toBeInTheDocument();
    })

});

