import { createContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import React from "react";

export const ShopContext = createContext();

const ShopContextProvider = (props) => {
  const navigate = useNavigate();

  // ✅ Login state
  const [isLoggedIn, setIsLoggedIn] = useState(false); //State to check weather user is logged in or not

  const login = () => setIsLoggedIn(true);

  const logout = () => {
    setIsLoggedIn(false);
    navigate("/auth");
  };

  // ✅ DEFINE VALUE OBJECT HERE
  const value = {
    isLoggedIn,
    login,
    logout,
  };

  return (
    <ShopContext.Provider value={value}>{props.children}</ShopContext.Provider>
  );
};

export default ShopContextProvider;
