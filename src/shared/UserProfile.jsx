import UpdateUserProfile from '@/components/UpdateUserModal';
import useAuth from '@/hooks/useAuth';
import useAxiosSecure from '@/hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const UserProfile = () => {
    const { user, logOut } = useAuth();
    const axiosSecure = useAxiosSecure();
    let [isOpen, setIsOpen] = useState(false);

    function open() {
        setIsOpen(true);
    }

    function close() {
        setIsOpen(false);
    }

    const { data: articles = [] } = useQuery({
        queryKey: ["articles", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/articles/${user?.email}`);
            return data;
        }
    });

    const { data: DBuser = {} } = useQuery({
        queryKey: ["user", user?.email],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/user/${user?.email}`);
            return data;
        }
    });

    return (
        <div>
            <Helmet>
                <title>Profile - News 240</title>
            </Helmet>

            <div className="bg-background py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-screen-xl mx-auto">
                    {/* Profile Header */}
                    <div className="relative rounded-2xl shadow-lg overflow-hidden mb-12">
                        <div className="w-full h-full bg-gradient-to-r from-blue-700 to-blue-300 absolute top-0 left-0 z-0" />
                        <div className="relative z-10 flex items-center justify-center p-6 py-10">
                            <div className="flex flex-col items-center md:flex-row md:items-center text-center md:text-left">
                                <div className="w-44 h-44 rounded-full border-4 border-white overflow-hidden mb-6 md:mb-0 md:mr-8">
                                    <img
                                        src={user?.photoURL}
                                        alt="User Profile"
                                        className="w-full h-full object-cover"
                                    />
                                </div>
                                <div className="text-white">
                                    <h1 className="text-3xl sm:text-4xl font-bold">{user.displayName}</h1>
                                    <p className="text-sm sm:text-lg">{user.email}</p>
                                    <p className="mt-4 text-sm sm:text-lg font-light">{user.description || "No description available."}</p>
                                    {DBuser.premiumTaken && (
                                        <p className="text-white bg-orange-600 rounded-full inline-block px-3 py-1 text-xs">
                                            Premium Ends {moment(DBuser?.premiumTaken).endOf('second').fromNow()}
                                        </p>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Bento Grid Layout - Cards of different sizes */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 sm:gap-12 lg:gap-16">
                        {/* Personal Info Card */}
                        <div className="dark:bg-blue-950 bg-blue-200 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h2 className="text-xl sm:text-2xl font-semibold   dark:text-blue-600 mb-4">Personal Information</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between text-blue-500">
                                    <span className="font-medium">Full Name:</span>
                                    <span>{user.displayName}</span>
                                </div>
                                <div className="flex justify-between text-blue-500">
                                    <span className="font-medium">Email:</span>
                                    <span>{user.email}</span>
                                </div>
                                <div className="flex justify-between text-blue-500">
                                    <span className="font-medium">Location:</span>
                                    <span>{user.location || "Not provided"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Stats Card */}
                        <div className="dark:bg-blue-950 bg-blue-100 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Statistics</h2>
                            <div className="space-y-4">
                                <div className="flex justify-between text-blue-400">
                                    <span className="font-medium">Total Posts:</span>
                                    <span>{articles.length}</span>
                                </div>
                                <div className="flex justify-between dark:text-blue-300 text-blue-500">
                                    <span className="font-medium">Followers:</span>
                                    <span>{user?.followersCount || "Coming soon"}</span>
                                </div>
                                <div className="flex justify-between text-blue-600 dark:text-blue-400">
                                    <span className="font-medium">Following:</span>
                                    <span>{user.followingCount || "Coming soon"}</span>
                                </div>
                            </div>
                        </div>

                        {/* Recent Posts Card (Bigger size for visual interest) */}
                        <div className="dark:bg-blue-950 bg-blue-50 rounded-2xl shadow-lg p-6 transition-transform transform hover:scale-105 hover:shadow-xl sm:col-span-2 lg:col-span-1">
                            <h2 className="text-xl sm:text-2xl font-semibold text-blue-600 mb-4">Recent Posts</h2>
                            <ul className="space-y-4">
                                {articles && articles.length > 0 ? (
                                    articles.map((post, index) => (
                                        <li key={index} className="flex items-center gap-3">
                                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-300">
                                                <img
                                                    src={post.image}
                                                    alt={post.title}
                                                    className="w-full h-full object-cover rounded-full"
                                                />
                                            </div>
                                            <div>
                                                <p className="font-medium text-blue-600">{post.title}</p>
                                                <p className="text-sm text-gray-500">{moment(post.postedDate).format('lll')}</p>
                                            </div>
                                        </li>
                                    )).slice(0, 2)
                                ) : (
                                    <p className="text-sm text-gray-500">No recent posts available.</p>
                                )}
                            </ul>
                        </div>
                    </div>

                    {/* Footer Actions */}
                    <div className="mt-12 text-center">
                        <button
                            onClick={open}
                            className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition duration-300 mx-4"
                        >
                            Update Profile
                        </button>
                        <button
                            onClick={logOut}
                            className="px-8 py-3 bg-transparent border-2 border-blue-600 text-blue-600 font-semibold rounded-lg hover:bg-blue-600 hover:text-white transition duration-300 mx-4"
                        >
                            Log Out
                        </button>
                    </div>
                </div>
                <UpdateUserProfile isOpen={isOpen} close={close} />
            </div>
        </div>
    );
};

export default UserProfile;
