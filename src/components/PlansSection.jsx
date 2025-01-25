// // import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
// // import { Link, useLocation } from "react-router-dom";

// // const PlansSection = () => {
// //     const { pathname } = useLocation();

// //     return (
// //         <section
// //             className={`plans-section ${pathname === "/" ? "pt-24" : "pt-0"} pb-10 bg-gray-70`}
// //         >
// //             <div className="md:w-11/12 w-full flex flex-col items-center justify-center p-8 rounded-lg mx-auto text-center">
// //                 <h2
// //                     className={`lg:text-5xl md:text-4xl text-3xl text-start lg:text-center font-semibold ${pathname === "/" ? "text-gray-800" : "text-gray-300"
// //                         } mb-8`}
// //                 >
// //                     Unlock Premium Benefits: Your Pathway to Exclusive Content Awaits
// //                 </h2>
// //                 <p className="text-lg text-gray-600 mb-12">
// //                     Find the plan that fits you best! With premium features, you’ll unlock
// //                     a whole new world of content and perks.
// //                 </p>
// //                 <div className="plans-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
// //                     {[
// //                         {
// //                             title: "Starter Plan",
// //                             price: "4.99",
// //                             description: "Explore premium content without limits. Perfect for first-time users looking for basic features.",
// //                             benefits: ["No Post Limit", "Access to Basic Articles", "Short-Term Subscription"],
// //                             limitations: ["No Premium Articles", "No Ad-free Experience"],
// //                             gradient: "from-blue-400 to-blue-500",
// //                             borderColor: "border-blue-400",
// //                             buttonColor: "blue",
// //                             buttonHover: "blue-600",
// //                         },
// //                         {
// //                             title: "Intermediate Plan",
// //                             price: "19.99",
// //                             description: "Level up your reading experience with premium articles, ad-free access, and more perks.",
// //                             benefits: [
// //                                 "Unlimited Access",
// //                                 "Premium Articles",
// //                                 "5-Day Subscription",
// //                                 "Weekly Newsletter",
// //                                 "Ad-free Experience",
// //                             ],
// //                             gradient: "from-green-400 to-green-500",
// //                             borderColor: "border-green-400",
// //                             buttonColor: "green",
// //                             buttonHover: "green-600",
// //                         },
// //                         {
// //                             title: "Premium Plan",
// //                             price: "29.99",
// //                             description: "Get the ultimate experience with exclusive content, early access, and personalized support.",
// //                             benefits: [
// //                                 "Unlimited Posts",
// //                                 "Premium & Exclusive Content",
// //                                 "10-Day Subscription",
// //                                 "Early Access to New Features",
// //                                 "Completely Ad-free",
// //                             ],
// //                             gradient: "from-orange-400 to-orange-500",
// //                             borderColor: "border-orange-400",
// //                             buttonColor: "orange",
// //                             buttonHover: "orange-600",
// //                         },
// //                     ].map((plan, index) => (
// //                         <div
// //                             key={index}
// //                             className={`relative bg-gray-50 border ${plan.borderColor} rounded-lg shadow-md p-6 flex flex-col transition-all transform hover:scale-105 hover:shadow-lg`}
// //                         >
// //                             {/* Header Section */}
// //                             <div
// //                                 className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${plan.gradient}`}
// //                             ></div>
// //                             <div className="flex items-center justify-between w-full mb-4">
// //                                 <h3 className="text-xl font-semibold text-gray-800">{plan.title}</h3>
// //                                 <div className="text-right">
// //                                     <span className="text-2xl font-bold text-gray-900">${plan.price}</span>
// //                                     <span className="text-sm text-gray-500">/mo</span>
// //                                 </div>
// //                             </div>
// //                             <p className="text-gray-600 mb-6">{plan.description}</p>
// //                             <ul className="text-gray-700 space-y-3 mb-6">
// //                                 {plan.benefits.map((benefit, i) => (
// //                                     <li key={i} className="flex items-center">
// //                                         <AiOutlineCheck className="text-green-500 mr-2" />
// //                                         {benefit}
// //                                     </li>
// //                                 ))}
// //                                 {plan.limitations?.map((limitation, i) => (
// //                                     <li key={i} className="flex items-center">
// //                                         <AiOutlineClose className="text-red-500 mr-2" />
// //                                         {limitation}
// //                                     </li>
// //                                 ))}
// //                             </ul>
// //                             <Link
// //                                 to="/subscription"
// //                                 className={`mt-auto w-full text-center px-6 py-3 bg-${plan.buttonColor}-500 text-white rounded-full hover:bg-${plan.buttonHover} transition duration-300`}
// //                             >
// //                                 Select Plan
// //                             </Link>
// //                         </div>
// //                     ))}
// //                 </div>
// //             </div>
// //         </section>
// //     );
// // };

