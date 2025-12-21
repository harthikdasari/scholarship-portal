import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap, LogOut, User } from 'lucide-react';

const Navbar = () => {
    const navigate = useNavigate();
    const user = JSON.parse(localStorage.getItem('user'));

    const handleLogout = () => {
        localStorage.removeItem('user');
        navigate('/');
    };

    return (
        <nav className="bg-white border-b border-gray-100 shadow-sm sticky top-0 z-50 font-sans">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-20"> {/* Increased height for premium feel */}

                    {/* Logo Section */}
                    <div className="flex items-center cursor-pointer" onClick={() => navigate('/')}>
                        <div className="flex-shrink-0 bg-indigo-600 p-2 rounded-lg mr-3 shadow-md">
                            <GraduationCap className="h-8 w-8 text-white" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-2xl font-bold tracking-tight text-gray-900">GovEd</span>
                            <span className="text-xs text-indigo-600 font-semibold uppercase tracking-widest">Scholarship Portal</span>
                        </div>
                    </div>

                    {/* Navigation Links / User Profile */}
                    <div className="flex items-center space-x-6">
                        {!user ? (
                            <>
                                <Link to="/" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Home</Link>
                                <Link to="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">About</Link>
                                <Link to="/contact" className="text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors">Contact</Link>
                                <div className="h-6 w-px bg-gray-200 mx-2"></div>
                                <Link to="/student-login" className="text-sm font-medium text-gray-700 hover:text-indigo-600">Student Login</Link>
                                <Link to="/institution-login" className="inline-flex items-center justify-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 transition-all ml-4">
                                    Institution Login
                                </Link>
                            </>
                        ) : (
                            <div className="flex items-center space-x-6">
                                <span className="flex items-center text-sm font-medium text-gray-700 bg-gray-50 px-3 py-1.5 rounded-full border border-gray-200">
                                    <User className="h-4 w-4 mr-2 text-indigo-500" />
                                    {user.name} <span className="text-gray-400 mx-2">|</span> <span className="uppercase text-xs font-bold text-gray-500">{user.role}</span>
                                </span>
                                <button
                                    onClick={handleLogout}
                                    className="flex items-center text-sm font-medium text-red-500 hover:text-red-700 transition-colors"
                                >
                                    <LogOut className="h-4 w-4 mr-1" />
                                    Logout
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
