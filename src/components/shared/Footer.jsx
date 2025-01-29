import logo2 from "../../assets/images/logo/NCAA_logo.png";
import logo from "../../assets/images/logo/image.png";
import logo3 from "../../assets/images/logo/logo3.png";

export default function Footer() {
  return (
    <footer className="bg-primary pt-10 text-white">
      {/* Top Section */}
      <div className="grid lg:grid-cols-12 md:grid-cols-12 grid-cols-1 md:border-t border-white">
        {/* Left Section */}
        <div className="lg:col-span-5 md:col-span-4 flex lg:flex-row flex-col gap-10 p-6 md:border-r md:border-white">
          <img
            src={logo}
            alt="Penn State Nittany Lions"
            className="w-28 h-24"
          />
          <div className="flex flex-col items-center justify-center ">
            <h3 className="text-sm leading-relaxed">
              201 Old Main, University Park, PA 16802 <br />
              (814) 865-4700
            </h3>
            {/* <div className="flex space-x-4 mt-2">
              <a
                href="#"
                aria-label="Facebook"
                className="text-white hover:text-gray-300"
              >
                <RiFacebookFill size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-white hover:text-gray-300"
              >
                <RiTwitterXFill size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-white hover:text-gray-300"
              >
                <FaInstagram size={20} />
              </a>
            </div> */}
          </div>
        </div>

        {/* Middle Section */}
        <div className="lg:col-span-2 md:col-span-4 flex flex-col justify-start items-start p-6 md:border-l md:border-r md:border-white text-sm">
          <a href="#" className="hover:underline">
            Home Page
          </a>
          <a href="#" className="hover:underline">
            Day of Giving
          </a>
          <a href="#" className="hover:underline">
            Donate
          </a>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-5 md:col-span-4 flex lg:flex-row flex-col lg:items-center items-start lg:justify-center justify-start gap-5 p-6 md:border-l md:border-white">
          <div className="flex items-center space-x-4">
            <img src={logo2} alt="AMCC Logo" className="w-16 h-16" />
            <img src={logo3} alt="NCAA Logo" className="w-16 h-16" />
          </div>
          {/* <h3 className="text-sm uppercase tracking-wide">
            Powered by PrestoSports
          </h3> */}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="bg-white text-primary py-4 text-center text-sm border-t border-primary">
        © 2025 Penn State Nittany Lions. All rights reserved.{" "}
        <a href="#" className="hover:underline">
          Privacy Policy
        </a>{" "}
        |{" "}
        <a href="#" className="hover:underline">
          Terms of Use
        </a>
      </div>
    </footer>
  );
}
