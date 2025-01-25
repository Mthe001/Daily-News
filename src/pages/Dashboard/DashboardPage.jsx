// import BarChart from "@/components/BarChart";
// import LineChart from "@/components/lineChart";
// import PieChart from "@/components/PieChart";
// import useAuth from '@/hooks/useAuth';

// const DashboardPage = () => {
//     const { user } = useAuth(); // Destructuring user object from useAuth hook.

//     return (
//         <div className="bg-gray-100 min-h-screen p-6">
//             {/* Welcome Back Section */}
//             <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex items-center justify-between">
//                 <div>
//                     <h1 className="text-2xl font-bold text-gray-800 mb-2">
//                         Welcome Back, {user?.displayName || "Admin"}!
//                     </h1>
//                     <p className="text-gray-600">
//                         Here's an overview of your performance and analytics today.
//                     </p>
//                 </div>
//                 <div className="flex items-center gap-4">
//                     {user?.photoURL ? (
//                         <img
//                             src={user.photoURL}
//                             alt="User profile"
//                             className="w-16 h-16 rounded-full object-cover shadow-md border border-gray-300"
//                         />
//                     ) : (
//                         <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
//                             <span className="text-gray-500 text-2xl">👤</span>
//                         </div>
//                     )}
//                 </div>
//             </div>

//             {/* Dashboard Charts */}
//             <div className="text-center overflow-hidden">
//                 {/* First Row: Pie and Line Charts */}
//                 <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
//                     <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2">
//                         <h2 className="text-lg font-semibold text-gray-700 mb-4">
//                             Publisher Graphics
//                         </h2>
//                         <PieChart />
//                     </div>
//                     <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/2">
//                         <h2 className="text-lg font-semibold text-gray-700 mb-4">
//                             Activity Trends
//                         </h2>
//                         <LineChart />
//                     </div>
//                 </div>

//                 {/* Second Row: Bar Chart */}
//                 <div className="bg-white shadow-md rounded-lg p-6">
//                     <h2 className="text-lg font-semibold text-gray-700 mb-4">
//                         Monthly Performance
//                     </h2>
//                     <BarChart />
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default DashboardPage;



import BarChart from "@/components/BarChart";
import LineChart from "@/components/LineChart";
import PieChart from "@/components/PieChart";
import RadarChart from "@/components/RadarChart"; // Import RadarChart
import useAuth from '@/hooks/useAuth';

const DashboardPage = () => {
    const { user } = useAuth(); // Destructuring user object from useAuth hook.

    return (
        <div className="bg-gray-100 min-h-screen p-6">
            {/* Welcome Back Section */}
            <div className="bg-white shadow-md rounded-lg p-6 mb-8 flex items-center justify-between">
                <div>
                    <h1 className="text-2xl font-bold text-gray-800 mb-2">
                        Welcome Back, {user?.displayName || "Admin"}!
                    </h1>
                    <p className="text-gray-600">
                        Here's an overview of your performance and analytics today.
                    </p>
                </div>
                <div className="flex items-center gap-4">
                    {user?.photoURL ? (
                        <img
                            src={user.photoURL}
                            alt="User profile"
                            className="w-16 h-16 rounded-full object-cover shadow-md border border-gray-300"
                        />
                    ) : (
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center shadow-md">
                            <span className="text-gray-500 text-2xl">👤</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Dashboard Charts */}
            <div className="text-center overflow-hidden">
                {/* First Row: Pie, Line, and Radar Charts */}
                <div className="flex flex-col lg:flex-row justify-between gap-8 mb-8">
                    <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Publisher Graphics
                        </h2>
                        <PieChart />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Activity Trends
                        </h2>
                        <LineChart />
                    </div>
                    <div className="bg-white shadow-md rounded-lg p-6 w-full lg:w-1/3">
                        <h2 className="text-lg font-semibold text-gray-700 mb-4">
                            Articles by Category
                        </h2>
                        <RadarChart /> {/* New Radar Chart showing articles by category */}
                    </div>
                </div>

                {/* Second Row: Bar Chart */}
                <div className="bg-white shadow-md rounded-lg p-6">
                    <h2 className="text-lg font-semibold text-gray-700 mb-4">
                        Monthly Performance
                    </h2>
                    <BarChart />
                </div>
            </div>
        </div>
    );
};

export default DashboardPage;
