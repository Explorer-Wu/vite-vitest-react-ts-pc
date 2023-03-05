// App.test.tsx
import {describe, expect, test} from 'vitest';
import {render, screen, userEvent } from '@testing-library/react';
import App from './App';

// import React from 'react';
// test('App.tsx', () => {
//   render(<App />);
//   expect(screen.getByRole('heading').textContent).toBe('Vite + Vitest + React');
// });

describe("App test", () => {
    test("should show title all the time", () => {
        
        render(<App title='Vite + Vitest + React'><p>Content</p></App>);

        expect(screen.getByText(/Testing/i)).toBeDefined()
    })

    it('should increment count on click', async () => {
      render(<App />)
      userEvent.click(screen.getByRole('button'))
      expect(await screen.findByText(/count is: 1/i)).toBeInTheDocument()
    })
})

