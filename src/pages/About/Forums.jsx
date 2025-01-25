import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';

const Forums = () => {
    const [topics, setTopics] = useState([
        {
            id: 1,
            title: 'Breaking News Discussions',
            description: 'Join the discussion about the latest breaking news and updates.',
            replies: 12,
            views: 230,
        },
        {
            id: 2,
            title: 'Tech and Innovations',
            description: 'Discuss the latest trends in technology and innovation.',
            replies: 34,
            views: 410,
        },
        {
            id: 3,
            title: 'Entertainment Buzz',
            description: 'Talk about the latest movies, shows, and celebrity news.',
            replies: 5,
            views: 98,
        },
    ]);

    return (
       <div>
         <Helmet>
            <title>Forums ! News 240</title>
         </Helmet>
            <div className="bg-gray-50 py-12">
                <div className="max-w-7xl mx-auto px-6">
                    {/* Heading Section */}
                    <div className="text-center mb-12">
                        <h1 className="text-3xl font-bold text-gray-900">Forums</h1>
                        <p className="mt-4 text-lg text-gray-600">
                            Join the conversation and engage with the community.
                        </p>
                    </div>

                    {/* Forum Topics Section */}
                    <div className="space-y-6">
                        {topics.map((topic) => (
                            <div key={topic.id} className="bg-white p-6 rounded-lg shadow-md hover:bg-gray-100 transition">
                                <Link to={`/forum/${topic.id}`}>
                                    <h3 className="text-xl font-medium text-gray-800">{topic.title}</h3>
                                    <p className="mt-2 text-gray-600">{topic.description}</p>
                                    <div className="mt-4 text-sm text-gray-500">
                                        <span>{topic.replies} Replies | </span>
                                        <span>{topic.views} Views</span>
                                    </div>
                                </Link>
                            </div>
                        ))}
                    </div>


                </div>
            </div>
       </div>
    );
};

export default Forums;
