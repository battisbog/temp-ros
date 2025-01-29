import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { useEffect, useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import icon1 from "../../../assets/images/icon/icon1.png";
import icon2 from "../../../assets/images/icon/icon2.png";
import icon3 from "../../../assets/images/icon/icon3.png";
import icon4 from "../../../assets/images/icon/icon4.png";
import ScheduleCard from "./ScheduleCard"; // Import the reusable card component

const resultsData = [
  {
    id: 1,
    date: "Nov 16",
    type: "Men's Soccer",
    status: "Final - OT",
    team1: {
      name: "Nittany Lions",
      score: 0,
      icon: icon4,
    },
    team2: {
      name: "Johns Hopkins",
      score: 1,
      icon: icon1,
    },
  },
  {
    id: 2,
    date: "Nov 09",
    type: "Men's Soccer",
    status: "Final - PK Away",
    team1: {
      name: "Nittany Lions",
      score: 0,
      icon: icon2,
    },
    team2: {
      name: "Alfred St.",
      score: 0,
      icon: icon4,
    },
  },
  {
    id: 3,
    date: "Nov 06",
    type: "Men's Soccer",
    status: "Final - OT",
    team1: {
      name: "Mt. Aloysius",
      score: 1,
      icon: icon3,
    },
    team2: {
      name: "Nittany Lions",
      score: 2,
      icon: icon1,
    },
  },
  {
    id: 4,
    date: "Oct 29",
    type: "Men's Soccer",
    status: "Final",
    team1: {
      name: "Hilbert",
      score: 0,
      icon: icon4,
    },
    team2: {
      name: "Nittany Lions",
      score: 6,
      icon: icon2,
    },
  },
];

export default function Schedule() {
  const [activeTab, setActiveTab] = useState("RESULTS"); // State for active tab
  const [currentIndex, setCurrentIndex] = useState(0); // Current visible index
  const [visibleCards, setVisibleCards] = useState(3); // Number of visible cards

  // Dynamically adjust the visibleCards based on screen size
  useEffect(() => {
    const updateVisibleCards = () => {
      if (window.innerWidth < 640) {
        setVisibleCards(1); // Mobile: 1 card
      } else if (window.innerWidth < 1024) {
        setVisibleCards(2); // Tablet: 2 cards
      } else {
        setVisibleCards(3); // Desktop: 3 cards
      }
    };

    // Set the initial value and add event listener
    updateVisibleCards();
    window.addEventListener("resize", updateVisibleCards);

    // Cleanup event listener on component unmount
    return () => window.removeEventListener("resize", updateVisibleCards);
  }, []);

  const handleNext = () => {
    if (currentIndex < resultsData.length - visibleCards) {
      setCurrentIndex(currentIndex + 1);
    }
  };

  const handlePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex(currentIndex - 1);
    }
  };

  const visibleData =
    activeTab === "RESULTS"
      ? resultsData.slice(currentIndex, currentIndex + visibleCards)
      : [];

  return (
    <div className="bg-primary text-white py-10">
      <SectionWrapper className="border-2 border-gray-400 p-0">
        {/* Title and Tabs */}
        <div className="flex justify-between items-center px-4 py-6 border-b-2 border-gray-400">
          <h2 className="text-2xl font-bold">SCHEDULE</h2>

          {/* Tabs */}
          <div className="flex">
            <h2
              onClick={() => setActiveTab("EVENTS")}
              className={`px-6 py-4 cursor-pointer font-semibold ${
                activeTab === "EVENTS"
                  ? "bg-transparent text-white border-r-2 border-gray-400"
                  : "bg-[#A2AAAD] text-primary"
              }`}
            >
              EVENTS
            </h2>
            <h2
              onClick={() => setActiveTab("RESULTS")}
              className={`px-6 py-4 cursor-pointer font-semibold ${
                activeTab === "RESULTS"
                  ? "bg-transparent text-white"
                  : "bg-[#A2AAAD] text-primary"
              }`}
            >
              RESULTS
            </h2>
          </div>
        </div>

        {/* Schedule Content */}
        <div className="p-4 relative border-t-2 border-primary bg-white">
          {/* If No Data */}
          {activeTab === "EVENTS" || visibleData.length === 0 ? (
            <div className="text-center py-20">
              <h2 className="text-lg font-semibold text-gray-800">
                No {activeTab === "EVENTS" ? "Events" : "Results"} to show
              </h2>
            </div>
          ) : (
            <div className="flex items-center">
              {/* Left Arrow */}
              <button
                onClick={handlePrev}
                className="text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                disabled={currentIndex === 0}
              >
                <AiOutlineLeft size={24} />
              </button>

              {/* Cards */}
              <div
                className={`flex-1 grid gap-4 px-4`}
                style={{
                  gridTemplateColumns: `repeat(${visibleCards}, minmax(0, 1fr))`,
                }}
              >
                {visibleData.map((result, index) => (
                  <div
                    key={result.id}
                    className={`relative flex flex-col ${
                      index < visibleData.length - 1
                        ? "md:border-r md:border-primary"
                        : ""
                    }`}
                  >
                    <ScheduleCard data={result} />
                  </div>
                ))}
              </div>

              {/* Right Arrow */}
              <button
                onClick={handleNext}
                className="text-gray-600 disabled:text-gray-400 disabled:cursor-not-allowed"
                disabled={currentIndex >= resultsData.length - visibleCards}
              >
                <AiOutlineRight size={24} />
              </button>
            </div>
          )}
        </div>
      </SectionWrapper>
    </div>
  );
}
