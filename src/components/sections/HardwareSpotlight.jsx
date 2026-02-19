import React from 'react';
import { motion } from 'framer-motion';
import { Check, Cpu, Battery, Wifi } from 'lucide-react';
import Section from '../ui/Section';

const HardwareSpotlight = () => {
    const features = [
        { icon: <Cpu />, title: "Edge Processing", desc: "Runs AI models directly on the device" },
        { icon: <Battery />, title: "All-Day Battery", desc: "15+ hours of continuous operation" },
        { icon: <Wifi />, title: "Always Connected", desc: "Seamless 5G and Wi-Fi integration" },
    ];

    return (
        <Section id="hardware" className="relative overflow-hidden">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="order-2 lg:order-1 relative"
                >
                    <div className="aspect-square bg-gray-100 rounded-3xl overflow-hidden flex items-center justify-center p-8">
                        <img
                            src="/src/assets/images/main_spre.png"
                            alt="Robi Device"
                            className="w-full h-full object-contain"
                        />
                    </div>
                </motion.div>

                <div className="order-1 lg:order-2">
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">It All Starts with Robi</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        Our AI-powered patent-protected Robi clip-on device turns any standard shopping cart into a smart cart, a retail media channel, and a data collector.
                    </p>

                    <ul className="space-y-4 mb-8">
                        {[
                            'Deployed with minimal store modifications: a charger-shelf unit and plastic mounts on existing carts',
                            'Doesn’t disrupt shopper habits: at the end of a visit, Robi is returned to its shelf, and the cart can be rolled to the parking',
                            'On-device processing: low latency and no need for connectivity upgrade'
                        ].map((item, i) => (
                            <li key={i} className="flex items-start gap-3">
                                <div className="bg-accent-green/10 p-1 rounded-full text-accent-green mt-1">
                                    <Check size={18} />
                                </div>
                                <span className="text-gray-700 font-medium">{item}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-gray-100">
                        {features.map((feature, i) => (
                            <div key={i} className="flex flex-col gap-2">
                                <div className="text-accent-purple mb-1">
                                    {React.cloneElement(feature.icon, { size: 28 })}
                                </div>
                                <h4 className="font-bold text-sm">{feature.title}</h4>
                                <p className="text-xs text-gray-500">{feature.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </Section>
    );
};

export default HardwareSpotlight;
