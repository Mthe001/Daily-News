import React from 'react';
import { Helmet } from 'react-helmet-async';

const Releases = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Relase Note ! News 240</title>
                </Helmet>
            </div>
            <div className="min-h-screen bg-gray-100 py-12 px-6">
                <div className="max-w-7xl mx-auto bg-white shadow-xl rounded-lg p-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-6">Latest Releases</h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Browse the most recent updates, features, and improvements in **News 240**. Each release brings new features and fixes.
                    </p>

                    {/* Bento Grid layout */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

                        {/* Release Version 1.0.0 */}
                        <div className="bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-white mb-4">Version 1.0.0 - 2025-01-25</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white">New Features:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Initial release of **News 240** platform.</li>
                                        <li>Dark and Light theme options for users.</li>
                                        <li>Responsive layout for all screen sizes.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Fixed issue with mobile homepage loading.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Release Version 0.9.0 */}
                        <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-purple-500 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-white mb-4">Version 0.9.0 - 2025-01-10</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white">New Features:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>User authentication with Firebase.</li>
                                        <li>Comment section on articles added.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Fixed footer section broken links.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Release Version 0.8.0 */}
                        <div className="bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-white mb-4">Version 0.8.0 - 2025-01-05</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white">New Features:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Homepage section with latest articles and trending news.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Fixed layout issues with article cards.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Release Version 0.7.0 */}
                        <div className="bg-gradient-to-r from-gray-600 via-gray-700 to-black shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-white mb-4">Version 0.7.0 - 2025-01-01</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white">New Features:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Implemented new notification system.</li>
                                        <li>User profile customization options.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Fixed issues with comment section interactions.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Release Version 0.6.0 */}
                        <div className="bg-gradient-to-r from-pink-400 via-red-500 to-yellow-600 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-white mb-4">Version 0.6.0 - 2024-12-20</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white">New Features:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Enhanced article editor with more customization.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Fixed layout issues with comment sections.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                        {/* Release Version 0.5.0 */}
                        <div className="bg-gradient-to-r from-green-400 via-blue-500 to-indigo-600 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                            <h2 className="text-2xl font-semibold text-white mb-4">Version 0.5.0 - 2024-12-15</h2>
                            <div className="space-y-4">
                                <div>
                                    <h3 className="text-xl font-medium text-white">New Features:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Improved search functionality with filtering.</li>
                                    </ul>
                                </div>
                                <div>
                                    <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                    <ul className="list-disc pl-6 text-gray-100">
                                        <li>Fixed issue with broken image links.</li>
                                    </ul>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Releases;
