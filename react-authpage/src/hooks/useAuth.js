import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const useAuth = () => {
  const { isAuthenticated, setIsAuthenticated } = useContext(AuthContext);
  return { isAuthenticated, setIsAuthenticated };
};

export default useAuth;
