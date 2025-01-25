// import React from 'react';

// const LiveAndAnalyticals = () => {
//     return (
//         <div>
            
//         </div>
//     );
// };

// export default LiveAndAnalyticals;




import React from 'react';
import { FaChartLine, FaGlobe, FaUsers, FaCrown } from 'react-icons/fa'; // You can use relevant icons here
import CountUp from 'react-countup'; // To animate numbers
import { useInView } from 'react-intersection-observer'; // To animate when in view

const LiveAndAnalyticals = () => {
    const { ref: totalUsersRef, inView: totalUsersInView } = useInView({ triggerOnce: true, threshold: 1 });
    const { ref: trendingTopicsRef, inView: trendingTopicsInView } = useInView({ triggerOnce: true, threshold: 1 });
    const { ref: globalNewsRef, inView: globalNewsInView } = useInView({ triggerOnce: true, threshold: 1 });

    return (
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-10 rounded-lg shadow-lg mb-8 text-white">
            <h2 className="text-3xl font-bold text-center mb-6">Live News Trends & Analytics</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {/* Total Users Stats */}
                <div ref={totalUsersRef} className="bg-gradient-to-r from-blue-500 to-teal-500 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <div className="bg-white text-blue-500 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <FaUsers className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold">Total Users</h3>
                    {totalUsersInView && (
                        <CountUp end={1500000} duration={2.5} className="text-4xl font-bold text-white" />
                    )}
                </div>

                {/* Trending Topics Stats */}
                <div ref={trendingTopicsRef} className="bg-gradient-to-r from-green-500 to-yellow-500 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <div className="bg-white text-green-500 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <FaChartLine className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold">Trending Topics</h3>
                    {trendingTopicsInView && (
                        <CountUp end={12000} duration={2.5} className="text-4xl font-bold text-white" />
                    )}
                </div>

                {/* Global News Stats */}
                <div ref={globalNewsRef} className="bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-lg shadow-lg flex flex-col items-center">
                    <div className="bg-white text-purple-500 rounded-full h-16 w-16 flex items-center justify-center mb-4">
                        <FaGlobe className="text-2xl" />
                    </div>
                    <h3 className="text-xl font-semibold">Global News Impact</h3>
                    {globalNewsInView && (
                        <CountUp end={500000} duration={2.5} className="text-4xl font-bold text-white" />
                    )}
                </div>
            </div>

            <div className="mt-8 text-center">
                <h3 className="text-2xl font-semibold mb-4">News Consumption Pattern</h3>
                <div className="flex justify-center">
                    {/* Example: Graph Placeholder */}
                    <div className="w-1/2">
                        <div className="bg-gray-800 p-6 rounded-lg shadow-lg">
                            <h4 className="text-xl font-semibold text-white">Device Usage</h4>
                            {/* Add your chart here using libraries like Chart.js, Recharts, or any other */}
                            <p className="text-white">Chart coming soon (or implement a chart here).</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LiveAndAnalyticals;
