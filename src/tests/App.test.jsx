import { render } from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import App from '../App';
import { it } from 'vitest';


// Test 1: Write a test to check if `App` component renders.
it('App Component Renders Without Error', () => {
    render(<App />);
});

