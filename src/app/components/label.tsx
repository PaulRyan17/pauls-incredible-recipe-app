import React, { ReactNode, HTMLProps } from 'react';

type LabelProps = HTMLProps<HTMLLabelElement>;

const Label: React.FC<LabelProps> = ({ children, ...props }) => {
  return (
    <label className="block text-sm font-medium text-recipify-secondary" {...props}>
      {children}
    </label>
  );
};

export default Label;