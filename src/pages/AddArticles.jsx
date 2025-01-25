import { imageUpload } from "@/api/Utils";
import useAxiosSecure from "@/hooks/useAxiosSecure";
import { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import Select from 'react-select';
import useAuth from "@/hooks/useAuth";
import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "@/hooks/useAxiosPublic";
import { Helmet } from "react-helmet-async";
import Lottie from 'lottie-react'; // Importing Lottie React
import register from '../assets/add-articles.json'; // Import Lottie JSON animation

const AddArticles = () => {
    const { user } = useAuth();
    const axiosSecure = useAxiosSecure();
    const axiosPublic = useAxiosPublic();
    const navigate = useNavigate();

    const [formData, setFormData] = useState({
        title: '',
        image: null,
        publisher: '',
        tags: [],
        description: ''
    });

    const tagOptions = [
        { value: 'Technology', label: 'Technology' },
        { value: 'Health', label: 'Health' },
        { value: 'Sports', label: 'Sports' },
        { value: 'Business', label: 'Business' },
        { value: 'Entertainment', label: 'Entertainment' },
        { value: 'Innovation', label: 'Innovation' },
        { value: 'Environment', label: 'Environment' },
    ];

    const { data: publishers = [] } = useQuery({
        queryKey: ["publishers"],
        queryFn: async () => {
            const { data } = await axiosPublic.get("/all-publishers");
            return data;
        }
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFormData({ ...formData, image: e.target.files[0] });
    };

    const handleTagsChange = (selectedOptions) => {
        setFormData({ ...formData, tags: selectedOptions });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const imageURL = await imageUpload(formData.image);
            const newData = {
                ...formData,
                image: imageURL,
                status: "pending",
                isPremium: false,
                views: 0,
                postedDate: Date.now(),
                authorEmail: user.email,
                authorName: user.displayName,
                authorPhoto: user.photoURL
            };
            await axiosSecure.post("/add-article", { article: newData, email: user?.email });
            toast.success("Article added, please wait for admin approval.", { duration: 5000 });
            e.target.reset();
            setFormData({
                title: '',
                image: null,
                publisher: '',
                tags: [],
                description: ''
            });
            navigate("/my-articles");
        } catch (error) {
            toast.error(error.response?.data?.message || "Error occurred");
        }
    };

    return (
        <div className="flex items-center justify-center my-20 px-4 lg:px-16">
            <Helmet>
                <title>Add Article ! News 240</title>
            </Helmet>
            <div className="md:w-11/12 lg:w-10/12 flex flex-col md:flex-row bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg rounded-lg overflow-hidden">
                {/* Lottie Animation Section */}
                <div className="md:w-1/2 p-6  rounded-l-lg flex justify-center items-center shadow-lg">
                    <Lottie animationData={register} loop={true} /> {/* Lottie with the JSON */}
                </div>

                {/* Form Section */}
                <div className="md:w-1/2 p-6 space-y-6 bg-white rounded-r-lg shadow-xl">
                    <h2 className="text-3xl font-semibold text-gray-800 mb-4">Submit Your Article</h2>
                    <form onSubmit={handleSubmit} className="space-y-6">
                        {/* Title Field */}
                        <div className="space-y-2">
                            <label htmlFor="title" className="text-lg text-gray-600">Title</label>
                            <input
                                type="text"
                                id="title"
                                name="title"
                                value={formData.title}
                                onChange={handleInputChange}
                                className="w-full p-4 border border-gray-300 bg-violet-500 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 transition-all"
                                required
                            />
                        </div>

                        {/* Image Upload */}
                        <div className="space-y-2">
                            <label htmlFor="image" className="text-lg text-gray-600">Upload Image</label>
                            <input
                                type="file"
                                id="image"
                                name="image"
                                onChange={handleFileChange}
                                className="w-full p-4 border border-gray-300 rounded-lg shadow-md focus:outline-none"
                            />
                        </div>

                        {/* Publisher Dropdown */}
                        <div className="space-y-2">
                            <label htmlFor="publisher" className="text-lg text-gray-600">Publisher</label>
                            <select
                                id="publisher"
                                name="publisher"
                                value={formData.publisher}
                                onChange={handleInputChange}
                                className="w-full p-4 border border-gray-300 bg-purple-600 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            >
                                <option value="" disabled>Select a Publisher</option>
                                {publishers.map((publisher) => (
                                    <option key={publisher._id} value={publisher.publisherName}>
                                        {publisher.publisherName}
                                    </option>
                                ))}
                            </select>
                        </div>

                        {/* Tags Multi-Select */}
                        <div className="space-y-2">
                            <label htmlFor="tags" className="text-lg text-gray-600">Tags</label>
                            <Select
                                id="tags"
                                name="tags"
                                isMulti
                                options={tagOptions}
                                value={formData.tags}
                                onChange={handleTagsChange}
                                className="w-full text-violet-600 font-semibold bg-cyan-100 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>

                        {/* Description Field */}
                        <div className="space-y-2">
                            <label htmlFor="description" className="text-lg text-gray-600">Description</label>
                            <textarea
                                id="description"
                                name="description"
                                value={formData.description}
                                onChange={handleInputChange}
                                rows="4"
                                className="w-full p-4 border bg-purple-300 text-stone-700  border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                required
                            />
                        </div>

                        {/* Submit Button */}
                        <button
                            type="submit"
                            className="w-full bg-gradient-to-r from-indigo-600 to-purple-600 text-white py-4 px-6 rounded-lg shadow-md hover:bg-gradient-to-l hover:from-indigo-500 hover:to-purple-500 transition-all transform hover:scale-105"
                        >
                            Submit Article
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddArticles;
