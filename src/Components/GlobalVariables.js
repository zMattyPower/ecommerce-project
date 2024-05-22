import React, { createContext, useContext, useState } from 'react';

const LoginContext = createContext();

export const useLoginContext = () => useContext(LoginContext);

const LoginContextProvider = ({ children }) => {
  const [useLogin, setUseLogin] = useState(false); // Initialize with your desired value

  return (
    <LoginContext.Provider value={{ useLogin, setUseLogin }}>
      {children}
    </LoginContext.Provider>
  );
};

export default LoginContextProvider;
