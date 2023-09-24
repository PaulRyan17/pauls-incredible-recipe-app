import React, { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonType = 'primary' | 'secondary';

type ButtonProps = {
  children: ReactNode;
  type?: ButtonType;
} & ButtonHTMLAttributes<HTMLButtonElement>;

const Button: React.FC<ButtonProps> = ({ children, type = 'primary', ...props }) => {
  const buttonClasses =
    type === 'primary'
      ? 'rounded-md bg-recipify-primary-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm'
      : 'rounded-md bg-gray-300 px-3.5 py-2.5 text-sm font-semibold text-gray-600 shadow-sm hover:bg-gray-400 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-400';

  return (
    <button type="button" className={buttonClasses} {...props}>
      {children}
    </button>
  );
};

export default Button;
