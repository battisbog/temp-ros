export default function PlayerProfile({ player }) {
  const { profile } = player;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Recent Games</h2>

      {/* Recent Games Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300 mb-8">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-2 px-4 text-left">Date</th>
              <th className="py-2 px-4 text-left">Opponent</th>
              <th className="py-2 px-4 text-left">Result</th>
            </tr>
          </thead>
          <tbody>
            {profile.recentGames.map((game, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="py-2 px-4">{game.date}</td>
                <td className="py-2 px-4">{game.opponent}</td>
                <td className="py-2 px-4">{game.result}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <h2 className="text-2xl font-bold mb-4">Season Statistics</h2>

      {/* Season Statistics Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-2 px-4 text-left">Statistic</th>
              <th className="py-2 px-4 text-center">Overall</th>
              <th className="py-2 px-4 text-center">Conference</th>
            </tr>
          </thead>
          <tbody>
            {Object.keys(profile.seasonStats.overall).map((stat, index) => (
              <tr
                key={index}
                className={`${
                  index % 2 === 0 ? "bg-gray-100" : "bg-white"
                } hover:bg-gray-200`}
              >
                <td className="py-2 px-4 text-left capitalize">
                  {stat.replace(/([A-Z])/g, " $1")}
                </td>
                <td className="py-2 px-4 text-center">
                  {profile.seasonStats.overall[stat]}
                </td>
                <td className="py-2 px-4 text-center">
                  {profile.seasonStats.conference[stat]}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
