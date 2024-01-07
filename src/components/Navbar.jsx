import React, { useState } from "react";

import appleLogo from "../images/apple-white.png";
import searchIcon from "../images/search.png";
import bagIcon from "../images/bag.png";

import Store from "./items/Store";
import Mac from "./items/Mac";
import IPad from "./items/iPad";
import IPhone from "./items/iPhone";
import Watch from "./items/Watch";

const Navbar = () => {
  const [isHovered, setHovered] = useState(false);
  const [isSearch, setSearch] = useState(false);

  const searchClicked = () => {
    setSearch(!isSearch);
    setHovered(!isHovered);
  };

  const searchRemove = () => {
    setSearch(false);
    setHovered(false);
  };

  const handleHover = () => {
    setHovered(true);
  };

  const handleLeave = () => {
    setHovered(false);
  };

  return (
    <nav
      className={`navbar fixed w-full top-0 p-4 z-50 ${
        isHovered ? "hovered" : ""
      }`}
    >
      <div className="container mx-auto z-10 w-[1100px]">
        <div className="flex items-center justify-center">
          <div className="flex space-x-10 text-xs">
            <a href="/" className="text-white">
              <img src={appleLogo} alt="Logo" className="h-4 w-4" />
            </a>
            <div
              className="group static"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <a href="#" className="text-white group-hover:text-gray-300">
                Store
              </a>
              <Store></Store>
            </div>
            <div
              className="group static"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <a href="#" className="text-white group-hover:text-gray-300">
                Mac
              </a>
              <Mac></Mac>
            </div>
            <div
              className="group static"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <a href="#" className="text-white group-hover:text-gray-300">
                iPad
              </a>
              <IPad></IPad>
            </div>
            <div
              className="group static"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <a href="#" className="text-white group-hover:text-gray-300">
                iPhone
              </a>
              <IPhone></IPhone>
            </div>
            <div
              className="group static"
              onMouseEnter={handleHover}
              onMouseLeave={handleLeave}
            >
              <a href="#" className="text-white group-hover:text-gray-300">
                Watch
              </a>
              <Watch></Watch>
            </div>
            <a href="#" className="text-white">
              Vision
            </a>
            <a href="#" className="text-white">
              AirPods
            </a>
            <a href="#" className="text-white">
              TV & Home
            </a>
            <a href="#" className="text-white">
              Entertainment
            </a>
            <a href="#" className="text-white">
              Accesories
            </a>
            <a href="#" className="text-white">
              Support
            </a>
            <div className="group static">
              <button onClick={searchClicked}>
                <img src={searchIcon} alt="search" className="h-4 w-4" />
              </button>
              <div
                className={`absolute w-screen h-auto left-0 dropdown-bg ${
                  isSearch ? "block" : "hidden"
                }`}
                tabIndex="0"
                onBlur={searchRemove}
              >
                <div className="container mx-auto z-10 w-[1100px] text-white p-8 pb-16">
                  <div className="flex justify-start items-start">
                    <div className="flex flex-col items-start justify-center text-2xl font-bold">
                      <p className="text-gray-300 py-4 text-xs font-normal">
                        Shop
                      </p>
                      <a href="#" className="pb-2">
                        Shop the Latest
                      </a>
                      <a href="#" className="pb-2">
                        Mac
                      </a>
                      <a href="#" className="pb-2">
                        iPad
                      </a>
                      <a href="#" className="pb-2">
                        iPhone
                      </a>
                      <a href="#" className="pb-2">
                        Apple Watch
                      </a>
                      <a href="#">Accessories</a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <a href="#" className="text-white">
              <img src={bagIcon} alt="bag" className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
