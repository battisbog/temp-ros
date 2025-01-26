import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

export default function GameLog({ player }) {
  const [selectedGame, setSelectedGame] = useState(null);

  const handleGameSelection = (value) => {
    setSelectedGame(player.gameLog.find((game) => game.date === value));
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold mb-4">Extended Goalkeeper</h2>

      {/* Dropdown Selector */}
      <Select onValueChange={handleGameSelection}>
        <SelectTrigger className="w-full md:w-60 border border-gray-200 bg-white">
          <SelectValue placeholder="Select Game" />
        </SelectTrigger>
        <SelectContent>
          {player.gameLog.map((game, index) => (
            <SelectItem key={index} value={game.date}>
              {`${game.date} - ${game.opponent}`}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>

      {/* Display Table */}
      <div className="mt-6">
        {selectedGame ? (
          <div className="overflow-x-auto">
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Opponent</th>
                  <th className="py-2 px-4 text-left">Score</th>
                  <th className="py-2 px-4 text-left">GP</th>
                  <th className="py-2 px-4 text-left">Wins</th>
                  <th className="py-2 px-4 text-left">Losses</th>
                  <th className="py-2 px-4 text-left">Ties</th>
                  <th className="py-2 px-4 text-left">Shutouts</th>
                  <th className="py-2 px-4 text-left">Minutes</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white hover:bg-gray-100">
                  <td className="py-2 px-4">{selectedGame.date}</td>
                  <td className="py-2 px-4">{selectedGame.opponent}</td>
                  <td className="py-2 px-4">{selectedGame.score}</td>
                  <td className="py-2 px-4">{selectedGame.gp || "-"}</td>
                  <td className="py-2 px-4">{selectedGame.wins || "-"}</td>
                  <td className="py-2 px-4">{selectedGame.losses || "-"}</td>
                  <td className="py-2 px-4">{selectedGame.ties || "-"}</td>
                  <td className="py-2 px-4">{selectedGame.shutouts || "-"}</td>
                  <td className="py-2 px-4">{selectedGame.minutes || "-"}</td>
                </tr>
              </tbody>
            </table>
          </div>
        ) : (
          <div className="overflow-x-auto">
            <p className="text-gray-500">No data selected</p>
            <table className="w-full border-collapse border border-gray-300">
              <thead>
                <tr className="bg-primary text-white">
                  <th className="py-2 px-4 text-left">Date</th>
                  <th className="py-2 px-4 text-left">Opponent</th>
                  <th className="py-2 px-4 text-left">Score</th>
                  <th className="py-2 px-4 text-left">GP</th>
                  <th className="py-2 px-4 text-left">Wins</th>
                  <th className="py-2 px-4 text-left">Losses</th>
                  <th className="py-2 px-4 text-left">Ties</th>
                  <th className="py-2 px-4 text-left">Shutouts</th>
                  <th className="py-2 px-4 text-left">Minutes</th>
                </tr>
              </thead>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
