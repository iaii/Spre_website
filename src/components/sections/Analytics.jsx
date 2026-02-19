import React from 'react';
import Section from '../ui/Section';

const Analytics = () => {
    return (
        <Section id="analytics" className="bg-primary text-white overflow-hidden relative" dark>
            <div className="relative z-10 text-center max-w-4xl mx-auto mb-12">
                <span className="text-accent-green font-semibold tracking-wider text-sm uppercase mb-3 block">Data & Insights</span>
                <h2 className="text-3xl md:text-5xl font-bold mb-6">Optimize your Store with Real-Time Insights from Carts and Shelves</h2>
                <p className="text-lg text-gray-400">
                    From planogram compliance to store heat maps, from shelf stocking levels to shopper picking decisions, our carts see and understand everything that happens on your retail floor
                </p>
            </div>

            <div className="relative z-10 max-w-6xl mx-auto">
                <div className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
                    <video
                        className="w-full h-auto"
                        autoPlay
                        muted
                        loop
                        playsInline
                        controls
                    >
                        <source src="/src/assets/images/spre_v1.mp4" type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            </div>

            <div className="absolute top-0 left-0 w-full h-full pointer-events-none">
                <div className="absolute top-[20%] left-[-10%] w-[40%] h-[40%] bg-accent-purple/10 rounded-full blur-3xl"></div>
            </div>
        </Section>
    );
};

export default Analytics;
