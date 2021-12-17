import { render, screen } from '@testing-library/react';
import App from './App';
import Documentation from './Documentation';



test('renders Best ideas ', () => {
    render(<Documentation />);
    const spanElement = screen.getByText(/Best ideas/i);
    expect(spanElement).toBeInTheDocument();
});


test('New tag presents ', () => {
    render(<Documentation />);
    const spanElement = screen.getByText(/New tag/i);
    expect(spanElement).toBeInTheDocument();
});

test('Account only represent on the page ', () => {
    render(<Documentation />);
    const spanElement = screen.getByTitle(/account/i);
    expect(spanElement).toBeInTheDocument();
});


test('Billing only tag presents ', () => {
    render(<Documentation />);
    const spanElement = screen.getByTitle(/billing/i);
    expect(spanElement).toBeInTheDocument();
});