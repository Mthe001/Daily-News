


import useRole from "@/hooks/useRole";
import moment from "moment";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {
    const [role] = useRole();

    const { title, description, postedDate, publisher, image, isPremium, _id } = article || {};

    return (
        <div
            className={`group w-full border ${isPremium ? "border-orange-400 bg-gradient-to-r from-orange-100 to-orange-200" : "border-gray-300 bg-gradient-to-r from-cyan-700 to-cyan-800"
                } rounded-lg shadow-md transition-transform transform hover:scale-105 hover:shadow-xl`}
        >
            {/* Image Section */}
            <div className="relative h-56 w-full overflow-hidden rounded-t-lg">
                <img
                    src={image}
                    alt={title}
                    className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
                {isPremium && (
                    <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                        Premium
                    </div>
                )}
            </div>

            {/* Content Section */}
            <div className="p-4 flex flex-col space-y-3">
                {/* Publisher and Date */}
                <div className="flex items-center text-xs text-gray-500 gap-2">
                    <span className="font-semibold text-gray-700">{publisher.slice(0, 8)}...</span>
                    <span>●</span>
                    <span>{moment(postedDate).format("ll")}</span>
                </div>

                {/* Title */}
                <h2 className="text-lg font-bold text-gray-800 group-hover:text-gray-900 line-clamp-2">
                    {title}
                </h2>

                {/* Description */}
                <p className="text-sm text-gray-700 line-clamp-3">
                    {description.slice(0, 100)}...
                    {!isPremium && (
                        <button className="text-blue-600 font-medium ml-1 underline hover:text-blue-800">
                            See more
                        </button>
                    )}
                </p>

                {/* Action Buttons */}
                <div className="flex justify-between items-center mt-4">
                    <Link
                        to={`/article/${_id}`}
                        className={`px-4 py-2 text-sm font-semibold rounded-full transition ${isPremium
                                ? "bg-gray-400 text-gray-800 cursor-not-allowed"
                                : "bg-blue-600 text-white hover:bg-blue-700"
                            }`}
                        disabled={isPremium}
                    >
                        Details
                    </Link>
                    {isPremium && (
                        <span className="text-xs font-medium text-orange-600 bg-orange-100 px-3 py-1 rounded-full">
                            Premium Access Only
                        </span>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
