import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Button = ({
    children,
    variant = 'primary',
    size = 'md',
    className,
    ...props
}) => {
    const baseStyles = 'inline-flex items-center justify-center rounded-full font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-accent-green focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none';

    const variants = {
        primary: 'bg-accent-green text-white hover:bg-[#16a085]',
        outline: 'border-2 border-white text-white hover:bg-white/10',
        ghost: 'text-primary hover:bg-gray-100',
        dark: 'bg-primary text-white hover:bg-primary/90',
    };

    const sizes = {
        sm: 'h-9 px-4 text-sm',
        md: 'h-11 px-6 text-base',
        lg: 'h-14 px-8 text-lg',
    };

    return (
        <button
            className={twMerge(clsx(baseStyles, variants[variant], sizes[size], className))}
            {...props}
        >
            {children}
        </button>
    );
};

export default Button;
