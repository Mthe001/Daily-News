import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { FaBell, FaGlobeAmericas, FaStar } from "react-icons/fa";

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
    <div className=" bg-background border-2 mx-9 rounded-lg my-10 py-16 flex flex-col items-center justify-center px-6">
      <motion.div
        className="w-full max-w-3xl bg-background shadow-2xl rounded-2xl p-8 lg:p-12 border-2 text-gray-200 space-y-8"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        {!isSubmitted ? (
          <div>
            {/* Header Section */}
            <motion.h1
              className="text-5xl font-extrabold text-center text-foreground dark:text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              Join Our Premium Package
            </motion.h1>
            <p className="text-gray-600 text-center text-lg mb-10">
              Be the first to know about updates, news, and exclusive content.
              Subscribe now to stay connected.
            </p>

            {/* Benefits Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mb-8">
              {[
                {
                  Icon: FaBell,
                  title: "Real-Time Alerts",
                  description: "Stay informed with instant updates.",
                },
                {
                  Icon: FaGlobeAmericas,
                  title: "Global Coverage",
                  description: "News from every corner of the world.",
                },
                {
                  Icon: FaStar,
                  title: "Exclusive Content",
                  description: "Access premium insights and articles.",
                },
              ].map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start space-x-4 bg-gray-800 p-4 rounded-lg shadow-md hover:shadow-lg transition-all"
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 + index * 0.2 }}
                >
                  <div className="text-indigo-500 text-3xl">
                    <benefit.Icon />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold">{benefit.title}</h3>
                    <p className="text-gray-400 text-sm">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Form Section */}
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-300"
                >
                  Enter Your Email
                </label>
                <input
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="you@example.com"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-gray-200 shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  required
                />
              </div>
              <motion.button
                type="submit"
                className="w-full py-3 bg-indigo-600 text-white rounded-lg font-semibold text-lg shadow-lg hover:bg-indigo-700 transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe Now
              </motion.button>
            </form>
          </div>
        ) : (
          <div className="text-center">
            <motion.h2
              className="text-4xl font-bold text-white mb-6"
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              Thank You for Subscribing!
            </motion.h2>
            <p className="text-gray-300 text-lg mb-6">
              We’re thrilled to have you on board. Check your inbox for the
              latest updates.
            </p>
            <motion.button
              onClick={() => setIsSubmitted(false)}
              className="px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium shadow-lg hover:bg-indigo-700 transition-all"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Link to="/subscription">Explore Premium</Link>
            </motion.button>
          </div>
        )}
      </motion.div>
    </div>
  );
};

export default NewsletterSignup;
