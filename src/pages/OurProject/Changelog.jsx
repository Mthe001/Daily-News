import React from 'react';

const Changelog = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-4xl font-extrabold text-gray-800 mb-6">Changelog</h1>

                <p className="text-lg text-gray-600 mb-8">
                    Keep track of all updates, features, bug fixes, and improvements made in **News 240**.
                </p>

                {/* Bento Grid - Dynamic layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

                    {/* Version 1.0.0 - This spans multiple rows/columns */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-1 bg-gradient-to-r from-indigo-400 via-purple-500 to-pink-500 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-white mb-4">Version 1.0.0 - 2025-01-25</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium text-white">New Features:</h3>
                                <ul className="list-disc pl-6 text-gray-100">
                                    <li>Initial release of **News 240** platform.</li>
                                    <li>Dark and Light theme options for users.</li>
                                    <li>Responsive layout for mobile, tablet, and desktop screens.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                <ul className="list-disc pl-6 text-gray-100">
                                    <li>Fixed issue with homepage not loading correctly on mobile.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white">Improvements:</h3>
                                <ul className="list-disc pl-6 text-gray-100">
                                    <li>Improved site performance and load times.</li>
                                    <li>Optimized image rendering for faster page loads.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Version 0.9.0 */}
                    <div className="col-span-1 bg-gradient-to-r from-green-400 via-blue-500 to-teal-500 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-white mb-4">Version 0.9.0 - 2025-01-10</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium text-white">New Features:</h3>
                                <ul className="list-disc pl-6 text-gray-100">
                                    <li>Implemented user authentication with Firebase.</li>
                                    <li>Added article comment section.</li>
                                </ul>
                            </div>
                            <div>
                                <h3 className="text-xl font-medium text-white">Bug Fixes:</h3>
                                <ul className="list-disc pl-6 text-gray-100">
                                    <li>Fixed broken links in the footer section.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Version 0.8.0 - This one takes up more space */}
                    <div className="col-span-1 sm:col-span-2 lg:col-span-2 bg-gradient-to-r from-yellow-400 via-orange-500 to-red-500 shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
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
                                    <li>Fixed layout issues with article card images.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Version 0.7.0 */}
                    <div className="col-span-1 sm:col-span-1 lg:col-span-1 bg-gradient-to-r from-gray-600 via-gray-700 to-black shadow-lg rounded-xl p-6 flex flex-col justify-between transform hover:scale-105 transition-all duration-300">
                        <h2 className="text-2xl font-semibold text-white mb-4">Version 0.7.0 - 2025-01-01</h2>
                        <div className="space-y-4">
                            <div>
                                <h3 className="text-xl font-medium text-white">New Features:</h3>
                                <ul className="list-disc pl-6 text-gray-100">
                                    <li>Implemented new notification system.</li>
                                    <li>Added user profile customization options.</li>
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

                </div>
            </div>
        </div>
    );
};

export default Changelog;
