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
            confirmButtonColor: "#2F2F31",
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
                    <table className="table">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="text-gray-800">#</th>
                                <th className="text-gray-800">Image</th>
                                <th className="text-gray-800">Name</th>
                                <th className="text-gray-800">Email</th>
                                <th className="text-gray-800">Status</th>
                                <th className="text-gray-800">Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {users.map((user, idx) => (
                                <tr key={user._id} className="hover:bg-gray-50">
                                    <th className="text-gray-700">{idx + 1}</th>
                                    <td>
                                        <div className="flex items-center gap-3">
                                            <div className="avatar">
                                                <div className="mask mask-squircle h-12 w-12">
                                                    <img referrerPolicy="no-referrer" src={user.image} alt="Avatar" />
                                                </div>
                                            </div>
                                        </div>
                                    </td>
                                    <td className="capitalize text-gray-800">{user.name}</td>
                                    <td className="text-blue-500">{user.email}</td>
                                    <td className={`capitalize ${user.role === 'admin' ? 'text-green-600' : 'text-yellow-600'}`}>
                                        {user.role}
                                    </td>
                                    <td>
                                        {user.role === "admin" ? (
                                            <p className="px-6 inline py-1 rounded-md bg-black text-white">Admin</p>
                                        ) : (
                                            <Button onClick={() => handleAdmin(user.email)} size="sm" className="bg-indigo-600 hover:bg-indigo-700 text-white">
                                                Make Admin
                                            </Button>
                                        )}
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className="flex justify-between items-center mt-4">
                        <button
                            onClick={handlePreviousPage}
                            disabled={page === 1}
                            className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
                        >
                            Previous
                        </button>
                        <span>
                            Page {page} of {totalPages}
                        </span>
                        <button
                            onClick={handleNextPage}
                            disabled={page === totalPages}
                            className="px-4 py-2 bg-gray-500 text-white rounded disabled:bg-gray-300"
                        >
                            Next
                        </button>
                    </div>
                </div>
            ) : (
                <div className="md:p-20">
                    <h2 className="text-6xl text-gray-700">No users found at the moment.</h2>
                </div>
            )}
        </div>
    );
};

export default AllUsers;
