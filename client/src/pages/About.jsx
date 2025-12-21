import React from 'react';
import { Target, Users, Shield, Award, CheckCircle } from 'lucide-react';

const About = () => {
    return (
        <div className="bg-white min-h-screen">
            {/* Header / Hero */}
            <div className="bg-indigo-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl font-extrabold text-white sm:text-5xl">
                        About GovEd Portal
                    </h1>
                    <p className="mt-4 text-xl text-indigo-100 max-w-2xl mx-auto">
                        Bridging the gap between students, institutions, and government bodies to ensure seamless scholarship delivery.
                    </p>
                </div>
            </div>

            {/* Mission & Vision */}
            <div className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                    <div>
                        <h2 className="text-3xl font-bold text-gray-900 mb-6 flex items-center">
                            <Target className="w-8 h-8 text-indigo-600 mr-3" />
                            Our Mission
                        </h2>
                        <p className="text-lg text-gray-600 leading-relaxed mb-6">
                            To create a unified, transparent, and efficient digital ecosystem for scholarship verification. We aim to eliminate geographical barriers for students studying outside their home states, ensuring that every deserving student receives their entitled benefits without delay.
                        </p>
                        <ul className="space-y-4">
                            <li className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Digital-first verification workflow.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Zero-paperwork processing for institutions.</span>
                            </li>
                            <li className="flex items-start">
                                <CheckCircle className="w-6 h-6 text-green-500 mr-3 flex-shrink-0" />
                                <span className="text-gray-700">Real-time status tracking for applicants.</span>
                            </li>
                        </ul>
                    </div>
                    <div className="relative">
                        <img
                            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-1.2.1&auto=format&fit=crop&w=1351&q=80"
                            alt="Team Collaboration"
                            className="rounded-lg shadow-xl"
                        />
                        <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-lg shadow-lg border-l-4 border-indigo-600 hidden md:block">
                            <p className="text-3xl font-bold text-indigo-600">100%</p>
                            <p className="text-sm text-gray-500">Transparency</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Core Values */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900">Why Choose Us?</h2>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Shield className="w-8 h-8 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
                            <p className="text-gray-600">
                                Robust verification protocols to prevent fraud and ensure aid reaches genuine beneficiaries.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Users className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Inclusivity</h3>
                            <p className="text-gray-600">
                                Designed to support students from all regions, regardless of where they choose to study.
                            </p>
                        </div>
                        <div className="bg-white p-8 rounded-xl shadow-sm text-center">
                            <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-6">
                                <Award className="w-8 h-8 text-purple-600" />
                            </div>
                            <h3 className="text-xl font-semibold mb-3">Excellence</h3>
                            <p className="text-gray-600">
                                Committed to providing a world-class user experience with fast responses and reliable up-time.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
