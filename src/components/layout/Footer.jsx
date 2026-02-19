import React from 'react';
import { Linkedin, Twitter, Facebook, Instagram } from 'lucide-react';

const Footer = () => {
    const footerLinks = {
        Platform: ['Vision-Powered Loss Prevention', 'Vision-Powered Smart cart', 'Retail media', 'Store analytics'],
        Company: ['About us', 'News & Coverages', 'Careers', 'Contact us'],
        Knowledge: ['Knowledge'],
    };

    return (
        <footer className="bg-primary text-white pt-16 pb-8 border-t border-white/10">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
                    <div className="lg:col-span-2">
                        <span className="text-2xl font-bold tracking-tight mb-4 block">Spre.ai</span>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="text-gray-400 hover:text-accent-green transition-colors"><Linkedin size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent-green transition-colors"><Twitter size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent-green transition-colors"><Facebook size={20} /></a>
                            <a href="#" className="text-gray-400 hover:text-accent-green transition-colors"><Instagram size={20} /></a>
                        </div>
                    </div>

                    {Object.entries(footerLinks).map(([category, links]) => (
                        <div key={category} className="lg:col-span-1">
                            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 mb-4">{category}</h3>
                            <ul className="space-y-3">
                                {links.map((link) => (
                                    <li key={link}>
                                        <a href="#" className="text-base text-gray-300 hover:text-white transition-colors">
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-500">
                    <div className="flex space-x-6 mb-4 md:mb-0">
                        <a href="#" className="hover:text-white">Security</a>
                        <a href="#" className="hover:text-white">About your privacy</a>
                    </div>
                    <p>© 2022 Spre.ai. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
