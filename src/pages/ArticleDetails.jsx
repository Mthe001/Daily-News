import useAxiosPublic from '@/hooks/useAxiosPublic';
import Loader from '@/shared/LoaderSpinner';
import { useQuery } from '@tanstack/react-query';
import moment from 'moment';
import { useEffect, useRef } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

const ArticleDetails = () => {
    const axiosPublic = useAxiosPublic();
    const { id } = useParams();
    const navigate = useNavigate();
    const isCalled = useRef(false);

    const { data: article = {}, isLoading, refetch } = useQuery({
        queryKey: ["articleDetails", id],
        queryFn: async () => {
            const { data } = await axiosPublic.get(`article/${id}`);
            return data;
        }
    });

    useEffect(() => {
        const incrementViews = async () => {
            try {
                await axiosPublic.patch(`/inc-views/${id}`);
                refetch();
            } catch (error) {
                console.error("Failed to increment views:", error);
            }
        };

        if (!isCalled.current) {
            incrementViews();
            isCalled.current = true;
        }
    }, [id]);

    const { title, description, postedDate, status, image, tags, views, isPremium, authorName } = article || {};

    return (
        <div className="min-h-screen py-10">
            {isLoading ? (
                <div className="flex items-center justify-center gap-3 h-screen">
                    <Loader />
                    <h1 className="text-4xl">Loading</h1>
                </div>
            ) : (
                <div className="container mx-auto py-8 px-4">
                 
                   

                    {/* Card Design with Flex and 90% Width */}
                    <div className="bg-white gap-5 rounded-lg shadow-lg p-6 space-y-8 flex flex-col md:flex-row justify-between w-11/12 md:w-9/12 mx-auto">
                            {/* Back Button */}
                           <div>
                                <button
                                    onClick={() => navigate(-1)}
                                    className="flex items-center gap-2 text-blue-500 hover:text-blue-700 font-semibold mb-6"
                                >
                                    <FaArrowLeft size={18} />
                                    Back
                                </button>
                           </div>
                        {/* Image Section */}
                        <div className="w-full md:w-6/12">
                            <img
                                className="rounded-lg object-cover w-full h-64 md:h-auto"
                                src={image}
                                alt={title}
                            />
                        </div>

                        {/* Content Section */}
                        <div className="w-full md:w-5/12 space-y-4">
                            <h1 className="text-3xl text-slate-500 font-semibold">{title}</h1>
                            <div className="text-gray-600 space-y-2">
                                <p>
                                    <b>Author:</b> {authorName}
                                </p>
                                <p>
                                    <b>Publisher:</b> {authorName}
                                </p>
                                <div>
                                    <b>Tags:</b>{" "}
                                    {tags.map((tag, idx) => (
                                        <span
                                            className="inline-block bg-gray-200 text-gray-700 rounded-full px-3 py-1 text-sm font-semibold mr-2"
                                            key={idx}
                                        >
                                            #{tag.value}
                                        </span>
                                    ))}
                                </div>
                                <p>
                                    <b>Status:</b>{" "}
                                    <span
                                        className={`inline-block px-2 py-1 rounded-full text-sm font-semibold ${status === "Published"
                                                ? "bg-green-200 text-green-800"
                                                : "bg-red-200 text-red-800"
                                            }`}
                                    >
                                        {status}
                                    </span>
                                </p>
                                <p>
                                    <b>Is Premium:</b> {isPremium ? "Yes" : "No"}
                                </p>
                                <p>
                                    <b>Views:</b> {views}
                                </p>
                                <p>
                                    <b>Posted Date:</b> {moment(postedDate).format("LLLL")}
                                </p>
                            </div>
                            <div>
                                <b>Description:</b>
                                <p className="text-gray-700">{description}</p>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default ArticleDetails;
