import React, { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonProps = {
  children: ReactNode;
  buttonType?: string;
  disabled?: boolean; // Add a disabled prop
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, buttonType = 'primary', disabled = false, ...props }) => {
  const buttonClasses = disabled
    ? 'rounded-md bg-gray-400 px-3.5 py-2.5 text-sm font-semibold text-gray-600 cursor-not-allowed'
    : buttonType === 'primary'
    ? 'rounded-md bg-recipify-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-recipify-primary-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-recipify-primary-400'
    : 'rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400';

  return (
    <button type="button" className={buttonClasses} disabled={disabled} {...props}>
      {children}
    </button>
  );
};

export default Button;