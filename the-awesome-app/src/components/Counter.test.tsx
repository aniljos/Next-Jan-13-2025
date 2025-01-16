import {render, screen, fireEvent} from '@testing-library/react';
import Counter from './Counter';

test("render counter", () => {

        render(<Counter initialValue={5}/>);
        const text = screen.getByText("Counter: 5");
        expect(text).toBeInTheDocument();

})

test("render counter inc counter", () => {

    render(<Counter initialValue={5}/>);
    const text = screen.getByText("Counter: 5");
    expect(text).toBeInTheDocument();
    const incBtn = screen.getByText("Inc");
    fireEvent.click(incBtn);

    const updatedText = screen.getByText("Counter: 6");
    expect(updatedText).toBeInTheDocument();


})
