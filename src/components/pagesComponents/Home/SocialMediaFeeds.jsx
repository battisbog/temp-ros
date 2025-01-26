/* eslint-disable react/no-unknown-property */
import SectionWrapper from "@/components/common/wrapper/SectionWrapper";
import { FaInstagram } from "react-icons/fa";
import { RiFacebookFill } from "react-icons/ri";
export default function SocialMediaFeeds() {
  return (
    <div className="bg-primary py-10 text-white">
      <SectionWrapper className=" grid grid-cols-1 md:grid-cols-2 gap-6  p-6">
        {/* Instagram Section */}
        <div className="max-w-5xl ">
          {/* Title */}
          <div className="flex justify-between items-center border-2 border-gray-400 mb-3 px-3">
            <h2 className="text-lg font-bold bg-primary text-white  px-4 py-2 flex items-center gap-2">
              INSTAGRAM
            </h2>
            <span className="text-2xl">
              <FaInstagram />
            </span>
          </div>
          {/* Iframe Content */}
          <div className="relative bg-white p-4">
            <iframe
              src="https://www.instagram.com/p/Czfg1Wsptj6/embed"
              className="w-full h-[450px] border-none"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block mt-4 bg-blue-500 text-white font-bold text-center py-2 rounded hover:bg-blue-600 transition-colors"
            >
              View full profile on Instagram
            </a>
          </div>
        </div>

        {/* Facebook Section */}
        <div className="">
          {/* Title */}
          <div className="flex justify-between items-center mb-3 px-3 border-2 border-gray-400">
            <h2 className="text-lg font-bold bg-primary text-white px-4 py-2 flex items-center gap-2">
              FACEBOOK
            </h2>
            <span className="text-2xl">
              <RiFacebookFill />
            </span>{" "}
          </div>
          {/* Iframe Content */}
          <div className="relative bg-white p-4">
            <iframe
              src="https://www.facebook.com/plugins/post.php?href=https%3A%2F%2Fwww.facebook.com%2FBehrendMSoc%2Fposts%2F1234567890&show_text=true&width=500"
              className="w-full h-[450px] border-none"
              scrolling="no"
              allowTransparency="true"
              allow="encrypted-media"
            ></iframe>
          </div>
        </div>
      </SectionWrapper>
    </div>
  );
}
