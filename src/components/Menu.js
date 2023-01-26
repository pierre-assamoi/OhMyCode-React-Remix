import React, { useContext } from "react";
import { MenuContext } from "../context/MenuContext";

function Menu() {
  const { state, toogleMenu } = useContext(MenuContext);
  const yo = "yo";
  const toMenu = () => {
    toogleMenu();
  };
  return (
    <>
      <div className={state ? "menuDown" : "menuUp"}>
        <div className="flex flex-col text-6xl space-y-8 justify-center items-center pt-28">
          <p>Accueil</p>
          <p>Service</p>
          <p>A propos</p>
          <p>Blog</p>
          <p>Contact</p>
        </div>
        <div className="flex justify-center mt-8" onClick={toMenu}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-20 h-20"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 12.75l7.5-7.5 7.5 7.5m-15 6l7.5-7.5 7.5 7.5"
            />
          </svg>
        </div>
      </div>
    </>
  );
}

export default Menu;
