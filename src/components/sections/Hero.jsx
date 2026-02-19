import React from 'react';
import { motion } from 'framer-motion';
import Button from '../ui/Button';
import Section from '../ui/Section';

const Hero = () => {
    return (
        <Section id="hero" className="relative min-h-screen flex items-center pt-32 overflow-hidden" dark>
            {/* Background Elements */}
            <div className="absolute inset-0 z-0">
                <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-purple/20 to-transparent" />
                <div className="absolute bottom-0 left-0 w-1/3 h-1/2 bg-gradient-to-t from-accent-green/10 to-transparent rounded-full blur-3xl" />
            </div>

            <div className="relative z-10 flex flex-col items-center justify-center text-center max-w-4xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                >
                    <h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-tight mb-6">
                        The Complete Digitalization Platform for Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-green to-blue-400">Retail Floor</span>
                    </h1>
                    <p className="text-xl text-gray-400 mb-8 leading-relaxed max-w-2xl mx-auto">
                        Spre.ai brings the best of online shopping to brick-and-mortar grocery stores: interactive, personalized & frictionless shopping experiences with data-driven store optimization
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" variant="primary">Request demo</Button>
                    </div>
                </motion.div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1, duration: 1 }}
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 cursor-pointer"
            >
                <span className="text-xs uppercase tracking-widest text-gray-500">Scroll to explore</span>
                <div className="w-0.5 h-12 bg-gradient-to-b from-accent-green to-transparent" />
            </motion.div>
        </Section>
    );
};

export default Hero;
