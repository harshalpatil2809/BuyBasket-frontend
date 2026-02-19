import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed w-full py-3 flex justify-around items-center ">
      <div>Logo</div>
      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Home
        </NavLink>

        <NavLink
          to={"about"}
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          About
        </NavLink>

        <NavLink
          to={"contact"}
          className={({ isActive }) =>
            isActive ? "text-red-500" : "text-black"
          }
        >
          Contact
        </NavLink>
      </div>
      <div></div>
    </div>
  );
};

export default Navbar;
