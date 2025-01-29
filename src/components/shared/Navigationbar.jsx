import { useState } from "react";
import { IoMdClose, IoMdMenu } from "react-icons/io";
import logo from "../../assets/images/logo/image.png";
import SectionWrapper from "../common/wrapper/SectionWrapper";
import MobileNavbar from "./MobileNavbar";
const Navigationbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState("Home");

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const menuItems = [
    { name: "Home", url: "/" },
    { name: "Roster", url: "/roster" },
    { name: "Questionnaire", url: "/question-form" },
    { name: "History", url: "/history" },
  ];

  const handleMenuClick = (name) => {
    setSelectedItem(name);
  };

  return (
    <div>
      <div className="bg-primary">
        <h2
          className="text-white py-4 font-bold text-2xl uppercase text-center"
          style={{ fontFamily: 'Roboto, sans-serif' }}
        >
            Penn State Nittany Lions{" "}
        </h2>
      </div>

      {/* Mobile Navigation Toggle */}
      <div className="lg:hidden flex justify-between items-center py-4 px-4 bg-primary">
        <div>
          <img
            src={logo}
            alt="Penn State Nittany Lions"
            className="w-40 h-16"
          />{" "}
        </div>
        <button
          onClick={toggleMobileMenu}
          className="text-white font-medium text-2xl"
          aria-label="Toggle Menu"
        >
          {isMobileMenuOpen ? <IoMdClose size={24} /> : <IoMdMenu size={24} />}
        </button>
      </div>

      {/* Desktop Navigation */}
      <div className="hidden lg:block">
        <SectionWrapper>
          <nav className="flex items-center py-4 px-8">
            {/* Logo/Text */}
            <div className="mr-auto">
              <div>
                <img
                  src={logo}
                  alt="Penn State Nittany Lions"
                  className="w-28 h-16"
                />{" "}
              </div>
            </div>

            {/* Navigation Menu */}
            <ul className="flex text-primary font-bold text-lg space-x-8">
              {menuItems.map((item) => (
                <li
                  key={item.name}
                  onClick={() => handleMenuClick(item.name)}
                  className={`cursor-pointer ${
                    selectedItem === item.name
                      ? "bg-primary text-white"
                      : "hover:bg-gray-200 hover:text-black"
                  }`}
                >
                  <a
                    href={item.url}
                    className={`block px-6 py-2 ${
                      selectedItem === item.name ? "w-full" : ""
                    }`}
                  >
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </SectionWrapper>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && <MobileNavbar menuItems={menuItems} />}
    </div>
  );
};

export default Navigationbar;
