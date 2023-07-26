import React from "react";
import { NavLink } from "react-router-dom";

function NavBar() {
  return (
    <div>
      <NavLink
        to="/"
        activeStyle={{
          background: "darkblue",
        }}
      >
        Home
      </NavLink>
      <NavLink
        to="/Movies"
        exact
      
        activeStyle={{
          background: "royalblue",
        }}
      >
      Movies
      </NavLink>
      <NavLink
        to="/Directors"
        exact
        activeStyle={{
          background: "darkblue",
        }}
        >
       Directors
      </NavLink>
    </div>
  );
}
export default NavBar;


