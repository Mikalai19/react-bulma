import { render, screen } from '@testing-library/react';
import App from './App';
import Cover from './Cover';

test('Button Learn more presents', () => {
    render(<Cover />);
    const spanElement = screen.getByText(/Learn more/i);
    expect(spanElement).toBeInTheDocument();
});

test('Examples', () => {
    render(<Cover />);
    const spanElement = screen.getByText(/Examples/i);
    expect(spanElement).toBeInTheDocument();
});

test('Team tab is present', () => {
    render(<Cover />);
    const spanElement = screen.getByText(/Team/i);
    expect(spanElement).toBeInTheDocument();
});

test('Picture presents', () => {
    render(<Cover />);
    const spanElement = screen.getByTitle(/pic/i);
    expect(spanElement).toBeInTheDocument();
});

test('Tab named Features', () => {
    render(<Cover />);
    const spanElement = screen.getByText(/Features/i);
    expect(spanElement).toBeInTheDocument();
});