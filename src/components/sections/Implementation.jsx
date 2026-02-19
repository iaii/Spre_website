import React from 'react';
import Section from '../ui/Section';

const Implementation = () => {
    const steps = [
        { num: '01', title: "Integrate with your systems", desc: "Connect us with your POS, inventory, promotions and other relevant systems" },
        { num: '02', title: "Train our AI", desc: "Teach our computer vision to recognize your products by inserting every item a few times into a cart" },
        { num: '03', title: "Gear your stores", desc: "Add small plastic mounts to your carts and a shelving unit to hold the Robi devices" },
        { num: '04', title: "Prepare your staff", desc: "Instruct store employees on operating the system and perfecting the shopper experience" }
    ];

    return (
        <Section id="implementation" className="bg-light">
            <div className="text-center mb-16">
                <h2 className="text-3xl md:text-5xl font-bold mb-4">Get Smart in 4 Simple Steps</h2>
                <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                    Based on our extensive experience in deploying solutions for retailers worldwide, we have developed a bullet-proof implementation method. Our experts will kick-start the operation in the first stores, and then train your team on scaling it across your entire chain.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {steps.map((step, idx) => (
                    <div key={idx} className="relative p-6 bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow h-full">
                        <div className="text-6xl font-black text-gray-100 mb-4 absolute top-4 right-4 z-0">
                            {step.num}
                        </div>
                        <div className="relative z-10 flex flex-col h-full">
                            <div className="flex-grow mt-8">
                                <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.desc}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default Implementation;
