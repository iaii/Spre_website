import React from 'react';
import Section from '../ui/Section';
import Button from '../ui/Button';

const CallToAction = () => {
    return (
        <Section id="cta" className="bg-white text-center py-24 md:py-32">
            <div className="max-w-4xl mx-auto">
                <h2 className="text-4xl md:text-5xl font-bold mb-8 text-primary">
                    Ready for the future of retail?
                </h2>
                <p className="text-xl text-gray-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                    Join leading grocers who are increasing basket size, reducing friction, and unlocking new revenue streams with Spre.ai.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <Button size="lg" variant="primary">Request a Demo</Button>
                    <Button size="lg" variant="ghost" className="border border-gray-200">Contact Sales</Button>
                </div>
            </div>
        </Section>
    );
};

export default CallToAction;
