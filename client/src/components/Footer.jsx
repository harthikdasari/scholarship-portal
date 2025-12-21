import React from 'react';
import { Facebook, Twitter, Instagram, Linkedin, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white pt-12 pb-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Column 1: About */}
                    <div className="col-span-1 md:col-span-1">
                        <div className="flex items-center space-x-2 mb-4">
                            <span className="text-2xl font-bold tracking-wider text-blue-400">GovEd</span>
                        </div>
                        <p className="text-gray-400 text-sm leading-relaxed">
                            Empowering students across the nation with seamless access to educational scholarships and verification services.
                        </p>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Quick Links</h3>
                        <ul className="space-y-2">
                            <li><a href="/about" className="text-gray-400 hover:text-white text-sm transition transition-colors duration-200">About Us</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition transition-colors duration-200">Schemes</a></li>
                            <li><a href="#" className="text-gray-400 hover:text-white text-sm transition transition-colors duration-200">Institutions</a></li>
                            <li><a href="/contact" className="text-gray-400 hover:text-white text-sm transition transition-colors duration-200">Contact</a></li>
                        </ul>
                    </div>

                    {/* Column 3: Contact Info */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Contact Us</h3>
                        <ul className="space-y-3">
                            <li className="flex items-start text-gray-400 text-sm">
                                <MapPin className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />
                                <span>Ministry of Education, Block C, CGO Complex, New Delhi - 110003</span>
                            </li>
                            <li className="flex items-center text-gray-400 text-sm">
                                <Phone className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />
                                <span>+91 1800-111-222</span>
                            </li>
                            <li className="flex items-center text-gray-400 text-sm">
                                <Mail className="w-5 h-5 mr-2 text-blue-500 flex-shrink-0" />
                                <span>helpdesk@goved.in</span>
                            </li>
                        </ul>
                    </div>

                    {/* Column 4: Newsletter/Social */}
                    <div>
                        <h3 className="text-sm font-semibold text-gray-200 uppercase tracking-wider mb-4">Stay Connected</h3>
                        <div className="flex space-x-4 mb-6">
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Facebook className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Twitter className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Instagram className="w-5 h-5" /></a>
                            <a href="#" className="text-gray-400 hover:text-white transition-colors duration-200"><Linkedin className="w-5 h-5" /></a>
                        </div>
                        <p className="text-xs text-gray-500">
                            &copy; {new Date().getFullYear()} GovEd Scholarship Portal. All rights reserved.
                        </p>
                    </div>
                </div>

                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-xs text-gray-500">
                    <p>Designed and Developed for National Scholarship Verification.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
