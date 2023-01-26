import React from "react";
import { createContext, useState } from "react";

const MenuContext = createContext();

function MenuProvider(props) {
  const [state, setState] = useState(false);

  const toogleMenu = () => {
    setState((prev) => !prev);
  };

  return (
    <div>
      <MenuContext.Provider value={{ state, toogleMenu }}>
        {props.children}
      </MenuContext.Provider>
    </div>
  );
}

export { MenuContext, MenuProvider };
