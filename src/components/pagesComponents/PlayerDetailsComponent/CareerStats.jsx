export default function CareerStats({ player }) {
  // Safety check: if 'player' is missing, return a fallback
  if (!player) {
    return <div className="p-6">No player data available</div>;
  }

  // Extract the fields you need. If they’re empty strings, default them to 0 or “—”
  const { GP = 0, GS = 0, G = 0, A = 0, PTS = 0 } = player;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Career Stats</h2>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-2 px-4 text-left">GP</th>
              <th className="py-2 px-4 text-left">GS</th>
              <th className="py-2 px-4 text-left">G</th>
              <th className="py-2 px-4 text-left">A</th>
              <th className="py-2 px-4 text-left">PTS</th>
            </tr>
          </thead>
          <tbody>
            <tr className="bg-white hover:bg-gray-100">
              <td className="py-2 px-4">{GP}</td>
              <td className="py-2 px-4">{GS}</td>
              <td className="py-2 px-4">{G}</td>
              <td className="py-2 px-4">{A}</td>
              <td className="py-2 px-4">{PTS}</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}
