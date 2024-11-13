import React, { createContext, useContext, useState, useEffect } from 'react';

const TokenContext = createContext();

export const TokenProvider = ({ children }) => {
  const [token, setToken] = useState(()=>{
    const storedToken = localStorage.getItem('jwtToken');
    try{
      return storedToken ? JSON.parse(storedToken) :  null;
    }catch{
      return null;
    }
    
  }); 

  useEffect(()=>{
    if(token){
        localStorage.setItem('jwtToken',JSON.stringify(token));
    }else{
      localStorage.removeItem('jwtToken');
    }
  },[token]);
  
  return (
    <TokenContext.Provider value={{ token, setToken }}>
      {children}
    </TokenContext.Provider>
  );
};

export const useToken = () => {
  return useContext(TokenContext);
};