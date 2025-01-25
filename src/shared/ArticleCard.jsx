


import useRole from "@/hooks/useRole";
import moment from "moment";
import { Link } from "react-router-dom";

const ArticleCard = ({ article }) => {

    const [role] = useRole();

    const { title, description, postedDate, publisher, image, isPremium, _id } = article || {};

    return (
        <div
            className={`group w-full border border-black/20 ${isPremium ? "bg-orange-100 hover:bg-orange-200" : "bg-cyan-50 hover:bg-cyan-100"} rounded-xl transition-all duration-300 ease-in-out`}
        >
            <div className="h-auto hover:shadow-xl p-6 overflow-hidden rounded-xl transition-all ease-in-out duration-300 flex items-center justify-center flex-col">
                {/* Image Section */}
                <div className="relative w-full h-48 md:h-64 overflow-hidden rounded-xl flex items-center justify-center">
                    <img
                        src={image}
                        className="w-full h-full group-hover:scale-110 transition-all duration-300 ease-in-out object-cover"
                        alt=""
                    />
                    {isPremium && (
                        <div className="absolute top-2 right-2 bg-orange-500 text-white text-xs font-semibold px-2 py-1 rounded-full shadow-lg">
                            Premium
                        </div>
                    )}
                </div>

                {/* Content Section */}
                <div className="mt-4 space-y-4 w-full">
                    <div className="flex items-center justify-start gap-3 text-sm text-gray-600">
                        <div className="flex items-center justify-start gap-2">
                            <p className="font-medium">{publisher.slice(0, 8)}...</p>
                            <p>●</p>
                            <p>{moment(postedDate).format('ll')}</p>
                        </div>
                        {isPremium && <p className="badge bg-orange-500 text-white px-2 py-1 text-xs">Premium</p>}
                    </div>

                    {/* Title */}
                    <h1 className="text-xl sm:text-2xl font-semibold text-gray-800 h-16 overflow-auto">{title}</h1>

                    {/* Description */}
                    <p className="text-black/80 h-24 overflow-auto text-sm">
                        {description.slice(0, 100)}...
                        <button disabled={isPremium} className="font-semibold text-blue-500 hover:text-blue-700">see more</button>
                    </p>
                </div>

                {/* Button Section */}
                <div className="flex items-center justify-end w-full">
                    <button
                        disabled={isPremium}
                        className="btn btn-outline btn-sm my-2 justify-self-end text-xs px-4 py-2"
                    >
                        <Link to={`/article/${_id}`}>Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ArticleCard;
