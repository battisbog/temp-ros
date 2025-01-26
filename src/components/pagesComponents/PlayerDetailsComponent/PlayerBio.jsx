// PlayerBio.jsx

export default function PlayerBio({ player }) {
  // Safely split the Bio string by newlines so each line is in a bullet list.
  // If Bio is missing or empty, default to an empty string:
  const bioLines = player.Bio ? player.Bio.split("\n") : [];

  return (
    <div className="p-6">
      {/* 1) Career Highlights */}
      <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>
      <ul className="list-disc list-inside ml-4">
        {bioLines.map((line, index) => {
          // You can trim empty lines if you want
          const cleanLine = line.trim();
          if (!cleanLine) return null; // skip blank lines

          return (
            <li key={index} className="text-gray-700">
              {cleanLine}
            </li>
          );
        })}
      </ul>

      {/* 2) At Penn State Behrend - adapt however you'd like */}
      <h2 className="text-2xl font-bold mt-8 mb-4">At Penn State Behrend</h2>
      <p className="text-gray-700 mb-2">
        <strong>Academic Year:</strong>{" "}
        {player["Academic Year"] || "Not Available"}
      </p>
      <p className="text-gray-700 mb-2">
        <strong>Position:</strong> {player["Pos."] || "N/A"}
      </p>

      {/* 3) Personal */}
      <h2 className="text-2xl font-bold mt-8 mb-4">Personal</h2>
      <ul className="list-disc list-inside ml-4">
        <li className="text-gray-700">
          <strong>Hometown / High School:</strong>{" "}
          {player["Hometown / High School"] || "N/A"}
        </li>
        <li className="text-gray-700">
          <strong>Height:</strong> {player.Ht || "N/A"}
        </li>
        <li className="text-gray-700">
          <strong>Weight:</strong> {player.Wt || "N/A"}
        </li>
      </ul>
    </div>
  );
}
