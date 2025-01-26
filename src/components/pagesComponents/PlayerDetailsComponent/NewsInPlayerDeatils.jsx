import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import image1 from "../../../assets/images/news/GT8A0392.jpeg";
import image2 from "../../../assets/images/news/GT8A2065.jpeg";
import image3 from "../../../assets/images/news/GT8A2360.jpeg";
import image4 from "../../../assets/images/news/GT8A2916.jpeg";
import image5 from "../../../assets/images/news/GT8A4931.jpeg";
import image6 from "../../../assets/images/news/GT8A9049.jpeg";
const newsData = [
  {
    id: 1,
    date: "Nov. 08",
    category: "Men's Soccer",
    title: "#2 Behrend Men's Soccer Plays #1 Alfred State for AMCC Title",
    description: "No. 2 Penn State Behrend travels to No. 1 Alfred State...",
    links: [
      { label: "Recap", url: "/recap" },
      { label: "Box Score", url: "/box-score" },
      { label: "Preview", url: "/preview" },
    ],
    image: image1, // Replace with actual image paths
  },
  {
    id: 2,
    date: "Nov. 06",
    category: "Men's Soccer",
    title: "Swann's Game-Winner Sends Behrend to AMCC Championship Game",
    description: "Senior Johnathan Swann (Allison Park, PA/North...",
    links: [
      { label: "Recap", url: "/recap" },
      { label: "Box Score", url: "/box-score" },
      { label: "Preview", url: "/preview" },
    ],
    image: image2,
  },
  {
    id: 3,
    date: "Nov. 05",
    category: "Men's Soccer",
    title: "#2 Behrend, #3 Mount Aloysius Meet In AMCC Men's Soccer Semifinals",
    description: "No. 2 Penn State Behrend hosts No. 3 Mount Aloysius...",
    links: [
      { label: "Recap", url: "/recap" },
      { label: "Box Score", url: "/box-score" },
      { label: "Preview", url: "/preview" },
    ],
    image: image3,
  },
  {
    id: 4,
    date: "Oct. 29",
    category: "Men's Soccer",
    title:
      "Lions Rout Hilbert in Regular Season Finale; Named Co-Regular Season Champions",
    description: "The Penn State Behrend men's soccer team earned...",
    links: [
      { label: "Recap", url: "/recap" },
      { label: "Box Score", url: "/box-score" },
      { label: "Preview", url: "/preview" },
    ],
    image: image4,
  },
  {
    id: 5,
    date: "Oct. 28",
    category: "Men's Soccer",
    title: "Men's Soccer Finishes Up Regular Season vs. Hilbert at Home",
    description: "The Penn State Behrend men's soccer team...",
    links: [
      { label: "Recap", url: "/recap" },
      { label: "Box Score", url: "/box-score" },
      { label: "Preview", url: "/preview" },
    ],
    image: image5,
  },
  {
    id: 6,
    date: "Oct. 26",
    category: "Men's Soccer",
    title: "Behrend Too Much for Carlow on Senior Day",
    description: "The Penn State Behrend men's soccer team picked...",
    links: [
      { label: "Recap", url: "/recap" },
      { label: "Box Score", url: "/box-score" },
      { label: "Preview", url: "/preview" },
    ],
    image: image6,
  },
];

export default function NewsInPlayerDeatils() {
  return (
    <div className=" py-10">
      <SectionWrapper className="p-0">
        {/* News Grid */}
        <div className="px-4 pt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {newsData.map((news) => (
            <div
              key={news.id}
              className="border border-gray-200  overflow-hidden bg-white text-primary"
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
                <h3 className="text-lg font-bold mt-2">{news.title}</h3>
                <p className="text-sm mt-2">{news.description}</p>
                <div className="mt-4 space-x-4 text-sm font-medium text-primary">
                  {news.links.map((link, index) => (
                    <a key={index} href={link.url} className="hover:underline">
                      {link.label}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </SectionWrapper>
    </div>
  );
}
