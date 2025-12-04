import React from "react";

const Leaderboard = () => {
  // Sample data for parcel senders
  const senders = [
    { id: 1, name: "Partho Roy", parcelsSent: 120, rank: 1, rewards: "🏅 Gold" },
    { id: 2, name: "Riya Ahmed", parcelsSent: 95, rank: 2, rewards: "🥈 Silver" },
    { id: 3, name: "Karim Hossain", parcelsSent: 80, rank: 3, rewards: "🥉 Bronze" },
    { id: 4, name: "Salma Khan", parcelsSent: 65, rank: 4, rewards: "-" },
    { id: 5, name: "Tanvir Alam", parcelsSent: 50, rank: 5, rewards: "-" },
  ];

  return (
    <div className="max-w-6xl mx-auto py-20 px-4 text-gray-200">
      <h1 className="text-4xl font-bold text-center mb-12 text-yellow-400">
        📦 Top Parcel Senders
      </h1>

      <div className="overflow-x-auto">
        <table className="table w-full bg-gray-800/80 rounded-xl shadow-lg text-gray-300">
          <thead>
            <tr className="text-yellow-400 text-lg">
              <th>Rank</th>
              <th>Sender Name</th>
              <th>Parcels Sent</th>
              <th>Reward</th>
            </tr>
          </thead>
          <tbody>
            {senders.map((sender) => (
              <tr
                key={sender.id}
                className={`transition-all hover:bg-gray-700 ${
                  sender.rank === 1 ? "bg-yellow-900/30" : ""
                }`}
              >
                <td className="font-bold text-yellow-300">{sender.rank}</td>
                <td>{sender.name}</td>
                <td className="font-semibold">{sender.parcelsSent}</td>
                <td>{sender.rewards}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <p className="mt-6 text-center text-gray-400">
        🏆 Send more parcels to get rewards and climb up the leaderboard!
      </p>
    </div>
  );
};

export default Leaderboard;
