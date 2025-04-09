import { render, screen } from '@testing-library/react';

describe('Sample Test', () => {
    it('renders a heading', () => {
        render(<h1>Hello Jest!</h1>);
        expect(screen.getByText('Hello Jest!')).toBeInTheDocument();
    });
});