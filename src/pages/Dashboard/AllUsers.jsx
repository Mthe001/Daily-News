import { Button } from "@/components/ui/button";
import useAuth from "@/hooks/useAuth";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import Loader from "@/shared/LoaderSpinner";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import Swal from "sweetalert2";

const AllUsers = () => {
    const axiosSecure = useAxiosSecure();
    const { user } = useAuth();
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(0);
    const limit = 6;

    const { data: users = [], isLoading, refetch } = useQuery({
        queryKey: ["users", page],
        queryFn: async () => {
            const { data } = await axiosSecure.get(`/all-users/${user?.email}?page=${page}&limit=${limit}`);
            setTotalPages(data.totalPages);
            return data.usersList;
        },
    });

    const handleNextPage = () => {
        if (page < totalPages) setPage((prev) => prev + 1);
    };

    const handlePreviousPage = () => {
        if (page > 1) setPage((prev) => prev - 1);
    };

    const handleAdmin = async (email) => {
        Swal.fire({
            title: "Make this user Admin?",
            icon: "question",
            showCancelButton: true,
            confirmButtonColor: "#4CAF50",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, Make Admin!",
        }).then(async (result) => {
            if (result.isConfirmed) {
                const { data } = await axiosSecure.patch(`/make-admin/${email}`);
                if (data.modifiedCount > 0) {
                    refetch();
                    Swal.fire({
                        title: "Approved",
                        text: "User is now an admin.",
                        icon: "success",
                    });
                }
            }
        });
    };

    return (
        <div>
            <Helmet>
                <title>All Users | News 240</title>
            </Helmet>
            {isLoading ? (
                <div className="flex items-center justify-center gap-3 h-screen">
                    <Loader /> <h1 className="text-4xl">Loading</h1>
                </div>
            ) : users.length > 0 ? (
                <div className="overflow-x-auto w-11/12 mx-auto">
                    <table className="min-w-full table-auto bg-white rounded-lg shadow-lg">
                        <thead className="bg-blue-600 text-white">
                            <tr>
                                <th className="px-6 py-3 text-left font-semibold">No.</th>
                                <th className="px-6 py-3 text-left font-semibold">Image</th>
                                <th className="px-6 py-3 text-left font-semibold">Name</th>
                                <th className="px-6 py-3 text-left font-semibold">Email</th>
                                <th className="px-6 py-3 text-left font-semibold">Status</th>
                                <th className="px-6 py-3 text-left font-semibold">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr key={user._id} className={`hover:bg-blue-50 ${idx % 2 === 0 ? "bg-gray-100" : "bg-white"}`}>
                                    <td className="px-6 py-3 text-gray-700">{idx + 1}</td>
                                    <td className="px-6 py-3">
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img referrerPolicy="no-referrer" src={user.image} alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="px-6 py-3 capitalize text-gray-800">{user.name}</td>
                                    <td className="px-6 py-3 text-blue-600">{user.email}</td>
                                    <td className="px-6 py-3">
                                        <span
                                            className={`px-4 py-1 inline-block text-sm rounded-full ${
                                                user.role === "admin" ? "bg-green-200 text-green-800" : "bg-yellow-200 text-yellow-800"
                                            }`}
                                        >
                                            {user.role}
                                        </span>
                                    </td>
                                    <td className="px-6 py-3">
                                        {user.role === "admin" ? (
                                            <p className="px-6 inline py-1 rounded-md bg-gray-800 text-white">Admin</p>
                                        ) : (
                                            <Button onClick={() => handleAdmin(user.email)} size="sm" className="bg-green-500 hover:bg-green-600 text-white">
                                                Make Admin
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-6">
                        <button
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300"
                        >
                            Previous
                        </button>
                        <span className="text-gray-700">
                            Page {page} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                            className="px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600 disabled:bg-gray-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <div className="md:p-20 text-center">
                    <h2 className="text-6xl text-gray-700">No users found at the moment.</h2>
                </div>
            )}
        </div>
    );
};

export default AllUsers;
