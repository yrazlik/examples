import React, { createContext, useState } from "react";

// Create a UserContext
export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);

  //The Provider component takes a value prop, which represents the data you want to make available to the context consumers.
  //Any component inside the Provider can access this value using useContext.
  return (
    <UserContext.Provider value={{ isLoggedIn, login, logout }}>
      {children}
    </UserContext.Provider>
  );
};
