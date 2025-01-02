import React from "react";
import GuestLayout from "@/Layouts/GuestLayout";

const ArrowIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M5 12h14M12 5l7 7-7 7" />
    </svg>
);

const LockIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
    </svg>
);

const UsersIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
);

const ShieldIcon = () => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
    >
        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    </svg>
);

const Welcome = () => {
    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900">
            {/* Hero Section */}
            <div className="container mx-auto px-4 py-16">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-5xl font-bold text-white mb-6 animate-fade-in">
                        Welcome to Exchange Item Platform
                    </h1>
                    <p className="text-xl text-gray-300 mb-12">
                        Experience seamless authentication with advanced
                        security features, modern design, and lightning-fast
                        performance.
                    </p>

                    {/* Main CTA Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        <a
                            href="/login"
                            className="group flex items-center justify-center gap-2 py-4 px-8 bg-blue-600 text-white rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            Get Started
                            <span className="group-hover:translate-x-1 transition-transform">
                                <ArrowIcon />
                            </span>
                        </a>
                        <a
                            href="/register"
                            className="flex items-center justify-center gap-2 py-4 px-8 bg-gray-700 text-white rounded-lg text-lg font-semibold hover:bg-gray-600 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                        >
                            Create Account
                        </a>
                    </div>
                </div>

                {/* Features Grid */}
                <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto mt-8">
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                        <div className="w-12 h-12 text-blue-500 mb-4">
                            <LockIcon />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Secure Authentication
                        </h3>
                        <p className="text-gray-400">
                            Advanced encryption and multi-factor authentication
                            to keep your account safe.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                        <div className="w-12 h-12 text-green-500 mb-4">
                            <UsersIcon />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Team Collaboration
                        </h3>
                        <p className="text-gray-400">
                            Work together seamlessly with built-in collaboration
                            tools and real-time updates.
                        </p>
                    </div>
                    <div className="bg-gray-800 p-6 rounded-xl hover:bg-gray-750 transition-colors duration-300">
                        <div className="w-12 h-12 text-purple-500 mb-4">
                            <ShieldIcon />
                        </div>
                        <h3 className="text-xl font-semibold text-white mb-2">
                            Data Protection
                        </h3>
                        <p className="text-gray-400">
                            Your data is protected with enterprise-grade
                            security and regular backups.
                        </p>
                    </div>
                </div>
            </div>

            {/* Footer */}
            <div className="border-t border-gray-800">
                <div className="container mx-auto px-4 py-8">
                    <div className="flex flex-col md:flex-row items-center justify-between text-gray-400">
                        <p>© 2025 Your Platform. All rights reserved.</p>
                        <div className="flex gap-6 mt-4 md:mt-0">
                            <a
                                href="/support"
                                className="hover:text-white transition-colors"
                            >
                                Support
                            </a>
                            <a
                                href="/privacy"
                                className="hover:text-white transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="/terms"
                                className="hover:text-white transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Welcome;
