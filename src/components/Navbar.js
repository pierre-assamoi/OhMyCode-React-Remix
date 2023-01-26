import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function Navbar() {
  const { state, toogleMenu } = useContext(MenuContext);

  const toMenu = () => {
    toogleMenu();
    console.log(state);
  };
  return (
    <div className={state ? "navUp" : "navDown"}>
      <div className="space-x-6 text-lg py-6">
        <a href="#">Accueil</a>
        <a href="#">Service</a>
        <a href="#">A propos</a>
        <a href="#">Blog</a>
        <a href="#">Contact</a>
      </div>
      <div className="flex items-center" onClick={toMenu}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-8 h-8"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
      </div>
    </div>
  );
}

export default Navbar;
