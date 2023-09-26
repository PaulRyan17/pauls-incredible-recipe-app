import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Button from './';

describe('Button Component', () => {
  it('renders with default primary style', () => {
    const { getByText } = render(<Button>Click Me</Button>);
    const button = getByText('Click Me');
    expect(button).toHaveClass('bg-recipify-primary-500');
  });

  it('renders with custom className', () => {
    const { getByText } = render(<Button className="custom">Custom Button</Button>);
    const button = getByText('Custom Button');
    expect(button).toHaveClass('custom');
  });

  it('renders with gray style when disabled', () => {
    const { getByText } = render(<Button disabled>Disabled</Button>);
    const button = getByText('Disabled');
    expect(button).toHaveClass('bg-gray-400 cursor-not-allowed');
    expect(button).toBeDisabled();
  });

  it('triggers onClick handler when clicked', () => {
    const onClickMock = jest.fn();
    const { getByText } = render(<Button onClick={onClickMock}>Click Me</Button>);
    const button = getByText('Click Me');

    fireEvent.click(button);
    expect(onClickMock).toHaveBeenCalledTimes(1);
  });
});
