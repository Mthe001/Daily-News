import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Helmet } from "react-helmet-async";  // Import Helmet

const Support = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const navigate = useNavigate();

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Handle your form data here
        console.log('Form submitted:', { name, email, message });

        // Redirect to homepage after submission
        navigate('/');
    };

    return (
        <div>
            <Helmet>
                <title>Support ! News 240</title>
            </Helmet>

            <div className="bg-gray-100 text-gray-800 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900">Support Center</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Get the help you need with our comprehensive support resources.
                        </p>
                    </div>

                    {/* FAQs Section */}
                    <div className="mb-12">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Frequently Asked Questions</h2>
                        <div className="space-y-6">
                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-medium text-xl text-gray-800">How do I create an account?</h3>
                                <p className="mt-2 text-gray-600">
                                    To create an account, click on the "Sign Up" button at the top of the page and fill in your details.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-medium text-xl text-gray-800">How can I change my subscription plan?</h3>
                                <p className="mt-2 text-gray-600">
                                    To change your subscription plan, go to your account settings and select the "Subscription" option.
                                </p>
                            </div>

                            <div className="bg-white p-6 rounded-lg shadow-md">
                                <h3 className="font-medium text-xl text-gray-800">What do I do if I forget my password?</h3>
                                <p className="mt-2 text-gray-600">
                                    If you've forgotten your password, click on the "Forgot Password" link on the login page and follow the instructions.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Contact Section */}
                    <div className="bg-white p-6 rounded-lg shadow-md">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Contact Support</h2>
                        <p className="text-lg text-gray-600 mb-4">
                            If you couldn't find the answer you were looking for, feel free to reach out to us directly.
                        </p>

                        {/* Contact Form */}
                        <form onSubmit={handleSubmit} className="space-y-4">
                            <div>
                                <label htmlFor="name" className="block text-gray-700">Full Name</label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    required
                                    className="w-full p-3 text-white mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-gray-700">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    className="w-full text-orange-600 p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                />
                            </div>

                            <div>
                                <label htmlFor="message" className="block text-gray-700">Message</label>
                                <textarea
                                    id="message"
                                    name="message"
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    required
                                    rows="5"
                                    className="w-full text-stone-400 p-3 mt-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                                ></textarea>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
