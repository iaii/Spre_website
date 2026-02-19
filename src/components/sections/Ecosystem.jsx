import React from 'react';
import Section from '../ui/Section';

const Ecosystem = () => {
    const products = [
        {
            name: 'Robi',
            subheading: 'In Cart Purchasing',
            image: '/src/assets/images/Spre.png',
            features: [
                'Just in Time Couponing',
                'Location based Offers / Promos'
            ]
        },
        {
            name: 'Nitro',
            subheading: 'Smart Scale',
            image: '/src/assets/images/Nitro.png',
            features: [
                'Ability to add quantity produce',
                'Other weighted items'
            ]
        },
        {
            name: 'Nova',
            subheading: 'Interactive Digital Assistant',
            image: '/src/assets/images/Nova.png',
            features: [
                'Directions to Product in Store',
                'Price checker and more info',
                'Storewide Promos',
                'Call Store Manager'
            ]
        }
    ];

    return (
        <Section id="ecosystem" className="bg-white">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">The Spre.ai Ecosystem</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    A comprehensive suite of smart retail solutions designed to enhance every aspect of the shopping journey.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
                {products.map((product, idx) => (
                    <div key={idx} className="flex flex-col items-center">
                        <div className="h-64 flex items-center justify-center mb-6">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="max-h-full max-w-full object-contain"
                            />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900">{product.name}</h3>
                        <p className="text-sm font-medium text-gray-500 mb-6 uppercase tracking-wide">{product.subheading}</p>

                        <ul className="space-y-3 text-left w-full max-w-xs mx-auto">
                            {product.features.map((feature, fIdx) => (
                                <li key={fIdx} className="flex items-start gap-2 text-gray-700">
                                    <div className="w-1.5 h-1.5 rounded-full bg-accent-green mt-2 flex-shrink-0" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Ecosystem;
