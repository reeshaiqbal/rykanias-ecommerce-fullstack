import { MapPin } from "lucide-react";
import { FaCaretDown } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { ShopContext } from "../context/ShopContext";

const Navbar = () => {
  const { isLoggedIn, logout } = useContext(ShopContext);
  const location = false;
  return (
    <div className="bg-white py-3 shadow-2xl">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        {/* logo section */}
        <div className="flex gap-7 items-center">
          <Link to={"/"}>
            <h1 className="font-bold text-3xl">
              <span className="text-red-500 font-serif">R</span>ykanias
            </h1>
          </Link>
          {/* location */}
          <div className="flex gap-1 cursor-pointer text-gray-700 items-center">
            <MapPin className="text-red-500" />
            <span className="font-semibold">
              {location ? <div></div> : "Add Address"}
            </span>
            <FaCaretDown />
          </div>
        </div>
        {/* menu section */}
        <nav className="flex gap-7 items-center">
          <ul className="flex gap-7 items-center text-xl font-semibold">
            <NavLink
              to={"/"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Home
            </NavLink>
            <NavLink
              to={"/products"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Products
            </NavLink>
            <NavLink
              to={"/about"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              About
            </NavLink>
            <NavLink
              to={"/contact"}
              className={({ isActive }) =>
                isActive
                  ? "border-b-3 transition-all border-red-500 cursor-pointer"
                  : "cursor-pointer"
              }
            >
              Contact
            </NavLink>
          </ul>
          {/* cart logic */}
          <Link to={"/cart"} className="relative">
            <IoCartOutline className="h-7 w-7" />
            <span className="bg-red-500 px-2 rounded-full absolute -top-3 -right-3 text-white">
              0
            </span>
          </Link>

          {/* login/logout button */}
          {isLoggedIn ? (
            <button
              className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer"
              onClick={logout}
            >
              Logout
            </button>
          ) : (
            <Link to="/auth">
              <button className="bg-red-500 text-white px-3 py-1 rounded-md cursor-pointer">
                Login
              </button>
            </Link>
          )}
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
