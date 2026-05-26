import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { expect, it } from 'vitest';
import { input } from '@testing-library/user-event/dist/cjs/event/input.js';


// Test 1: Write a test to check if (App.jsx) component renders.
it('should render App Component', () => {
    render(<App />);
});


// Test 2: check if input is writable.
it('should check that user can write in input', async () => {
   
    // create fake user inside the test
    const user = userEvent.setup();
    render(<App />);

    // first find the input 
    const input = screen.getByRole('textbox');
    console.log(input.value);

     // then check if the input is writable or not.
     //(user.type means (where you type, what you type) 
    //  important: you are Not typing in the browser'buy milk' this line type it automatically because of the fake user.
    await user.type(input, 'buy milk');
    

     // finally check result(I expect the input’s value to equal 'buy milk' inside the test.)
     // (toBe() checks if it is exactly equal with, what you type in user.type.)
    expect(input.value).toBe('buy milk');
    
});

// Test 3: check if Add button can add new note.
it('should add a new note when Add button is clicked', async() => {

      // create fake user inside the test
    const user = userEvent.setup();
    render(<App />);

      // first find the input 
    const input = screen.getByRole('textbox');
    

      // second check if the input is writable.
    await user.type(input, 'buy milk');

     // third find Add button and click it.  
    await user.click(
        screen.getByRole( 'button', {name: 'Add'})
    )
    // forth check result, if new text appears after clicking Add button.
    // toBeDefined() checks that the new li element was found.
    expect(screen.getByText('buy milk')).toBeDefined();
});




