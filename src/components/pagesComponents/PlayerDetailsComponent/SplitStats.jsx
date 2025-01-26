import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import React, { useState } from "react";

export default function SplitStats({ player }) {
  const [selectedFilter, setSelectedFilter] = useState("Season Ext."); // Default dropdown value

  const handleFilterSelection = (value) => {
    setSelectedFilter(value);
  };

  // Filter data based on selected dropdown option
  const filteredStats = player.splitStats[selectedFilter] || {};

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Split Stats</h2>

      {/* Dropdown Selector */}
      <div className="mb-6">
        <Select onValueChange={handleFilterSelection}>
          <SelectTrigger className="w-full md:w-60 border border-gray-200 bg-white">
            <SelectValue placeholder="Select Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="Season">Season</SelectItem>
            <SelectItem value="Season Ext.">Season Ext.</SelectItem>
            <SelectItem value="Game">Game</SelectItem>
            <SelectItem value="Game Ext.">Game Ext.</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Responsive Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse border border-gray-300">
          <thead>
            <tr className="bg-primary text-white">
              <th className="py-2 px-4 text-left">Category</th>
              <th className="py-2 px-4 text-center">GP</th>
              <th className="py-2 px-4 text-center">Wins</th>
              <th className="py-2 px-4 text-center">Losses</th>
              <th className="py-2 px-4 text-center">Ties</th>
              <th className="py-2 px-4 text-center">Shutouts</th>
              <th className="py-2 px-4 text-center">Min</th>
            </tr>
          </thead>
          <tbody>
            {/* Render each section separately */}
            {Object.keys(filteredStats).map((section, sectionIndex) => (
              <React.Fragment key={sectionIndex}>
                {/* Section Header */}
                <tr className="bg-gray-200">
                  <td
                    colSpan={7}
                    className="py-2 px-4 text-left font-bold uppercase"
                  >
                    {section}
                  </td>
                </tr>
                {/* Section Data */}
                {Object.keys(filteredStats[section]).map((category, index) => (
                  <tr
                    key={index}
                    className={`${
                      index % 2 === 0 ? "bg-gray-100" : "bg-white"
                    } hover:bg-gray-200`}
                  >
                    <td className="py-2 px-4 text-left">{category}</td>
                    <td className="py-2 px-4 text-center">
                      {filteredStats[section][category].gp || "-"}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {filteredStats[section][category].wins || "-"}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {filteredStats[section][category].losses || "-"}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {filteredStats[section][category].ties || "-"}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {filteredStats[section][category].shutouts || "-"}
                    </td>
                    <td className="py-2 px-4 text-center">
                      {filteredStats[section][category].min || "-"}
                    </td>
                  </tr>
                ))}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
