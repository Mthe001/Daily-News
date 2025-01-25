

import CheckoutForm from "@/components/CheckoutForm";
import PlansSection from "@/components/PlansSection";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useNavigate } from "react-router-dom";

// Stripe key
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLIC_KEY);

const SubscriptionPage = () => {
  const navigate = useNavigate();
  const [selectedPeriod, setSelectedPeriod] = useState("1"); // Default 1 minute
  const [price, setPrice] = useState(5); // Default price for 1 minute

  // Handle subscription period change
  const handlePeriodChange = (e) => {
    const period = e.target.value;
    setSelectedPeriod(period);

    // Set price based on the selected period
    if (period === "4.99") {
      setPrice(5);
    } else if (period === "19.99") {
      setPrice(20);
    } else if (period === "29.99") {
      setPrice(30);
    }
  };

  return (
    <div className="pb-20 bg-gradient-to-b from-zinc-700 via-stone-800 to-indigo-900 text-white">
      <Helmet>
        <title>Subscription || News 240</title>
      </Helmet>
      {/* Banner Section */}
      <section className="relative pt-24 pb-16 px-4 text-center">
        <div className="absolute inset-0 bg-black opacity-50"></div>
        <div className="relative z-10">
          <h1 className="text-4xl sm:text-5xl font-extrabold mb-6">
            Subscribe to Access Premium News
          </h1>
          <p className="text-lg sm:text-xl mb-6">
            Stay updated with exclusive content and insights.
          </p>
        </div>
      </section>

      {/* Back Button */}
      <div className="flex items-start justify-start px-6 py-3">
        <button
          onClick={() => navigate(-1)}
          className="bg-gray-700 text-white py-2 px-6 rounded-lg hover:bg-gray-600 transition duration-200"
        >
          Back
        </button>
      </div>

      <section>
        <PlansSection />
      </section>

      {/* Subscription Plan Section */}
      <section className="py-12 px-6 text-center">
        <div className="max-w-lg mx-auto bg-white shadow-xl rounded-2xl p-8 transform transition-all hover:scale-105 hover:shadow-2xl duration-300">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-semibold text-gray-800">Choose Your Plan</h2>
            {/* Price Display */}
            <div className="text-xl font-bold text-gray-800">
              <span className="text-gray-700">Total Price: </span>${price}
            </div>
          </div>

          {/* Dropdown to select subscription period */}
          <select
            value={selectedPeriod}
            onChange={handlePeriodChange}
            className="w-full px-4 py-2 mb-4 border rounded-lg text-gray-700 bg-gray-100 focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            <option value="4.99">Starter Plan (For testing)</option>
            <option value="19.99">Intermediate Plan (5 Days)</option>
            <option value="29.99">Premium Plan (10 Days)</option>
          </select>

          {/* Payment options or components */}
          <Elements stripe={stripePromise}>
            <CheckoutForm price={price} />
          </Elements>
        </div>
      </section>
    </div>
  );
};

export default SubscriptionPage;
