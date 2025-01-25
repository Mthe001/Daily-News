import { useState } from "react";
import { Link } from "react-router-dom";

const NewsletterSignup = () => {
  const [email, setEmail] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setIsSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#1e3a8a] to-[#4f46e5] py-12 flex flex-col items-center justify-center px-6">
      <div className="w-full max-w-2xl bg-[#0a1a2e] shadow-xl rounded-xl p-8 lg:p-12 text-gray-200 space-y-6">
        {!isSubmitted ? (
          <div>
            {/* Header */}
            <h1 className="text-4xl lg:text-5xl font-extrabold text-white text-center mb-6">
              Stay Ahead with Our Newsletters
            </h1>
            <p className="text-gray-300 text-center lg:text-lg mb-10">
              Subscribe to our newsletter for exclusive news, insights, and
              updates delivered directly to your inbox.
            </p>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              <div className="flex items-start space-x-4 text-white">
                <div className="text-indigo-400 text-4xl">
                  <i className="fas fa-bell"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Instant Alerts</h3>
                  <p className="text-gray-400 text-sm">
                    Get notified as soon as breaking news hits.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-white">
                <div className="text-indigo-400 text-4xl">
                  <i className="fas fa-globe-americas"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Global Coverage</h3>
                  <p className="text-gray-400 text-sm">
                    Stay informed about worldwide events and stories.
                  </p>
                </div>
              </div>
              <div className="flex items-start space-x-4 text-white">
                <div className="text-indigo-400 text-4xl">
                  <i className="fas fa-star"></i>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Premium Insights</h3>
                  <p className="text-gray-400 text-sm">
                    Access exclusive content and expert opinions.
                  </p>
                </div>
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                  className="w-full px-4 py-3 bg-[#1f2937] border border-[#374151] rounded-lg shadow-md text-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-medium text-lg shadow-md hover:bg-indigo-700 transition-all"
              >
                Subscribe Now
              </button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <h2 className="text-3xl lg:text-4xl font-semibold text-white mb-6">
              Thank You for Subscribing!
            </h2>
            <p className="text-gray-300 lg:text-lg mb-4">
              You are now on our newsletter list. Stay tuned for exclusive
              updates.
            </p>
            <button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-md hover:bg-indigo-700 transition-all"
            >
              <Link to={`/subscription`}>Go Premium</Link>
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default NewsletterSignup;
