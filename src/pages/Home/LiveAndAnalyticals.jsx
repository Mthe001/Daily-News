import React from "react";
import { FaChartLine, FaGlobe, FaUsers } from "react-icons/fa";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const LiveAndAnalyticals = () => {
    const { ref: totalUsersRef, inView: totalUsersInView } = useInView({ triggerOnce: true, threshold: 1 });
    const { ref: trendingTopicsRef, inView: trendingTopicsInView } = useInView({ triggerOnce: true, threshold: 1 });
    const { ref: globalNewsRef, inView: globalNewsInView } = useInView({ triggerOnce: true, threshold: 1 });

    return (
        <div className="bg-background border-2 mx-9 p-10 rounded-lg shadow-lg mb-8 text-gray-900 dark:text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Live News Trends & Analytics</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Total Users Stats */}
                <div
                    ref={totalUsersRef}
                    className="bg-background border-2 dark:to-teal-700 p-6 rounded-lg shadow-lg flex flex-col items-center"
                >
                    <div className="bg-gray-900 dark:bg-gray-800 text-blue-500 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <FaUsers className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold">Total Users</h3>
                    {totalUsersInView && (
                        <CountUp end={1500000} duration={2.5} className="text-4xl font-bold text-gray-900 dark:text-white" />
                    )}
                </div>

                {/* Trending Topics Stats */}
                <div
                    ref={trendingTopicsRef}
                    className="bg-background border-2 p-6 rounded-lg shadow-lg flex flex-col items-center"
                >
                    <div className="bg-gray-900 dark:bg-gray-800 text-green-500 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <FaChartLine className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold">Trending Topics</h3>
                    {trendingTopicsInView && (
                        <CountUp end={12000} duration={2.5} className="text-4xl font-bold text-gray-900 dark:text-white" />
                    )}
                </div>

                {/* Global News Stats */}
                <div
                    ref={globalNewsRef}
                    className="bg-background border-2 p-6 rounded-lg shadow-lg flex flex-col items-center"
                >
                    <div className="bg-gray-900 dark:bg-gray-800 text-purple-500 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <FaGlobe className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold">Global News Impact</h3>
                    {globalNewsInView && (
                        <CountUp end={500000} duration={2.5} className="text-4xl font-bold text-gray-900 dark:text-white" />
                    )}
                </div>
            </div>

            <div className="mt-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">News Consumption Pattern</h3>
                <div className="flex justify-center">
                    <div className="w-1/2">
                        <div className="bg-gray-200 dark:bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-gray-900 dark:text-white">Device Usage</h4>
                            <p className="text-gray-700 dark:text-gray-300">Chart coming soon.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveAndAnalyticals;
