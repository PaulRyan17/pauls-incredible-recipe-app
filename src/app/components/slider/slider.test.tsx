import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import Slider from './';

describe('Slider Component', () => {
  it('updates value on slider change', () => {
    const onChangeMock = jest.fn();
    render(<Slider label="Slider" min={0} max={100} initialValue={50} onChange={onChangeMock} />);
    
    // Find the slider input element and assert its type
    const sliderElement = screen.getByRole('slider') as HTMLInputElement;
    
    // Simulate changing the slider value
    fireEvent.change(sliderElement, { target: { value: '75' } });
    
    // Ensure the slider value is updated
    expect(parseInt(sliderElement.value, 10)).toBe(75);
    
    // Ensure the onChange callback is called with the new value
    expect(onChangeMock).toHaveBeenCalledWith(75);
  });
});