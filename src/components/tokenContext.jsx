import React, { createContext, useContext, useState } from 'react';

// Create the User Context
const TokenContext = createContext();

// UserProvider component to wrap your app and provide user data
export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(null); 

  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

// Custom hook to use the UserContext
export const useToken = () => {
  return useContext(TokenContext);
};