import { render, screen } from '@testing-library/react';
import App from './App';
import Hero from './Hero';

test('Example tag check', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Examples/i);
    expect(spanElement).toBeInTheDocument();
});

test('Team tag presents', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/Team/i);
    expect(spanElement).toBeInTheDocument();
});


test('This is a React text on the page', () => {
    render(<Hero />);
    const spanElement = screen.getByText(/This is a React/i);
    expect(spanElement).toBeInTheDocument();
});


test('Picture is present', () => {
    render(<Hero />);
    const spanElement = screen.getByTitle(/pic/i);
    expect(spanElement).toBeInTheDocument();
});