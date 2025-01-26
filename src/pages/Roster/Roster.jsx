/* eslint-disable react/no-unescaped-entities */
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import CoachingStuff from "@/components/pagesComponents/rostercomponent/CoachingStuff";
import PlayerDetails from "@/components/pagesComponents/rostercomponent/PlayerDetails";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Grid, List, Printer } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router-dom";
import mergedRoster from "../../assets/merged_roster.json"; // adjust path as needed
function getYearFromSeason(seasonStr) {
  return seasonStr.split("-")[0];
}
export default function Roster() {
  const [view, setView] = useState("list"); // View toggle state
  const [expandedPlayer, setExpandedPlayer] = useState(null); // State for expanded card
  const [season, setSeason] = useState("2024-25"); // Season state

  const targetYear = getYearFromSeason(season); // e.g. "2024"

  // 2) Filter the mergedRoster to only entries matching that year
  const filteredYearBlocks = mergedRoster.filter(
    (yearItem) => yearItem.Year === targetYear
  );

  // 3) Flatten the Players from the matching year blocks
  const allPlayers = filteredYearBlocks.flatMap((yearItem) => yearItem.Players);
  return (
    <div className="bg-primary py-10">
      <SectionWrapper>
        <div className="p-6 bg-white rounded shadow">
          <div>
            <h2 className="lg:text-4xl md:text-2xl text-xl py-6 font-semibold text-black">
              2024 Behrend Men's Soccer Roster
            </h2>
          </div>

          {/* Header Section */}
          <div className="border border-gray-400 py-4 px-6 mb-6 flex lg:flex-row md:flex-row flex-col md:justify-between md:items-center items-start gap-3">
            <button className="flex items-center space-x-2 text-primary border border-primary px-4 py-2 rounded hover:bg-gray-100">
              <Printer />
              <span>Print</span>
            </button>

            {/* View Toggle (List / Grid) */}
            <div className="flex items-center border border-gray-300 rounded overflow-hidden">
              <button
                className={`flex items-center px-4 py-2 ${
                  view === "list" ? "bg-primary text-white" : "bg-gray-100"
                }`}
                onClick={() => setView("list")}
              >
                <List />
              </button>
              <button
                className={`flex items-center px-4 py-2 ${
                  view === "grid" ? "bg-primary text-white" : "bg-gray-100"
                }`}
                onClick={() => setView("grid")}
              >
                <Grid />
              </button>
            </div>

            {/* Season Selector */}
            <div className="flex items-center justify-center">
              <div className="flex items-center border border-gray-300 ">
                <h2 className="text-lg font-semibold px-4 py-[6px]">Season:</h2>
              </div>
              <div className="">
                <Select
                  value={season}
                  onValueChange={(value) => setSeason(value)}
                >
                  <SelectTrigger className="w-36 border py-5 border-gray-300 bg-white">
                    <SelectValue placeholder="Season" />
                  </SelectTrigger>
                  <SelectContent>
                    {/* These values should match the Year(s) in your JSON if you want data */}
                    <SelectItem value="2024-25">2024-25</SelectItem>
                    <SelectItem value="2023-24">2023-24</SelectItem>
                    <SelectItem value="2022-23">2022-23</SelectItem>
                    <SelectItem value="2021-22">2021-22</SelectItem>
                    <SelectItem value="2020-21">2020-21</SelectItem>
                    <SelectItem value="2019-20">2019-20</SelectItem>
                    {/* or 2015 if you only have that in your data: */}
                    <SelectItem value="2018-19">2018-19</SelectItem>
                    <SelectItem value="2015-16">2015-16</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>
          {/* List View */}
          {view === "list" && (
            <div className="overflow-x-auto">
              <table className="w-full rounded shadow border border-gray-300">
                <thead className="bg-primary text-white">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm">NO.</th>
                    <th className="py-3 px-4 text-left text-sm">NAME</th>
                    <th className="py-3 px-4 text-left text-sm">POS.</th>
                    <th className="py-3 px-4 text-left text-sm">CL.</th>
                    <th className="py-3 px-4 text-left text-sm">HT.</th>
                    <th className="py-3 px-4 text-left text-sm">WT.</th>
                    <th className="py-3 px-4 text-left text-sm">
                      HOMETOWN/HIGH SCHOOL
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  {allPlayers.map((player, index) => (
                    <tr key={index} className="hover:bg-gray-100">
                      <td className="py-3 px-4 text-sm">{player["No."]}</td>
                      <td className="py-3 px-4 flex items-center gap-3">
                        <img
                          src={player["Image"]}
                          alt={`${player["Name"]}'s profile`}
                          className="w-8 h-8 rounded-full"
                        />
                        {/* If you want the name to link somewhere, e.g. /player-details/:no */}
                        <Link
                          to={`/player-details/${targetYear}/${player["No."]}`}
                        >
                          <span>{player["Name"]}</span>
                        </Link>
                      </td>
                      <td className="py-3 px-4 text-sm">{player["Pos."]}</td>
                      <td className="py-3 px-4 text-sm">
                        {player["Academic Year"]}
                      </td>
                      <td className="py-3 px-4 text-sm">{player["Ht."]}</td>
                      <td className="py-3 px-4 text-sm">{player["Wt."]}</td>
                      <td className="py-3 px-4 text-sm">
                        {player["Hometown / High School"]}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
          {/* Grid View */}
          {view === "grid" && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-6">
              {allPlayers.map((player, idx) => (
                <div
                  key={idx}
                  className="relative bg-gray-100 rounded-lg shadow-lg overflow-hidden"
                >
                  {/* Player Image */}
                  <img
                    src={player.Image}
                    alt={player.Name}
                    className="w-full h-[273px]"
                  />

                  {/* Number Circle */}
                  <div className="absolute top-2 right-2 bg-primary text-white rounded-full w-8 h-8 flex items-center justify-center font-bold">
                    {player["No."]}
                  </div>

                  {/* Player Info */}
                  <div className="p-4 text-start">
                    <h3 className="text-lg font-bold text-primary">
                      <Link
                        to={`/player-details/${targetYear}/${player["No."]}`}
                        className="hover:underline"
                      >
                        {player["Name"]}
                      </Link>
                    </h3>
                    <p className="text-sm">
                      {player["Pos."]} | {player["Academic Year"]} |{" "}
                      {player["Ht."]}
                    </p>
                  </div>

                  {/* Three-dot menu */}
                  <button
                    onClick={() =>
                      expandedPlayer === idx
                        ? setExpandedPlayer(null)
                        : setExpandedPlayer(idx)
                    }
                    className="absolute top-2 left-2 bg-white p-2 rounded-full shadow-md hover:bg-primary hover:text-white"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="h-4 w-4"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 6v.01M12 12v.01M12 18v.01"
                      />
                    </svg>
                  </button>

                  {/* Expanded Details */}
                  {expandedPlayer === idx && (
                    <PlayerDetails
                      player={player}
                      onClose={() => setExpandedPlayer(null)}
                    />
                  )}
                </div>
              ))}
            </div>
          )}

          <CoachingStuff />
        </div>
      </SectionWrapper>
    </div>
  );
}
