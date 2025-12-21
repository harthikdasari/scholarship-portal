import React from 'react';
import { Link } from 'react-router-dom';
import { Search, ChevronRight, BookOpen, Users, Building, ArrowRight, Award, ShieldCheck, Globe } from 'lucide-react';

const Home = () => {
    return (
        <div className="bg-gray-50 min-h-screen font-sans">

            {/* HER SESECTION */}
            <div className="relative bg-indigo-900 overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        className="w-full h-full object-cover opacity-30"
                        src="https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
                        alt="Student holding book"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-indigo-900 via-indigo-900/80 to-transparent"></div>
                </div>

                <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl mb-6">
                        Empowering Dreams, <br />
                        <span className="text-indigo-300">Enabling Education.</span>
                    </h1>
                    <p className="mt-6 text-xl text-indigo-100 max-w-3xl">
                        Seamlessly connecting students with institutions across state borders.
                        A unified platform for scholarship verification and management.
                    </p>

                    <div className="mt-10 flex space-x-4">
                        <Link to="/student-login" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-white hover:bg-indigo-50 transition-all shadow-lg hover:shadow-xl">
                            Student Login
                        </Link>
                        <Link to="/institution-login" className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 transition-all shadow-lg hover:shadow-xl">
                            Institution Login
                        </Link>
                    </div>
                </div>
            </div>

            {/* STATISTICS SECTION */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-16 relative z-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-white rounded-xl shadow-lg p-8 flex items-center transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="p-4 rounded-full bg-blue-50 text-blue-600 mr-5">
                            <Users className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Registered Students</p>
                            <p className="text-3xl font-extrabold text-gray-900">12,450+</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 flex items-center transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="p-4 rounded-full bg-indigo-50 text-indigo-600 mr-5">
                            <Building className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Partner Institutions</p>
                            <p className="text-3xl font-extrabold text-gray-900">850+</p>
                        </div>
                    </div>
                    <div className="bg-white rounded-xl shadow-lg p-8 flex items-center transform hover:-translate-y-1 transition-transform duration-300">
                        <div className="p-4 rounded-full bg-green-50 text-green-600 mr-5">
                            <BookOpen className="w-8 h-8" />
                        </div>
                        <div>
                            <p className="text-sm font-medium text-gray-500 uppercase tracking-wide">Scholarships Disbursed</p>
                            <p className="text-3xl font-extrabold text-gray-900">₹ 45 Cr+</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* FEATURES SECTION */}
            <div className="py-24 bg-gray-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            One Platform, Multiple Benefits
                        </h2>
                        <p className="mt-4 text-xl text-gray-500 max-w-2xl mx-auto">
                            Streamlining the verification process for a transparent and efficient education ecosystem.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-12 h-12 bg-indigo-100 rounded-lg flex items-center justify-center mb-6">
                                <Globe className="w-6 h-6 text-indigo-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Cross-State Verification</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Students studying outside their home state can easily get their enrollment verified by their institutions.
                            </p>
                            <a href="#" className="text-indigo-600 font-medium hover:text-indigo-700 inline-flex items-center">
                                Learn more <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center mb-6">
                                <ShieldCheck className="w-6 h-6 text-green-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Secure & Transparent</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Direct verification from institutions ensures 100% authenticity and eliminates fraudulent claims.
                            </p>
                            <a href="#" className="text-green-600 font-medium hover:text-green-700 inline-flex items-center">
                                View Security <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                        <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                            <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
                                <Award className="w-6 h-6 text-blue-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">Fast-Track Approvals</h3>
                            <p className="text-gray-600 leading-relaxed mb-4">
                                Digital workflow reduces processing time from months to days, ensuring timely disbursement.
                            </p>
                            <a href="#" className="text-blue-600 font-medium hover:text-blue-700 inline-flex items-center">
                                Read Guidelines <ArrowRight className="w-4 h-4 ml-2" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* CTA SECTION */}
            <div className="bg-indigo-700">
                <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between">
                    <div className="text-center md:text-left mb-8 md:mb-0">
                        <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                            Ready to get started?
                        </h2>
                        <p className="mt-4 text-xl text-indigo-100">
                            Create an account today and unlock your scholarship opportunities.
                        </p>
                    </div>
                    <div className="flex space-x-4">
                        <Link to="/student-login" className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-600 bg-white hover:bg-indigo-50 md:text-lg shadow-lg">
                            Register Now
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
