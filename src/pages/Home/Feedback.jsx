import React, { useState } from "react";

const FeedbackSection = () => {
    const [feedback, setFeedback] = useState("");

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        console.log("Feedback Submitted:", feedback);
        setFeedback(""); // Reset feedback field after submission
    };

    return (
        <div className="bg-background border-2 mx-9 rounded-lg py-16 my-7 px-6 text-white">
            <div className="max-w-6xl mx-auto space-y-16">
                {/* Header */}
                <div className="text-center">
                    <h2 className="text-4xl dark:text-blue-600 text-gray-800 font-extrabold mb-4">We Value Your Feedback!</h2>
                    <p className="text-lg text-gray-500 font-semibold dark:text-gray-300">
                        Share your thoughts or suggestions to help us improve.
                    </p>
                </div>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                    {/* Feedback Form */}
                    <div className="bg-zinc-300 dark:bg-gray-800 rounded-xl shadow-lg p-8">
                        <h3 className="text-2xl dark:text-blue-600  text-black font-semibold mb-6">Submit Your Feedback</h3>
                        <form onSubmit={handleFeedbackSubmit} className="space-y-6">
                            <div>
                                <label htmlFor="feedback" className="block dark:text-blue-500 text-black text-lg mb-2">
                                    Your Feedback
                                </label>
                                <textarea
                                    id="feedback"
                                    value={feedback}
                                    onChange={(e) => setFeedback(e.target.value)}
                                    className="w-full p-4 rounded-lg bg-gray-200 dark:bg-slate-700 dark:text-zinc-300 text-gray-500 focus:ring-2 focus:ring-yellow-500"
                                    rows="5"
                                    placeholder="Type your feedback here..."
                                    required
                                />
                            </div>
                            <button
                                type="submit"
                                className="w-full py-3 bg-blue-500 text-gray-900 rounded-full font-medium shadow-md hover:bg-yellow-400 transition-all"
                            >
                                Submit Feedback
                            </button>
                        </form>
                    </div>

                    {/* User Feedback Display */}
                    <div className="space-y-6">
                        <h3 className="text-2xl text-foreground font-semibold">What Others Are Saying</h3>
                        <div className="grid gap-6">
                            {[
                                {
                                    feedback: "Love the content! It's always fresh and up-to-date. Keep it up!",
                                    author: "Andrew Tate",
                                },
                                {
                                    feedback:
                                        "Fantastic user experience. Easy to navigate and find relevant articles.",
                                    author: "Marcus Surcus",
                                },
                                {
                                    feedback: "Great design and excellent responsiveness. Truly impressive work!",
                                    author: "Samantha Grey",
                                },
                            ].map((item, index) => (
                                <div
                                    key={index}
                                    className="bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow"
                                >
                                    <p className="text-lg italic mb-4">"{item.feedback}"</p>
                                    <span className="text-sm text-gray-400">- {item.author}</span>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;
