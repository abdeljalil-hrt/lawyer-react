import React from 'react';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
    ({ className, type, label, error, ...props }, ref) => {
        return (
            <div className="w-full">
                {label && (
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {label}
                    </label>
                )}
                <input
                    type={type}
                    className={`
                        w-full rounded-xl border border-gray-300 bg-white/50 px-4 py-3 
                        text-base text-gray-800 placeholder-gray-400 backdrop-blur-sm 
                        transition-all duration-200 ease-in-out 
                        focus:border-[#a70000] focus:ring-4 focus:ring-[#a70000]/10 focus:outline-none 
                        disabled:opacity-60
                        ${error ? 'border-red-500 focus:border-red-500 focus:ring-red-500/10' : ''}
                        ${className}
                    `}
                    ref={ref}
                    {...props}
                />
                {error && (
                    <p className="mt-1 text-sm text-red-500">{error}</p>
                )}
            </div>
        );
    }
);

Input.displayName = 'Input';

export default Input;
