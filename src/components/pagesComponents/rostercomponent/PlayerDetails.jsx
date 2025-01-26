export default function PlayerDetails({ player, onClose }) {
  return (
    <div className="absolute inset-0 bg-white shadow-lg rounded-lg p-3 border border-gray-300 flex flex-col">
      {/* Close Button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 bg-gray-200 p-2 rounded-full hover:bg-gray-300"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 text-gray-600"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M6 18L18 6M6 6l12 12"
          />
        </svg>
      </button>

      {/* Player Image and Header */}
      <div className="flex flex-row gap-4 items-center">
        <img
          src={player.Image}
          alt={player.Name}
          className="w-16 h-24 border border-gray-300"
        />
        <div className="flex flex-col">
          <h2 className="text-lg font-semibold text-primary mt-3">
            #{player["No."]} {/* <-- JSON uses "No." */}
          </h2>
          <h3 className="text-xl font-bold text-black">{player.Name}</h3>
        </div>
      </div>

      {/* Divider */}
      <div className="border-t border-gray-300 my-4"></div>

      {/* Player Details */}
      <div className="flex-1 space-y-1">
        <p className="text-sm">
          <span className="font-semibold">Position:</span> {player["Pos."]}{" "}
          {/* <-- JSON uses "Pos." */}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Class:</span>{" "}
          {player["Academic Year"]} {/* <-- JSON uses "Academic Year" */}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Height:</span> {player["Ht."]}{" "}
          {/* <-- JSON uses "Ht." */}
        </p>
        <p className="text-sm">
          <span className="font-semibold">Hometown / High School:</span>{" "}
          {player["Hometown / High School"]}{" "}
          {/* <-- JSON uses this combined field */}
        </p>
      </div>

      {/* Full Bio Button */}
      <div className="mt-4">
        <button className="w-full bg-primary text-white py-3 rounded font-semibold hover:bg-blue-700">
          Full Bio
        </button>
      </div>
    </div>
  );
}
