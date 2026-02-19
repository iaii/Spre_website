import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

const Section = ({
    children,
    className,
    id,
    dark = false
}) => {
    return (
        <section
            id={id}
            className={twMerge(clsx(
                'py-16 md:py-24 px-4 sm:px-6 lg:px-8',
                dark ? 'bg-primary text-white' : 'bg-light text-primary',
                className
            ))}
        >
            <div className="max-w-7xl mx-auto">
                {children}
            </div>
        </section>
    );
};

export default Section;
