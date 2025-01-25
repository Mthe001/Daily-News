import { useState } from "react";

const PollsSection = () => {
  const [polls, setPolls] = useState([
    {
      question: "What content type do you engage with most?",
      options: ["Politics", "Sports", "Entertainment", "Technology"],
      votes: [30, 45, 15, 10],
    },
    {
      question: "How frequently do you interact with updates?",
      options: ["Daily", "Weekly", "Occasionally", "Never"],
      votes: [80, 10, 5, 5],
    },
  ]);

  const handleVote = (pollIndex, optionIndex) => {
    const updatedPolls = [...polls];
    updatedPolls[pollIndex].votes[optionIndex] += 1;
    setPolls(updatedPolls);
  };

  const getTotalVotes = (pollIndex) => {
    return polls[pollIndex].votes.reduce((total, vote) => total + vote, 0);
  };

  return (
    <div className="bg-gradient-to-b from-blue-100 via-green-200 to-yellow-100 py-16 px-8 sm:px-12">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl lg:text-4xl font-bold text-gray-800 mb-8">
          Share Your Preferences: Participate in Our Quick Polls
        </h2>
        <p className="text-lg text-gray-700 mb-12">
          Your feedback matters! Join us in these quick polls to express your thoughts and help us improve.
        </p>

        {/* Polls */}
        {polls.map((poll, pollIndex) => (
          <div
            key={pollIndex}
            className="bg-white p-6 rounded-xl shadow-2xl mb-8 transition-all duration-300 ease-in-out hover:shadow-xl"
          >
            <h3 className="text-2xl lg:text-3xl font-semibold text-gray-800 mb-6">
              {poll.question}
            </h3>
            <div className="space-y-5">
              {poll.options.map((option, optionIndex) => (
                <div
                  key={optionIndex}
                  className="flex items-center justify-between bg-gray-100 rounded-lg p-4 cursor-pointer hover:bg-gray-200 transition-all"
                  onClick={() => handleVote(pollIndex, optionIndex)}
                >
                  <div className="text-lg text-gray-800">{option}</div>
                  <div className="text-sm text-gray-600">
                    {((poll.votes[optionIndex] / getTotalVotes(pollIndex)) * 100).toFixed(1)}%
                  </div>
                </div>
              ))}
            </div>

            {/* Results */}
            <div className="mt-6">
              <h4 className="text-lg text-gray-800 mb-4">Poll Results:</h4>
              {poll.options.map((option, optionIndex) => {
                const totalVotes = getTotalVotes(pollIndex);
                const percentage = (poll.votes[optionIndex] / totalVotes) * 100 || 0;
                return (
                  <div key={optionIndex} className="mb-5">
                    <div className="flex justify-between text-gray-800">
                      <span>{option}</span>
                      <span>{percentage.toFixed(1)}%</span>
                    </div>
                    <div className="w-full bg-gray-300 h-2 rounded-full">
                      <div
                        style={{ width: `${percentage}%` }}
                        className="h-2 bg-gradient-to-r from-blue-500 to-green-500 rounded-full"
                      ></div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        ))}

        {/* Call to Action */}
        <div className="mt-12">
          <h4 className="text-lg font-semibold text-gray-800 mb-6">
            Enjoyed these polls? Want more?
          </h4>
          <button className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white rounded-lg shadow-md hover:bg-gradient-to-l transition-all">
            Take More Polls
          </button>
        </div>
      </div>
    </div>
  );
};

export default PollsSection;
