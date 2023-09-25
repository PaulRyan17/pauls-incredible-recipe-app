import React, { ChangeEvent, useState } from 'react';

type SliderProps = {
  label: string;
  min: number;
  max: number;
  initialValue: number;
  onChange: (value: number) => void;
};

const Slider: React.FC<SliderProps> = ({ label, min, max, initialValue, onChange }) => {
  const [value, setValue] = useState(initialValue);

  const handleSliderChange = (e: ChangeEvent<HTMLInputElement>) => {
    const newValue = parseInt(e.target.value, 10);
    setValue(newValue);
    onChange(newValue);
  };

  return (
    <>
      <input
        id="minmax-range"
        type="range"
        min={min}
        max={max}
        value={value}
        onChange={handleSliderChange}
        className="w-full h-2 bg-recipify-primary-500 rounded-lg appearance-none cursor-pointer"
      />
      <span className='text-gray-600'>{value} {label}</span>
    </>
  );
};

export default Slider;