import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import CareerStats from "@/components/pagesComponents/PlayerDetailsComponent/CareerStats";
import PlayerBio from "@/components/pagesComponents/PlayerDetailsComponent/PlayerBio";
import PlayerInfo from "@/components/pagesComponents/PlayerDetailsComponent/PlayerInfo";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";
import { useParams } from "react-router-dom";
import mergedRoster from "../../assets/merged_roster.json"; // Adjust path as needed

export default function PlayerDetails() {
  const [activeTab, setActiveTab] = useState("bio");
  const { year, no } = useParams(); // Extract both 'year' and 'no'

  console.log("Route Params => year:", year, ", no:", no);

  // Find the year block
  const yearBlock = mergedRoster.find((block) => block.Year === year);

  if (!yearBlock) {
    return (
      <div className="bg-primary min-h-screen py-10 text-white">
        <SectionWrapper className="bg-white text-black p-6 rounded">
          <h2 className="text-xl font-bold">
            Sorry, we could not find data for the year {year}.
          </h2>
        </SectionWrapper>
      </div>
    );
  }

  // Parse 'no' to handle leading zeros if necessary
  const parsedNo = parseInt(no, 10);
  const player = yearBlock.Players.find(
    (p) => parseInt(p["No."], 10) === parsedNo
  );

  console.log("Found player:", player);

  // If player not found, show fallback
  if (!player) {
    return (
      <div className="bg-primary min-h-screen py-10 text-white">
        <SectionWrapper className="bg-white text-black p-6 rounded">
          <h2 className="text-xl font-bold">
            Sorry, we could not find a player with No. {no} in {year}.
          </h2>
        </SectionWrapper>
      </div>
    );
  }

  // Render tab content based on activeTab state
  const renderTabContent = () => {
    switch (activeTab) {
      case "bio":
        return <PlayerBio player={player} />;
      case "careerStats":
        return <CareerStats player={player} />;
      default:
        return <PlayerBio player={player} />;
    }
  };

  return (
    <div className="bg-primary min-h-screen py-10">
      <SectionWrapper className="bg-white rounded shadow border border-gray-300 overflow-hidden">
        {/* Header Section */}
        {/* <div className="px-6 py-4 flex flex-col md:flex-row items-center justify-end">
          <Select>
            <SelectTrigger className="mt-4 md:mt-0 w-40 border border-gray-200 bg-white">
              <SelectValue placeholder="Related Bios" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="related1">Player 1</SelectItem>
              <SelectItem value="related2">Player 2</SelectItem>
              <SelectItem value="related3">Player 3</SelectItem>
            </SelectContent>
          </Select>
        </div> */}

        {/* Player Name in the Header */}
        <div className="bg-primary text-white">
          <h1 className="font-semibold text-3xl px-4 py-3 text-start">
            {player["Name"] || "Unnamed Player"}
          </h1>
        </div>

        <div className="gap-4 px-4 lg:grid grid-cols-12">
          {/* Left Column: Player Info */}
          <div className="col-span-3">
            <PlayerInfo player={player} />
          </div>

          {/* Right Column: Tabs */}
          <div className="col-span-9 w-full">
            {/* Quick Stats */}
            <div className="mt-8 mb-3 w-full grid grid-cols-4 border border-gray-300">
              <div className="col-span-1 py-2 border-r border-gray-300 flex flex-col justify-center items-center text-lg">
                <h2 className="font-medium text-gray-500">G</h2>
                <h2 className="font-semibold">{player["G"] || 0}</h2>
              </div>
              <div className="col-span-1 border-r border-gray-300 flex flex-col justify-center items-center text-lg">
                <h2 className="font-medium text-gray-500">A</h2>
                <h2 className="font-semibold">{player["A"] || 0}</h2>
              </div>
              <div className="col-span-1 border-r border-gray-300 flex flex-col justify-center items-center text-lg">
                <h2 className="font-medium text-gray-500">PTS</h2>
                <h2 className="font-semibold">{player["PTS"] || 0}</h2>
              </div>
              <div className="col-span-1 flex flex-col justify-center items-center text-lg">
                <h2 className="font-medium text-gray-500">Other</h2>
                <h2 className="font-semibold">0</h2>
              </div>
            </div>

            <div className="border">
              {/* Desktop Tabs */}
              <div className="w-full border-b border-gray-300 hidden md:flex">
                {[
                  { id: "bio", label: "Bio" },
                  { id: "careerStats", label: "Career Stats" },
                ].map((tab) => (
                  <button
                    key={tab.id}
                    className={`py-3 px-6 border-b-2 ${
                      activeTab === tab.id
                        ? "border-primary text-primary font-semibold"
                        : "border-transparent text-gray-500"
                    } hover:border-primary hover:text-primary`}
                    onClick={() => setActiveTab(tab.id)}
                  >
                    {tab.label}
                  </button>
                ))}
              </div>

              {/* Mobile Dropdown Tabs */}
              <div className="md:hidden w-full">
                <Select
                  value={activeTab}
                  onValueChange={(value) => setActiveTab(value)}
                >
                  <SelectTrigger className="w-full border border-gray-200">
                    <SelectValue placeholder="See More" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="bio">Bio</SelectItem>
                    <SelectItem value="careerStats">Career Stats</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {/* Tab Content */}
              <div className="w-full">{renderTabContent()}</div>
            </div>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
