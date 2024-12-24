import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [role, setRole] = useState(() => {
    const storedRole = localStorage.getItem('role');
    try {
      return storedRole ? JSON.parse(storedRole) : [];
    } catch {
      return [];
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

  const [id, setId] = useState(() => {
    const storedId = localStorage.getItem('id');
    try {
      return storedId ? JSON.parse(storedId) : [];
    } catch {
      return [];
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

    if (id) {
      localStorage.setItem('id', JSON.stringify(id));
    } else {
      localStorage.removeItem('id');
    }
  }, [token, role, id]);

  const hasRole = (requiredRole) => {
    if (Array.isArray(role)) {
      return role.includes(requiredRole); // Check if the array contains the role
    }
    return role === requiredRole; // Fallback for string comparison
  };

  return (
    <TokenContext.Provider value={{ token, setToken, role, setRole, id, setId, hasRole }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};
