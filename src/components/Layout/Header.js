import React from "react";

const Header = () => {
  return (
    <div className="fixed w-full bg-teal-700 text-white">
      <div className="container mx-auto flex items-center justify-between py-3">
        <div className="brand-logo font-bold text-2xl">Let's Cook</div>
        <ul className="menu-list flex">
          <li className="menu-list-item px-4">
            <a href="">Home</a>
          </li>
          <li className="menu-list-item px-4">
            <a href="">Get Recipe</a>
          </li>
          <li className="menu-list-item px-4">
            <a href="">Fun Facts</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
