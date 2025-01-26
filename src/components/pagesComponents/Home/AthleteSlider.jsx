import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import { IoIosArrowDropleft, IoIosArrowDropright } from "react-icons/io";
import leftImage from "../../../assets/images/roster/left.png";
import athleteImage2 from "../../../assets/images/roster/Thomas.jpg";
import athleteImage1 from "../../../assets/images/roster/TJ_Succop.jpg";

const athletes = [
  {
    name: "Kallie Smith",
    sport: "Swimming",
    leftImage: leftImage,
    rightImage: athleteImage2,
  },
  {
    name: "John Doe",
    sport: "Basketball",
    leftImage: leftImage,
    rightImage: athleteImage1,
  },
];

const AthleteSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % athletes.length);
    }, 4000); // Change images every 4 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="lg:px-8 px-3 bg-primary h-[400px] w-full flex items-center justify-between border-t-4 border-b-4 border-gray-400 relative">
      {/* Left Image Section (Hidden on Small Screens) */}
      <div className="hidden lg:flex h-full w-[15%] items-center justify-center border-r-4 border-gray-400">
        <div className="h-[80%] w-[80%] flex items-center justify-center border-4 border-gray-400">
          <img
            src={athletes[currentIndex].leftImage}
            alt="Left Logo"
            className="h-full w-full object-contain"
          />
        </div>
      </div>

      {/* Middle Content Section */}
      <div className="h-full w-6/12 lg:w-[70%] flex flex-col justify-center items-start px-8 border-l-0 lg:border-l-2 border-r-2 border-gray-400">
        <h2 className="text-sm font-semibold text-white tracking-wide uppercase">
          Athletes of the Week
        </h2>
        <h1 className="lg:text-5xl text-2xl font-bold text-white mt-2">
          {athletes[currentIndex].name} - {athletes[currentIndex].sport}
        </h1>
        <div className="flex gap-4 mt-6">
          <button
            className="w-8 h-8 bg-white text-primary font-bold rounded-full flex items-center justify-center"
            onClick={() =>
              setCurrentIndex((prevIndex) =>
                prevIndex === 0 ? athletes.length - 1 : prevIndex - 1
              )
            }
          >
            <IoIosArrowDropleft size={28} />
          </button>
          <button
            className="w-8 h-8 bg-white text-primary font-bold rounded-full flex items-center justify-center"
            onClick={() =>
              setCurrentIndex((prevIndex) => (prevIndex + 1) % athletes.length)
            }
          >
            <IoIosArrowDropright size={28} />
          </button>
        </div>
      </div>

      {/* Right Image Section */}
      <div className="h-full lg:w-[15%] w-6/12 flex items-center justify-center border-l-4 border-gray-400">
        <div className="h-full w-full flex items-center justify-center border-4 border-gray-400">
          <AnimatePresence mode="wait">
            <motion.img
              key={athletes[currentIndex].rightImage}
              src={athletes[currentIndex].rightImage}
              alt="Athlete"
              className="h-full w-full object-cover"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            />
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
};

export default AthleteSlider;
