import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../App';
import { expect, it, beforeEach } from 'vitest';
// import { input } from '@testing-library/user-event/dist/cjs/event/input.js';

// the test expect only one note in every rendering, so we need to Clear localStorage before each test to prevent duplicate saved notes. this can make test errors.( beforeEach() is a built-in Vitest method to call a browser method(localStorage.clear()). )

beforeEach(() => {
  localStorage.clear();
});


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
    // getByAll...(), ALWAYS return an array. so we use index to select the exact element.
    const input = screen.getAllByRole('textbox')[0];
    console.log(input.value);

     // then check if the input is writable or not.
     //  (user.type means (where you type, what you type) 
    // important: you are Not typing in the browser'buy milk' this line type it automatically by the fake user.
    await user.type(input, 'buy milk');
    

     // finally check result(I expect the input’s value to be equal 'buy milk' inside the test.)
     // (toBe() checks if it is exactly equal with, what you type in user.type.)
    expect(input.value).toBe('buy milk');
    
});

// Test 3: check if Add button can add new note.
it('should add a new note when Add button is clicked', async() => {

      // this part is the same as Test 2: ===========
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getAllByRole('textbox')[0];
    await user.type(input, 'buy milk');
     // ==============================================

     // find Add button and click it.  
    await user.click( screen.getByRole( 'button', {name: 'Add'}));

    // check result, if new text appears after clicking Add button.
    // toBeDefined() checks that the new li element was found.
    // getBy...(), check that something should exist.
    expect(screen.getByText('buy milk')).toBeDefined();
});


// Test 4: it should check if user can edit a note.
it('should edit an existing note', async() => {

    // this part is the same as Test 3: ===========
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'buy milk');  
    await user.click( screen.getByRole( 'button', {name: 'Add'}));
    // =============================================
    // find Edit button and click it.  
    await user.click(screen.getByRole( 'button', {name: 'Edit'}) );

    // find edit input
    // getByAll...(), ALWAYS return an array. so we use index to select the exact element.
    const editInput = screen.getAllByRole('textbox')[1];
    // clear old note
    await user.clear(editInput);
    //  type new note
    await user.type(editInput, 'hello');

    // save edited note
    await user.click(screen.getByRole( 'button', {name: 'Save'}) );

    // check that the old note is disappeared.
    // queryBy...(), checking that something disappeared.
    // toBeNull() use with queryBy...(), because queryBy...() return null when it can not find something.
  expect(screen.queryByText('buy milk')).toBeNull();

   // new text should replace the old text.
  expect(screen.getByText('hello')).toBeDefined();

});


// Test 5: it should delete note after pressing delete button.
it('should delete note after pressing delete button', async() => {

    // this part is the same as Test 3: ===========
    const user = userEvent.setup();
    render(<App />);
    const input = screen.getByRole('textbox');
    await user.type(input, 'buy milk');  
    await user.click( screen.getByRole( 'button', {name: 'Add'}));
    // =============================================
    // find Delete button and click it.  
    await user.click(screen.getByRole( 'button', {name: 'Delete'}) );
    // check if note was deleted
    expect(screen.queryByText('buy milk')).toBeNull();
});



