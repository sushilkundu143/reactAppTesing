import {render, screen} from "@testing-library/react";
import Async from "./Async";

describe('Async Component test', () => {

    test('Async component is rendering the list', async () => {
        render(<Async />);
        const elementList = await screen.findAllByRole('listitem');
        expect(elementList).not.toHaveLength(0);
    });
    
    test('render post if request is succeeds', async () => {
        const mockData = [{ id: 'p1', title: "First post" }];
        global.fetch = jest.fn().mockResolvedValueOnce({
            json: async () => mockData
        });
        render(<Async />);
        const elementList = await screen.findAllByRole('listitem', 3000);
        expect(elementList).not.toHaveLength(0);
    });

});

