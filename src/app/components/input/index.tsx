import React from 'react';

type InputProps = {
    label?: string;
    [key: string]: any;
    type: string;
}

const Input = ({ label, type, placeholder, ...rest }: InputProps) => {
    return (
        <div>
            <label className="block text-sm font-medium leading-6 text-white">
                {label}
            </label>
            <div className="mt-2">
                <input
                    type={type}
                    name="email"
                    id="email"
                    className="block px-5 w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder={placeholder}
                    {...rest}
                />
            </div>
        </div>
    );
}

export default Input;