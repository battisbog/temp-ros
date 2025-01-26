export default function ScheduleCard({ data }) {
  return (
    <div className="bg-white   p-4 ">
      <p className="text-sm font-semibold text-primary">{data.type}</p>
      <div className="flex justify-between border-b border-primary items-center pb-1">
        <p className="text-xs text-gray-500">{data.date}</p>
        <p className="text-sm font-bold text-gray-700 mt-2">{data.status}</p>
      </div>

      <div className="mt-4">
        {/* Team 1 */}
        <div className="flex items-center justify-between text-sm mb-2">
          <div className="flex items-center gap-2">
            <img
              src={data.team1.icon}
              alt={data.team1.name}
              className="w-6 h-6 object-contain"
            />
            <span className="text-gray-700">{data.team1.name}</span>
          </div>
          <span className="font-bold text-gray-600">{data.team1.score}</span>
        </div>

        {/* Team 2 */}
        <div className="flex items-center justify-between text-sm">
          <div className="flex items-center gap-2">
            <img
              src={data.team2.icon}
              alt={data.team2.name}
              className="w-6 h-6 object-contain"
            />
            <span className="text-gray-700">{data.team2.name}</span>
          </div>
          <span className="font-bold text-gray-600">{data.team2.score}</span>
        </div>
      </div>
    </div>
  );
}