// // export default PlansSection;


// import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
// import { Link, useLocation } from "react-router-dom";

// const PlansSection = () => {
//     const { pathname } = useLocation();

//     return (
//         <section
//             className={`plans-section ${pathname === "/" ? "pt-24" : "pt-0"} pb-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900`}
//         >
//             <div className="md:w-11/12 w-full flex flex-col items-center justify-center p-8 rounded-xl mx-auto text-center">
//                 <h2
//                     className={`lg:text-5xl md:text-4xl text-3xl text-start lg:text-center font-semibold text-white mb-8`}
//                 >
//                     Unlock Premium Benefits: Your Pathway to Exclusive Content Awaits
//                 </h2>
//                 <p className="text-lg text-gray-400 mb-12">
//                     Find the plan that fits you best! With premium features, you’ll unlock
//                     a whole new world of content and perks.
//                 </p>
//                 <div className="plans-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
//                     {[
//                         {
//                             title: "Starter Plan",
//                             price: "4.99",
//                             description: "Explore premium content without limits. Perfect for first-time users looking for basic features.",
//                             benefits: ["No Post Limit", "Access to Basic Articles", "Short-Term Subscription"],
//                             limitations: ["No Premium Articles", "No Ad-free Experience"],
//                             gradient: "from-blue-500 to-blue-700",
//                             buttonColor: "blue",
//                             buttonHover: "blue-600",
//                         },
//                         {
//                             title: "Intermediate Plan",
//                             price: "19.99",
//                             description: "Level up your reading experience with premium articles, ad-free access, and more perks.",
//                             benefits: [
//                                 "Unlimited Access",
//                                 "Premium Articles",
//                                 "5-Day Subscription",
//                                 "Weekly Newsletter",
//                                 "Ad-free Experience",
//                             ],
//                             gradient: "from-green-500 to-green-700",
//                             buttonColor: "green",
//                             buttonHover: "green-600",
//                         },
//                         {
//                             title: "Premium Plan",
//                             price: "29.99",
//                             description: "Get the ultimate experience with exclusive content, early access, and personalized support.",
//                             benefits: [
//                                 "Unlimited Posts",
//                                 "Premium & Exclusive Content",
//                                 "10-Day Subscription",
//                                 "Early Access to New Features",
//                                 "Completely Ad-free",
//                             ],
//                             gradient: "from-orange-500 to-orange-700",
//                             buttonColor: "orange",
//                             buttonHover: "orange-600",
//                         },
//                     ].map((plan, index) => (
//                         <div
//                             key={index}
//                             className={`relative bg-opacity-50 bg-white backdrop-blur-lg shadow-xl border border-opacity-20 border-gray-200 rounded-2xl p-6 flex flex-col transition-transform transform hover:scale-105`}
//                             style={{
//                                 background: `linear-gradient(135deg, ${plan.gradient})`,
//                             }}
//                         >
//                             {/* Header Section */}
//                             <div
//                                 className="absolute inset-0 opacity-10 rounded-2xl"
//                                 style={{
//                                     background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.1) 70%)",
//                                 }}
//                             ></div>
//                             <div className="flex items-center justify-between w-full mb-4 relative z-10">
//                                 <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
//                                 <div className="text-right">
//                                     <span className="text-3xl font-bold text-white">${plan.price}</span>
//                                     <span className="text-sm text-gray-300">/mo</span>
//                                 </div>
//                             </div>
//                             <p className="text-gray-200 mb-6 relative z-10">{plan.description}</p>
//                             <ul className="text-gray-300 space-y-3 mb-6 relative z-10">
//                                 {plan.benefits.map((benefit, i) => (
//                                     <li key={i} className="flex items-center">
//                                         <AiOutlineCheck className="text-green-400 mr-2" />
//                                         {benefit}
//                                     </li>
//                                 ))}
//                                 {plan.limitations?.map((limitation, i) => (
//                                     <li key={i} className="flex items-center">
//                                         <AiOutlineClose className="text-red-400 mr-2" />
//                                         {limitation}
//                                     </li>
//                                 ))}
//                             </ul>
                           
//                             <Link
//                                 to="/subscription"
//                                 className={`mt-auto w-full text-center px-6 py-3 bg-gradient-to-r from-${plan.buttonColor}-500 to-${plan.buttonColor}-700 text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:from-${plan.buttonColor}-700 hover:to-${plan.buttonColor}-500`}
//                             >
//                                 Select Plan
//                             </Link>

