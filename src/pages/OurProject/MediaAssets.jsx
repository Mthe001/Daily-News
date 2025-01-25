import React from 'react';
import { Helmet } from 'react-helmet-async';

const MediaAssets = () => {
    return (
        <div>
            <div>
                <Helmet>
                    <title>Media assets ! News 240</title>
                </Helmet>
            </div>
            <div className="min-h-screen bg-gray-50 py-12 px-6">
                <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
                    <h1 className="text-3xl font-bold text-gray-800 mb-6">Media Assets for News 240</h1>

                    <p className="text-lg text-gray-600 mb-8">
                        Below you can find various media assets related to **News 240**. These assets can be used for marketing, showcasing the platform, or embedding into your own projects.
                    </p>

                    {/* Section for Logos */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">News 240 Logos</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                                <img
                                    src="/path/to/logo-1.png"
                                    alt="News 240 Logo 1"
                                    className="max-w-full h-auto mb-4"
                                />
                                <p className="text-gray-600">Logo 1 - Dark Theme</p>
                            </div>
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                                <img
                                    src="/path/to/logo-2.png"
                                    alt="News 240 Logo 2"
                                    className="max-w-full h-auto mb-4"
                                />
                                <p className="text-gray-600">Logo 2 - Light Theme</p>
                            </div>
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                                <img
                                    src="/path/to/logo-3.png"
                                    alt="News 240 Logo 3"
                                    className="max-w-full h-auto mb-4"
                                />
                                <p className="text-gray-600">Logo 3 - Vertical</p>
                            </div>
                        </div>
                    </div>

                    {/* Bento Grid Layout Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Bento Grid Media</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                            {/* Large item in Bento Grid */}
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center col-span-2">
                                <img
                                    src="/path/to/screenshot-1.png"
                                    alt="News 240 Screenshot 1"
                                    className="max-w-full h-auto mb-4"
                                />
                                <p className="text-gray-600">Homepage View</p>
                            </div>

                            {/* Small item */}
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                                <img
                                    src="/path/to/screenshot-2.png"
                                    alt="News 240 Screenshot 2"
                                    className="max-w-full h-auto mb-4"
                                />
                                <p className="text-gray-600">Category Page</p>
                            </div>

                            {/* Large item in Bento Grid */}
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center col-span-2">
                                <img
                                    src="/path/to/screenshot-3.png"
                                    alt="News 240 Screenshot 3"
                                    className="max-w-full h-auto mb-4"
                                />
                                <p className="text-gray-600">Dark Mode</p>
                            </div>

                            {/* Small item */}
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                                <img
                                    src="/path/to/logo-1.png"
                                    alt="News 240 Logo 1"
                                    className="max-w-full h-auto mb-4"
                                />
                                <p className="text-gray-600">Logo 1</p>
                            </div>
                        </div>
                    </div>

                    {/* Section for Videos */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Promo Videos</h2>
                        <div className="space-y-6">
                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                                <h3 className="text-xl text-gray-800 mb-4">News 240 Introduction</h3>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/gZHjMVE_e10?si=pAf6FSBr2a7iQ6Dc" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>

                            <div className="bg-gray-100 p-6 shadow-md rounded-lg text-center">
                                <h3 className="text-xl text-gray-800 mb-4">How to Use News 240</h3>
                                <iframe width="560" height="315" src="https://www.youtube.com/embed/RbxHZwFtRT4?si=Zi_EVsIl7EaQDxrC" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MediaAssets;
