import React from 'react';
import { render } from '@testing-library/react';
import Badge from './';

describe('Badge Component', () => {
  it('renders with default color', () => {
    const { getByText } = render(<Badge>Default</Badge>);
    const badge = getByText('Default');
    expect(badge).toHaveClass('bg-recipify-primary-500'); // Use built-in matcher
  });

  it('renders with specified color', () => {
    const { getByText } = render(<Badge color="blue">Blue</Badge>);
    const badge = getByText('Blue');
    expect(badge).toHaveClass('bg-blue-50'); // Use built-in matcher
  });

  it('renders with unknown color as default', () => {
    const { getByText } = render(<Badge color="unknown">Unknown</Badge>);
    const badge = getByText('Unknown');
    expect(badge).toHaveClass('bg-gray-500'); // Use built-in matcher
  });

  it('renders with children', () => {
    const { getByText } = render(<Badge>With Children</Badge>);
    const badge = getByText('With Children');
    expect(badge).toBeInTheDocument(); // Use built-in matcher
  });
});
