// PlayerInfo.jsx

export default function PlayerInfo({ player }) {
  console.log("ccc", player);
  // If `player` is null/undefined, return early or render a fallback
  if (!player) {
    return (
      <div className="flex items-center justify-center p-4 border border-gray-300 rounded">
        No player data
      </div>
    );
  }

  // Pull data from JSON fields. Use fallback values ("N/A") if they’re missing.
  const imageUrl = player?.Image;
  console.log("img", imageUrl);
  const height = player["Ht."] || "N/A";
  const weight = player["Wt."] || "N/A";
  const academicYear = player["Academic Year"] || "N/A";
  const hometownAndHighSchool = player["Hometown / High School"] || "N/A";
  const position = player["Pos."] || "N/A";

  // If your "Hometown / High School" field is combined (e.g. "Gibsonia, PA / Pine-Richland"),
  // you can optionally split them if you want separate "Hometown" vs "High School":
  let hometown = "N/A";
  let highSchool = "N/A";
  if (hometownAndHighSchool.includes("/")) {
    const parts = hometownAndHighSchool.split("/");
    hometown = parts[0]?.trim() || "N/A";
    highSchool = parts[1]?.trim() || "N/A";
  } else {
    // If you store them together or want them shown together:
    hometown = hometownAndHighSchool;
  }

  return (
    <div className="flex lg:flex-col md:flex-row flex-col gap-6 w-full mt-6 items-center border border-gray-300 rounded p-4 ">
      {/* Player Image */}
      <div className="w-full h-[300px] p-1 border border-gray-200">
        <img
          src={imageUrl}
          alt={player["Name"] || "Player"}
          className="w-full h-full "
        />
      </div>

      {/* Player Info */}
      <div className="mt-4 w-full">
        {/* Height */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <span className="text-sm font-semibold text-gray-600">Height:</span>
          <span className="text-sm font-medium text-gray-900">{height}</span>
        </div>

        {/* Weight */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <span className="text-sm font-semibold text-gray-600">Weight:</span>
          <span className="text-sm font-medium text-gray-900">{weight}</span>
        </div>

        {/* Academic Year */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <span className="text-sm font-semibold text-gray-600">Year:</span>
          <span className="text-sm font-medium text-gray-900">
            {academicYear}
          </span>
        </div>

        {/* Hometown */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <span className="text-sm font-semibold text-gray-600">Hometown:</span>
          <span className="text-sm font-medium text-gray-900">{hometown}</span>
        </div>

        {/* High School */}
        <div className="flex justify-between items-center border-b border-gray-200 py-2">
          <span className="text-sm font-semibold text-gray-600">
            High School:
          </span>
          <span className="text-sm font-medium text-gray-900">
            {highSchool}
          </span>
        </div>

        {/* Position */}
        <div className="flex justify-between items-center py-2">
          <span className="text-sm font-semibold text-gray-600">Position:</span>
          <span className="text-sm font-medium text-gray-900">{position}</span>
        </div>
      </div>
    </div>
  );
}
