import React from 'react';
import Section from '../ui/Section';

const AcceleratedCheckout = () => {
    return (
        <Section id="accelerated-checkout" className="bg-light">
            <div className="text-center max-w-4xl mx-auto mb-12">
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Accelerated Checkout with Smart Carts: A Time-Saving Solution</h2>
            </div>

            <div className="relative z-10 max-w-5xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 bg-white">
                    <img
                        src="/src/assets/images/Accelerated Checkout with Smart Carts.png"
                        alt="Accelerated Checkout with Smart Carts"
                        className="w-full h-auto"
                    />
                </div>
            </div>
        </Section>
    );
};

export default AcceleratedCheckout;
