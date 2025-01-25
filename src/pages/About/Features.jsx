import React from 'react';
import { Helmet } from 'react-helmet-async';
import { FaNewspaper, FaCamera, FaDesktop, FaStar } from 'react-icons/fa';

const Features = () => {
    return (
        <div>
            <Helmet>
                <title>Support ! News 240</title>
            </Helmet>

            <div className="min-h-screen bg-gradient-to-br from-[#1E3A8A] to-[#4F46E5] py-16 px-6 flex flex-col items-center justify-center">
                {/* Header */}
                <h1 className="text-4xl lg:text-5xl font-bold text-white text-center mb-10 animate__animated animate__fadeIn">
                    Explore the Best Features of News 240
                </h1>

                {/* Features Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 w-full max-w-7xl animate__animated animate__fadeIn animate__delay-1s">
                    {/* Feature 1: Latest News */}
                    <div className="bg-[#2C3E50] rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl text-indigo-400 mb-4">
                            <FaNewspaper />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Breaking News</h3>
                        <p className="text-gray-300">
                            Stay updated with real-time breaking news from around the world.
                        </p>
                    </div>

                    {/* Feature 2: High-Quality Images */}
                    <div className="bg-[#2C3E50] rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl text-indigo-400 mb-4">
                            <FaCamera />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Stunning Visuals</h3>
                        <p className="text-gray-300">
                            Immerse yourself in high-quality images and videos for a richer news experience.
                        </p>
                    </div>

                    {/* Feature 3: User Experience */}
                    <div className="bg-[#2C3E50] rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl text-indigo-400 mb-4">
                            <FaDesktop />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Responsive Design</h3>
                        <p className="text-gray-300">
                            Enjoy a seamless news experience across all devices with our mobile-first design.
                        </p>
                    </div>

                    {/* Feature 4: Exclusive Content */}
                    <div className="bg-[#2C3E50] rounded-lg shadow-lg p-6 hover:scale-105 transition-transform duration-300">
                        <div className="text-4xl text-indigo-400 mb-4">
                            <FaStar />
                        </div>
                        <h3 className="text-2xl font-semibold text-white mb-2">Premium Content</h3>
                        <p className="text-gray-300">
                            Get access to exclusive content, interviews, and in-depth reports.
                        </p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Features;