//                         </div>
//                     ))}
//                 </div>
//             </div>
//         </section>
//     );
// };

// export default PlansSection;



import { AiOutlineCheck, AiOutlineClose } from "react-icons/ai";
import { Link, useLocation } from "react-router-dom";

const PlansSection = () => {
    const { pathname } = useLocation();

    return (
        <section
            className={`plans-section ${pathname === "/" ? "pt-24" : "pt-0"} pb-10 bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900`}
        >
            <div className="md:w-11/12 w-full flex flex-col items-center justify-center p-8 rounded-xl mx-auto text-center">
                <h2
                    className={`lg:text-5xl md:text-4xl text-3xl text-start lg:text-center font-semibold text-white mb-8`}
                >
                    Unlock Premium Benefits: Your Pathway to Exclusive Content Awaits
                </h2>
                <p className="text-lg text-gray-400 mb-12">
                    Find the plan that fits you best! With premium features, you’ll unlock
                    a whole new world of content and perks.
                </p>
                <div className="plans-container grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {[
                        {
                            title: "Starter Plan",
                            price: "4.99",
                            description: "Explore premium content without limits. Perfect for first-time users looking for basic features.",
                            benefits: ["No Post Limit", "Access to Basic Articles", "Short-Term Subscription"],
                            limitations: ["No Premium Articles", "No Ad-free Experience"],
                            gradient: "from-blue-500 to-blue-700",
                            buttonColor: "blue",
                            buttonHover: "blue-600",
                        },
                        {
                            title: "Intermediate Plan",
                            price: "19.99",
                            description: "Level up your reading experience with premium articles, ad-free access, and more perks.",
                            benefits: [
                                "Unlimited Access",
                                "Premium Articles",
                                "5-Day Subscription",
                                "Weekly Newsletter",
                                "Ad-free Experience",
                            ],
                            gradient: "from-green-500 to-green-700",
                            buttonColor: "green",
                            buttonHover: "green-600",
                        },
                        {
                            title: "Premium Plan",
                            price: "29.99",
                            description: "Get the ultimate experience with exclusive content, early access, and personalized support.",
                            benefits: [
                                "Unlimited Posts",
                                "Premium & Exclusive Content",
                                "10-Day Subscription",
                                "Early Access to New Features",
                                "Completely Ad-free",
                            ],
                            gradient: "from-orange-500 to-orange-700",
                            buttonColor: "orange",
                            buttonHover: "orange-600",
                        },
                    ].map((plan, index) => (
                        <div
                            key={index}
                            className={`relative  bg-zinc-900 backdrop-blur-lg shadow-xl border-2 border-${plan.buttonColor}-500 rounded-2xl p-6 flex flex-col transition-transform transform hover:scale-105 hover:border-${plan.buttonColor}-700`}
                            style={{
                                background: `linear-gradient(145deg, ${plan.gradient})`,
                            }}
                        >
                            {/* Header Section */}
                            <div
                                className="absolute inset-0 opacity-10 rounded-2xl"
                                style={{
                                    background: "radial-gradient(circle, rgba(255,255,255,0.3) 0%, rgba(0,0,0,0.1) 70%)",
                                }}
                            ></div>
                            <div className="flex items-center justify-between w-full mb-4 relative z-10">
                                <h3 className="text-xl font-semibold text-white">{plan.title}</h3>
                                <div className="text-right">
                                    <span className="text-3xl font-bold text-white">${plan.price}</span>
                                    <span className="text-sm text-gray-300">/mo</span>
                                </div>
                            </div>
                            <p className="text-gray-200 mb-6 relative z-10">{plan.description}</p>
                            <ul className="text-gray-300 space-y-3 mb-6 relative z-10">
                                {plan.benefits.map((benefit, i) => (
                                    <li key={i} className="flex items-center">
                                        <AiOutlineCheck className="text-green-400 mr-2" />
                                        {benefit}
                                    </li>
                                ))}
                                {plan.limitations?.map((limitation, i) => (
                                    <li key={i} className="flex items-center">
                                        <AiOutlineClose className="text-red-400 mr-2" />
                                        {limitation}
                                    </li>
                                ))}
                            </ul>

                            <Link
                                to="/subscription"
                                className={`mt-auto w-full text-center px-6 py-3 bg-gradient-to-r from-${plan.buttonColor}-500 to-${plan.buttonColor}-700 text-white rounded-full transform transition-all duration-300 hover:scale-105 hover:from-${plan.buttonColor}-700 hover:to-${plan.buttonHover}-500`}
                            >
                                Select Plan
                            </Link>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default PlansSection;
