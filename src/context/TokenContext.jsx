import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    const storedRole = localStorage.getItem('role');
    try {
      return storedRole ? JSON.parse(storedRole) : null;
    } catch {
      return null;
    }
  });
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem('jwtToken');
    try {
      return storedToken ? JSON.parse(storedToken) : null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (token) {
      localStorage.setItem('jwtToken', JSON.stringify(token));
    } else {
      localStorage.removeItem('jwtToken');
    }

    if (role) {
      localStorage.setItem('role', JSON.stringify(role));
    } else {
      localStorage.removeItem('role');
    }
  }, [token, role]);

  return <TokenContext.Provider value={{ token, setToken, role, setRole }}>{children}</TokenContext.Provider>;
};

export const useToken = () => {
  return useContext(TokenContext);
};
