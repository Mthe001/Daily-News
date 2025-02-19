import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";
import { TextAnimate } from "./magicui/text-animate";

const PlansSection = () => {
    const { pathname } = useLocation();

    return (
        <section className={`plans-section ${pathname === "/" ? "pt-24" : "pt-0"} pb-10 my-6 bg-background rounded-lg border-2 mx-10`}>
            <div className="md:w-11/12 w-full flex flex-col items-center justify-center p-8 rounded-xl mx-auto text-center">
                <TextAnimate className="lg:text-5xl md:text-4xl text-xl text-start lg:text-center font-semibold text-background dark:text-foreground mb-8" animation="slideUp" by="character">Unlock Premium Benefits: Your Pathway to Exclusive Content Awaits</TextAnimate>
                
                <TextAnimate className="text-md text-start text-gray-600 dark:text-gray-400 mb-12" animation="blurInUp" by="character">Find the plan that fits you best! With premium features, you’ll unlock a whole new world of content and perks.</TextAnimate>
                               
                <div className="plans-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Starter Plan */}
                    <div className="relative bg-white dark:bg-zinc-900 backdrop-blur-lg shadow-xl border-2 border-blue-500 rounded-2xl p-6 flex flex-col transition-transform transform hover:scale-105 hover:border-blue-700">
                        <h3 className="lg:text-xl text-sm font-semibold text-gray-900 dark:text-white">Starter Plan</h3>
                        <p className="text-gray-700 lg:text-xl lg:text-center text-sm text-start dark:text-gray-200 mb-2">
                            <span className="text-3xl font-bold">$4.99</span> <span className="text-sm text-gray-600 dark:text-gray-300">/month</span>
                        </p>
                        <p className="text-gray-700 lg:text-xl lg:text-center text-sm text-start dark:text-gray-200 mb-6">
                            Explore premium content without limits. Perfect for first-time users looking for basic features.
                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-3 lg:text-xl text-sm mb-6">
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> No Post Limit</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Access to Basic Articles</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Short-Term Subscription</li>
                            <li className="flex items-center"><AiOutlineClose className="text-red-500 dark:text-red-400 mr-2" /> No Premium Articles</li>
                            <li className="flex items-center"><AiOutlineClose className="text-red-500 dark:text-red-400 mr-2" /> No Ad-free Experience</li>
                        </ul>
                        <Link to="/subscription" className="mt-auto w-full text-center px-6 py-3 bg-blue-500 text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-blue-700">
                            Select Plan
                        </Link>
                    </div>

                    {/* Intermediate Plan */}
                    <div className="relative bg-white dark:bg-zinc-900 backdrop-blur-lg shadow-xl border-2 border-green-500 rounded-2xl p-6 flex flex-col transition-transform transform hover:scale-105 hover:border-green-700">
                        <h3 className="lg:text-xl text-sm font-semibold text-gray-900 dark:text-white">Intermediate Plan</h3>
                        <p className="text-gray-700 lg:text-xl lg:text-center text-sm text-start dark:text-gray-200 mb-2">
                            <span className="text-3xl font-bold">$19.99</span> <span className="text-sm text-gray-600 dark:text-gray-300">/month</span>
                        </p>
                        <p className="text-gray-700 lg:text-xl lg:text-center text-sm text-start dark:text-gray-200 mb-6">
                            Level up your reading experience with premium articles, ad-free access, and more perks.
                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-3 lg:text-xl text-sm mb-6">
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Unlimited Access</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Premium Articles</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> 5-Day Subscription</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Weekly Newsletter</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Ad-free Experience</li>
                        </ul>
                        <Link to="/subscription" className="mt-auto w-full text-center px-6 py-3 bg-green-500 text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-green-700">
                            Select Plan
                        </Link>
                    </div>

                    {/* Premium Plan */}
                    <div className="relative bg-white dark:bg-zinc-900 backdrop-blur-lg shadow-xl border-2 border-orange-500 rounded-2xl p-6 flex flex-col transition-transform transform hover:scale-105 hover:border-orange-700">
                        <h3 className="lg:text-xl text-sm font-semibold text-gray-900 dark:text-white">Premium Plan</h3>
                        <p className="text-gray-700 lg:text-xl lg:text-center text-sm text-start dark:text-gray-200 mb-2">
                            <span className="text-3xl font-bold">$29.99</span> <span className="text-sm text-gray-600 dark:text-gray-300">/month</span>
                        </p>
                        <p className="text-gray-700 lg:text-xl lg:text-center text-sm text-start dark:text-gray-200 mb-6">
                            Get the ultimate experience with exclusive content, early access, and personalized support.
                        </p>
                        <ul className="text-gray-600 dark:text-gray-300 space-y-3 lg:text-xl text-sm mb-6">
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Unlimited Posts</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Premium & Exclusive Content</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> 10-Day Subscription</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Early Access to New Features</li>
                            <li className="flex items-center"><AiOutlineCheck className="text-green-500 dark:text-green-400 mr-2" /> Completely Ad-free</li>
                        </ul>
                        <Link to="/subscription" className="mt-auto w-full text-center px-6 py-3 bg-orange-500 text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:bg-orange-700">
                            Select Plan
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default PlansSection;
