import React from 'react';

type DividerProps = {
    className?: string; // Optional custom class name
};

const Divider: React.FC<DividerProps> = ({ className }) => {
    return (
        <hr
            className={`border-t border-gray-300 ${className || ''}`}
            aria-hidden="true"
        />
    );
};

export default Divider;