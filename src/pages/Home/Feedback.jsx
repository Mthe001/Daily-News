import React, { useState } from 'react';

const FeedbackSection = () => {
    const [feedback, setFeedback] = useState("");

    const handleFeedbackSubmit = (e) => {
        e.preventDefault();
        // Here you can handle the feedback submission
        console.log("Feedback Submitted: ", feedback);
        setFeedback(""); // Reset feedback field after submission
    };

    return (
        <div className=" text-white py-10 px-4">
            <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-center mb-6">We Value Your Feedback!</h2>
                <p className="text-lg text-center mb-4">Let us know your thoughts or suggestions for improvement.</p>

                {/* Feedback Form */}
                <form onSubmit={handleFeedbackSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="feedback" className="block text-xl mb-2">
                            Your Feedback:
                        </label>
                        <textarea
                            id="feedback"
                            value={feedback}
                            onChange={(e) => setFeedback(e.target.value)}
                            className="w-full p-4 rounded-lg text-gray-900"
                            rows="4"
                            placeholder="Your feedback here..."
                            required
                        />
                    </div>

                    <div className="flex justify-center">
                        <button
                            type="submit"
                            className="bg-yellow-500 text-white px-6 py-2 rounded-full hover:bg-yellow-400 transition duration-300"
                        >
                            Submit Feedback
                        </button>
                    </div>
                </form>

                {/* Example Static Feedback */}
                <div className="mt-10 space-y-6">
                    <h3 className="text-xl font-semibold">What others are saying:</h3>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-lg">"Love the content! It's always fresh and up-to-date. Keep it up!"</p>
                        <span className="text-sm text-gray-400">- Andrew Tate</span>
                    </div>
                    <div className="bg-gray-800 p-4 rounded-lg">
                        <p className="text-lg">"Fantastic user experience. Easy to navigate and find relevant articles."</p>
                        <span className="text-sm text-gray-400">- Marcus Surcus</span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FeedbackSection;
