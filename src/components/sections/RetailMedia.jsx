import React from 'react';
import Section from '../ui/Section';
import { Target, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';

const RetailMedia = () => {
    return (
        <Section id="media" className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-16">
                <div>
                    <h2 className="text-3xl md:text-5xl font-bold mb-6">High Conversion, Right up the Aisle</h2>
                    <p className="text-lg text-gray-600 mb-8">
                        The cart's screen is a highly effective retail media channel - reaching shoppers with personalized offers, exactly where and when they select products
                    </p>

                    <div className="space-y-8">
                        {[
                            { icon: <TrendingUp />, title: "10X higher conversion rates", desc: "than online promotions" },
                            { icon: <Target />, title: "Media inventory", desc: "can be used for own-brand promotions or sold to advertisers" },
                            { icon: <DollarSign />, title: "APIs", desc: "to grocer’s existing promotion platforms, online and in-store" }
                        ].map((item, i) => (
                            <div key={i} className="flex gap-4">
                                <div className="flex-shrink-0 w-12 h-12 bg-purple-100 text-accent-purple rounded-xl flex items-center justify-center">
                                    {React.cloneElement(item.icon, { size: 24 })}
                                </div>
                                <div>
                                    <h4 className="text-xl font-bold mb-1">{item.title}</h4>
                                    <p className="text-gray-600">{item.desc}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                <div className="bg-gray-50 rounded-3xl p-4 border border-gray-100 flex items-center justify-center">
                    <img
                        src="/src/assets/images/Screenshot 2026-02-18 at 3.44.40 PM.png"
                        alt="Retail Media Interface"
                        className="w-full h-auto rounded-xl shadow-lg"
                    />
                </div>
            </div>

            {/* Promotions Flow */}
            <div className="mt-16 pt-16 border-t border-gray-100">
                <h3 className="text-center text-xl font-bold mb-10 text-gray-400 uppercase tracking-widest">How it Works</h3>
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
                    {[
                        { title: "Promotions inventory", desc: "Feed from existing system or create on Spre.ai’s platform" },
                        { title: "Targeted display logic", desc: "Set prompt rules, based on shopper identity, store location and more" },
                        { title: "Conversion!", desc: "Measure effectiveness: how many promoted products ended in the basket" },
                        { title: "Outcomes-based optimization", desc: "Analyze response and modify logic on the fly" }
                    ].map((step, i) => (
                        <div key={i} className="relative p-6 bg-gray-50 rounded-xl">
                            <h4 className="font-bold text-lg mb-2 text-primary">{step.title}</h4>
                            <p className="text-sm text-gray-600">{step.desc}</p>
                            {i < 3 && (
                                <div className="hidden md:flex absolute top-1/2 -right-10 transform -translate-y-1/2 text-gray-300 z-10 w-8 justify-center">
                                    <ArrowRight size={24} />
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>
        </Section>
    );
};

export default RetailMedia;
