import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const MobileMenu = ({ showMobileMenu, toggleMobileMenu }) => {
  const toggleMenu = () => {
    console.log(toggleMobileMenu);
    console.log(showMobileMenu);
    toggleMobileMenu();
  };
  return (
    <>
      {!showMobileMenu && (
        <div className="fixed mx-auto w-full top-12 left-0 bg-primary text-black xl:hidden">
          <ul className="menu-list flex flex-col text-center items-stretch text-primaryWhiteText mb-2">
            <NavLink
              onClick={toggleMenu}
              className={(nav) =>
                nav.isActive ? " hover:bg-primaryDark " : ""
              }
              to="/home"
            >
              {" "}
              <li className="menu-list-item p-2 mx-2 shadow-lg hover:bg-primaryDark cursor-pointer border-collapse my-1">
                Home{" "}
              </li>
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              className={(nav) =>
                nav.isActive ? " hover:bg-primaryDark " : ""
              }
              to="/get-recipe"
            >
              <li className="menu-list-item p-2 mx-2 shadow-lg hover:bg-primaryDark cursor-pointer border-collapse my-1">
                Get Recipe
              </li>
            </NavLink>

            <NavLink
              onClick={toggleMenu}
              className={(nav) =>
                nav.isActive ? " hover:bg-primaryDark " : ""
              }
              to="/fun-facts"
            >
              <li className="menu-list-item p-2 mx-2 shadow-lg hover:bg-primaryDark cursor-pointer border-collapse my-1">
                Fun Facts
              </li>
            </NavLink>
          </ul>
        </div>
      )}
    </>
  );
};

const Header = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);

  // show hide mobile menu
  const toggleMobileMenu = () => {
    setShowMobileMenu((prev) => !prev);
  };

  return (
    <div className="fixed w-full bg-primary text-primaryWhiteText z-50">
      <nav className="container h-12 mx-auto flex items-center justify-between ">
        <div className="brand-logo font-bold text-2xl px-3">
          <Link to="/">Let's Cook</Link>
        </div>

        <ul className="hidden menu-list lg:flex px-3">
          <li className="menu-list-item   transition-transform px-4 hover:scale-95">
            <NavLink
              className={(nav) => (nav.isActive ? " border-b-4 pb-2 " : "")}
              to="/home"
            >
              <span className="text-lg px-4 ">Home</span>
            </NavLink>
          </li>
          <li className="menu-list-item transition-transform px-4 hover:scale-95 ">
            <NavLink
              className={(nav) => (nav.isActive ? " border-b-4 pb-2 " : "")}
              to="/get-recipe"
            >
              <span className="text-lg px-4 ">Get Recipe</span>
            </NavLink>
          </li>
          <li className="menu-list-item  hover:scale-95 transition-transform px-4">
            <NavLink
              className={(nav) => (nav.isActive ? " border-b-4 pb-2 " : "")}
              to="/fun-facts"
            >
              <span className="text-lg px-4">Fun Facts</span>
            </NavLink>
          </li>
        </ul>

        {/* toggle button */}
        <button onClick={toggleMobileMenu} className="lg:hidden px-3">
          {showMobileMenu ? "Close" : "Menu"}
        </button>
        {showMobileMenu ? MobileMenu(showMobileMenu, toggleMobileMenu) : ""}
      </nav>
    </div>
  );
};

export default Header;
