import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState } from "react";
import banner1 from "../../../assets/images/banner/banner1.jpg";
import banner2 from "../../../assets/images/banner/banner2.jpg";
import banner3 from "../../../assets/images/banner/banner3.jpg";
import banner4 from "../../../assets/images/banner/banner4.jpeg";

const images = [
  {
    id: 1,
    src: banner1,
    title:
      "Men's Soccer Season Ends In Overtime of NCAA First Round at No. 15 Johns Hopkins",
    description:
      "The first round of the NCAA Division III Men's Soccer Tournament went to extra time with Penn State Behrend falling to No. 15 Johns Hopkins 1-0 in overtime.",
  },
  {
    id: 2,
    src: banner2,
    title: "Andrew Cassano Scores in Final Seconds",
    description:
      "Andrew Cassano scored in the final seconds of the game to secure a thrilling victory for Penn State Behrend.",
  },
  {
    id: 3,
    src: banner3,
    title: "Behrend Lions Advance to Playoffs",
    description:
      "The Behrend Lions advance to the playoffs after an outstanding performance in the final league match.",
  },
  {
    id: 4,
    src: banner4,
    title: "Championship Dreams Continue",
    description:
      "With a solid defense and offense, the Penn State Behrend Lions continue their championship dreams.",
    links: [
      { label: "Live Stats", url: "/live-stats" },
      { label: "Recap", url: "/recap" },
      { label: "Box Score", url: "/box-score" },
      { label: "Preview", url: "/preview" },
    ],
  },
];

export default function Banner() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatic image change every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  const handleThumbnailClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="bg-primary w-full min-h-screen">
      {/* Banner Section */}
      <SectionWrapper className="relative w-full overflow-hidden">
        <div className="relative w-full h-[700px]">
          <AnimatePresence exitBeforeEnter>
            <motion.img
              key={images[currentIndex].id}
              src={images[currentIndex].src}
              alt={images[currentIndex].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ opacity: 0, scale: 1.1 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          </AnimatePresence>

          {/* Gradient Overlay */}
          <div className="absolute bottom-0 w-full h-[50%] bg-gradient-to-t from-gray-700 via-gray-700/30 to-transparent"></div>

          {/* Banner Text */}
          <div className="absolute bottom-0 w-full p-6 text-center">
            <h2 className="text-3xl font-bold text-white">
              {images[currentIndex].title}
            </h2>
            <p className="text-white mt-2 text-base">
              {images[currentIndex].description}
            </p>

            {/* Conditional Links for the 4th Image */}
            {images[currentIndex].id === 4 && (
              <div className="mt-4 flex justify-center space-x-6">
                {images[currentIndex].links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-white text-base font-medium hover:underline"
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </SectionWrapper>

      {/* Thumbnail Section */}
      <SectionWrapper className="lg:flex hidden justify-center space-x-4 mt-4">
        {images.map((image, index) => (
          <motion.div
            key={image.id}
            onClick={() => handleThumbnailClick(index)}
            className={`cursor-pointer border-4 rounded-md ${
              currentIndex === index ? "border-white" : "border-transparent"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <img
              src={image.src}
              alt={`Thumbnail ${index + 1}`}
              className={`w-40 h-32 object-cover rounded-md transition-opacity duration-300 ${
                currentIndex === index
                  ? "opacity-100"
                  : "opacity-50 hover:opacity-100"
              }`}
            />
          </motion.div>
        ))}
      </SectionWrapper>
    </div>
  );
}
