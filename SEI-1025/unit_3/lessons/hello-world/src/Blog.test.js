import { render, screen } from '@testing-library/react';
import App from './App';
import Blog from './Blog';


test('renders This is Blog about me', () => {
    render(<Blog />);
    const spanElement = screen.getByText(/This is Blog about me/i);
    expect(spanElement).toBeInTheDocument();
});

test('@tania renders on the page', () => {
    render(<Blog />);
    const spanElement = screen.getByText(/@tania/i);
    expect(spanElement).toBeInTheDocument();
});

test('month on the page', () => {
    render(<Blog />);
    const spanElement = screen.getByTitle(/month/i);
    expect(spanElement).toBeInTheDocument();
});