import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { useState } from "react";

import nikeimg from "../../../assets/images/news/Nike.png";
import NewsDetailsModal from "./NewsDetailsModal";

import newsData from "../../../assets/news_nittany.json";
export default function NewsSection() {
  const [selectedNews, setSelectedNews] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = (news) => {
    setSelectedNews(news);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedNews(null);
    setIsModalOpen(false);
  };

  return (
    <div className="bg-primary text-white py-10">
      <SectionWrapper className="border-2 border-gray-400 p-0">
        {/* Title */}
        <div className="px-4 py-6 flex justify-between items-center border-b-2 border-gray-400">
          <h2 className="text-2xl font-bold">MORE NEWS</h2>
          <img className="w-28 h-10" src={nikeimg} alt="nike" />
        </div>

        {/* News Grid */}
        <div className="px-4 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData?.map((news) => (
            <div
              key={news.id}
              className="border border-white overflow-hidden bg-white text-primary"
            >
              <img
                src={news.image}
                alt={news.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-sm text-gray-500">
                  {news.date} | {news.category}
                </p>
                {/* News Title as a trigger */}
                <h3
                  className="text-lg font-bold mt-2 cursor-pointer hover:underline"
                  onClick={() => openModal(news)}
                >
                  {news.title}
                </h3>
                <p className="text-sm mt-2">{news.text.substring(0, 100)}...</p>{" "}
                <div className="mt-4 space-x-4 text-sm font-medium text-primary">
                  {/* Recap Link */}
                  <a href="/recap" className="hover:underline">
                    Recap
                  </a>

                  {/* Box Score Link */}
                  <a href="/box-score" className="hover:underline">
                    Box Score
                  </a>

                  {/* Preview Link as a button to open modal */}
                  <span
                    className="hover:underline cursor-pointer"
                    onClick={() => openModal(news)}
                  >
                    Preview
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Use the extracted NewsModal component */}
        <NewsDetailsModal
          isOpen={isModalOpen}
          onClose={closeModal}
          selectedNews={selectedNews}
        />

        {/* View All Button */}
        <div className="text-center bg-transparent text-white hover:bg-gray-200 hover:text-primary transition-colors w-full mt-7 py-8 border-t-2 border-gray-400">
          <a href="#" className="block text-2xl font-bold w-full rounded-md">
            VIEW ALL
          </a>
        </div>
      </SectionWrapper>
    </div>
  );
}
