import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import bgImage1 from "../../../assets/images/newsletter/Newsletter.jpg";
import {
  default as bgImage2,
  default as bgImage3,
} from "../../../assets/images/newsletter/givingday.jpg";

const recruitsData = [
  {
    id: 1,
    image: bgImage1,
    title: "Nittany lions",
    description: "Join our team and be part of something great!",
  },
  {
    id: 2,
    image: bgImage2,
    title: "PLAYERS",
    description: "Build your legacy and become a champion!",
  },
  {
    id: 3,
    image: bgImage3,
    title: "TEAMWORK",
    description: "Together, we achieve more. Join the family!",
  },
];

export default function RecruitsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === recruitsData.length - 1 ? 0 : prevIndex + 1
    );
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? recruitsData.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="bg-primary py-10">
      <SectionWrapper className="relative w-full h-[400px] flex items-center justify-center">
        {/* Background Image with Overlay */}
        <div
          className="absolute inset-0 bg-cover bg-center transition-all duration-700"
          style={{
            backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5)), url(${recruitsData[currentIndex].image})`,
            filter: "brightness(0.8)", // Optional to slightly darken the image
          }}
        ></div>

        {/* Centered Text with Border */}
        <div className="relative z-10 text-center">
          <h1
            className="text-primary text-4xl font-bold border-4 border-primary px-12 py-4 transition-all duration-700"
            key={recruitsData[currentIndex].title} // Ensures smooth text change
          >
            {recruitsData[currentIndex].title}
          </h1>
          <p
            className="text-primary mt-4 text-lg transition-opacity duration-700"
            key={recruitsData[currentIndex].description} // Ensures smooth text change
          >
            {recruitsData[currentIndex].description}
          </p>
        </div>

        {/* Navigation Icons */}
        <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex items-center gap-4 z-10">
          <button
            onClick={handlePrev}
            className="text-primary hover:text-gray-300 transition-colors"
          >
            <AiOutlineLeft size={24} />
          </button>
          <button
            onClick={handleNext}
            className="text-primary hover:text-gray-300 transition-colors"
          >
            <AiOutlineRight size={24} />
          </button>
        </div>
      </SectionWrapper>
    </div>
  );
}
