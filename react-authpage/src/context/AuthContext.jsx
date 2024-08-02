import { createContext, useState } from "react";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userData, setUserData] = useState(null);

  function loginHandler(data) {
    setIsAuthenticated(true);
    setUserData(data);
  }

  function logoutHandler() {
    setIsAuthenticated(false);
    setUserData(null);
  }

  return (
    //make storage, then context in other child components
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        userData,
        onLogin: loginHandler,
        onLogout: logoutHandler,
      }}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext };
