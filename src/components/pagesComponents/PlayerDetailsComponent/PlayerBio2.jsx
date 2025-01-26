export default function PlayerBio({ player }) {
  const { bio } = player;

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Career Highlights</h2>
      {Object.entries(bio.careerHighlights).map(([year, highlights]) => (
        <div key={year} className="mb-6">
          <h3 className="text-lg font-semibold">{year}</h3>
          <ul className="list-disc list-inside ml-4">
            {highlights.map((item, index) => (
              <li key={index} className="text-gray-700">
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}

      <h2 className="text-2xl font-bold mt-8 mb-4">At Penn State Behrend</h2>
      <p className="text-gray-700 mb-2">
        <strong>Major:</strong> {bio.education.major}
      </p>
      <p className="text-gray-700">
        <strong>Affiliations:</strong> {bio.education.affiliations.join(", ")}
      </p>

      <h2 className="text-2xl font-bold mt-8 mb-4">Personal</h2>
      <ul className="list-disc list-inside ml-4">
        {bio.personal.map((item, index) => (
          <li key={index} className="text-gray-700">
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
