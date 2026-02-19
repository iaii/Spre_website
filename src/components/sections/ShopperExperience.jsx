import React from 'react';
import Section from '../ui/Section';
import { Scan, Eye, Map, CreditCard, TrendingUp } from 'lucide-react';

const ShopperExperience = () => {
    return (
        <Section id="experience" className="bg-light relative">
            <div className="text-center max-w-3xl mx-auto mb-16">
                <span className="text-accent-purple font-semibold tracking-wider text-sm uppercase mb-3 block">Frictionless is More</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Frictionless is More</h2>
                <p className="text-lg text-gray-600">
                    The market most mature smart cart solution makes shopping as simple and smooth as it gets
                </p>
            </div>

            <div className="flex flex-wrap justify-center gap-8">
                {[
                    {
                        title: "Automated Identification",
                        desc: "Uses computer vision to automatically identify products inserted or removed",
                        bg: "bg-blue-50",
                        icon: <Scan size={32} />
                    },
                    {
                        title: "Full Transparency",
                        desc: "Fully transparent: presents the bills constantly on a large touch screen",
                        bg: "bg-purple-50",
                        icon: <Eye size={32} />
                    },
                    {
                        title: "Navigation",
                        desc: "Helps shoppers navigate the store",
                        bg: "bg-green-50",
                        icon: <Map size={32} />
                    },
                    {
                        title: "Seamless Checkout",
                        desc: "No checkout lines: pay on the cart and go",
                        bg: "bg-orange-50",
                        icon: <CreditCard size={32} />
                    },
                    {
                        title: "Revenue Growth",
                        desc: "Boosts revenue through higher basket value and lower shrinkage",
                        bg: "bg-pink-50",
                        icon: <TrendingUp size={32} />
                    }
                ].map((item, idx) => (
                    <div key={idx} className={`${item.bg} w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.333%-2rem)] rounded-3xl p-8 hover:shadow-lg transition-shadow duration-300 border border-gray-100 flex flex-col items-start`}>
                        <div className="mb-6 text-accent-green">
                            {item.icon}
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-gray-600 leading-relaxed text-sm">
                            {item.desc}
                        </p>
                    </div>
                ))}
            </div>
        </Section>
    );
};

export default ShopperExperience;
