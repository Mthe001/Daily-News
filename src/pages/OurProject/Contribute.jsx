import React from 'react';
import { Helmet } from 'react-helmet-async';

const Contribute = () => {
    return (
        <div className="min-h-screen bg-gray-50 py-12 px-6">
            {/* React Helmet for SEO */}
            <Helmet>
                <title>Contribute to News 240</title>
                <meta
                    name="description"
                    content="Learn how to contribute to News 240 by reporting bugs, submitting feature requests, improving documentation, and more!"
                />
            </Helmet>

            <div className="max-w-7xl mx-auto bg-white shadow-md rounded-lg p-8">
                <h1 className="text-3xl font-bold text-gray-800 mb-6">How to Contribute to News 240</h1>
                <p className="text-lg text-gray-600 mb-4">
                    We welcome contributions from the community! Whether you're a beginner or experienced developer, your input is valuable to us. Here's how you can help improve **News 240**:
                </p>

                {/* Bento Grid Layout */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {/* Section 1 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">1. Report Bugs</h2>
                        <p className="text-gray-600">
                            If you find any bugs or issues, please report them by creating a new issue in our GitHub repository. Be sure to include details about the bug, steps to reproduce it, and your environment.
                        </p>
                    </div>

                    {/* Section 2 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">2. Submit Feature Requests</h2>
                        <p className="text-gray-600">
                            We love to hear new ideas! If you have suggestions for new features or improvements, please submit them through the issues page or fork the repository and create a pull request with your proposed changes.
                        </p>
                    </div>

                    {/* Section 3 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">3. Improve Documentation</h2>
                        <p className="text-gray-600">
                            Clear documentation helps everyone. If you notice any parts of the documentation that can be improved or clarified, feel free to submit a pull request with your suggestions.
                        </p>
                    </div>

                    {/* Section 4 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">4. Help with Code</h2>
                        <p className="text-gray-600">
                            If you're a developer, we'd love your help with fixing bugs, improving features, or adding new ones. Fork the repository, make changes, and submit a pull request. Please follow our coding conventions and commit messages.
                        </p>
                    </div>

                    {/* Section 5 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">5. Spread the Word</h2>
                        <p className="text-gray-600">
                            If you can't contribute code, that's okay! You can still help by spreading the word about **News 240**. Share it with your friends and followers on social media or write about it on your blog.
                        </p>
                    </div>

                    {/* Section 6 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">How to Submit a Pull Request</h2>
                        <p className="text-gray-600">
                            To submit a pull request, follow these steps:
                        </p>
                        <ol className="list-decimal pl-6 text-gray-600 mb-4">
                            <li>Fork the repository by clicking the "Fork" button at the top of the GitHub page.</li>
                            <li>Clone your forked repository to your local machine.</li>
                            <li>Create a new branch for your changes (`git checkout -b feature/your-feature-name`).</li>
                            <li>Make your changes and commit them (`git commit -m 'Add your message'`).</li>
                            <li>Push the changes to your fork (`git push origin feature/your-feature-name`).</li>
                            <li>Submit a pull request on GitHub with a description of what you've done.</li>
                        </ol>
                    </div>

                    {/* Section 7 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Questions?</h2>
                        <p className="text-gray-600">
                            If you have any questions or need help getting started, feel free to reach out to us! You can contact us via email or open an issue on the GitHub repository.
                        </p>
                    </div>

                    {/* Section 8 */}
                    <div className="bg-white p-6 shadow-md rounded-lg">
                        <h2 className="text-2xl font-semibold text-gray-700 mb-4">Thank You!</h2>
                        <p className="text-gray-600">
                            Thank you for considering contributing to **News 240**! Your contributions make this project better, and we're excited to have you join the community.
                        </p>
                    </div>
                </div>

                <div className="mt-8">
                    <p className="text-gray-600 text-center">
                        Start contributing today and help make **News 240** the best news platform around!
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Contribute;
