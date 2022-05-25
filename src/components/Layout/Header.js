import React, { useState } from "react";

const MobileMenu = () => {
  return (
    <div className="fixed mx-auto w-full top-12 bg-primary text-black md:hidden">
      <ul className="menu-list flex flex-col text-center items-stretch text-primaryText mb-2">
        <li className="menu-list-item p-2 mx-2 shadow-lg hover:bg-primaryDark cursor-pointer border-collapse my-1">
          <a href="">Home</a>
        </li>
        <li className="menu-list-item p-2 mx-2 shadow-lg hover:bg-primaryDark cursor-pointer border-collapse my-1">
          <a href="">Get Recipe</a>
        </li>
        <li className="menu-list-item p-2 mx-2 shadow-lg hover:bg-primaryDark cursor-pointer border-collapse my-1">
          <a href="">Fun Facts</a>
        </li>
      </ul>
    </div>
  );
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // show hide mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className="fixed w-full bg-primary text-primaryText z-50">
      <div className="container h-12 mx-auto flex items-center justify-between ">
        <div className="brand-logo font-bold text-2xl px-3">Let's Cook</div>

        <ul className="hidden menu-list sm:flex px-3">
          <li className="menu-list-item  ">
            <a href="" className="hover:border-b-4 px-4 py-2 ">
              Home
            </a>
          </li>
          <li className="menu-list-item  ">
            <a href="" className="hover:border-b-4 px-4 py-2 ">
              Get Recipe
            </a>
          </li>
          <li className="menu-list-item   ">
            <a href="" className="hover:border-b-4 px-4 py-2 ">
              Fun Facts
            </a>
          </li>
        </ul>

        {/* toggle button */}
        <button onClick={toggleMobileMenu} className="sm:hidden px-3">
          {showMobileMenu ? "Close" : "Menu"}
        </button>
        {showMobileMenu ? MobileMenu() : ""}
      </div>
    </div>
  );
};

export default Header;
