import { render, screen } from '@testing-library/react';
import App from './App';
import Contact from './Contact';


test('renders dashboard tag', () => {
    render(<Contact />);
    const spanElement = screen.getByText(/Contact Us/i);
    expect(spanElement).toBeInTheDocument();
});

test('Send Message button presents', () => {
    render(<Contact />);
    const spanElement = screen.getByTitle(/but1/i);
    expect(spanElement).toBeInTheDocument();
});

test('Instagaram icon', () => {
    render(<Contact />);
    const spanElement = screen.getByTitle(/insta/i);
    expect(spanElement).toBeInTheDocument();
});

test('Name testing', () => {
    render(<Contact />);
    const spanElement = screen.getByText(/Name/i);
    expect(spanElement).toBeInTheDocument();
});

test('Twitter icon present', () => {
    render(<Contact />);
    const spanElement = screen.getByTitle(/twit/i);
    expect(spanElement).toBeInTheDocument();
});

test('check if Lets go present', () => {
    render(<Contact />);
    const spanElement = screen.getByText(/Lets go/i);
    expect(spanElement).toBeInTheDocument();
});

test('check if What up present', () => {
    render(<Contact />);
    const spanElement = screen.getByText(/What up/i);
    expect(spanElement).toBeInTheDocument();
});


