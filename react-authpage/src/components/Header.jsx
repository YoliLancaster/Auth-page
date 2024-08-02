import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/header.css";
import { AuthContext } from "../context/AuthContext";

const Header = () => {
  let context = useContext(AuthContext);
  return (
    <header className="header">
      <nav>
        <ul>
          {context.isAuthenticated && (
            <>
              <li>
                <Link to="/dashboard">Dashboard</Link>
              </li>
              <li>
                <Link to="/profile">My Profile</Link>
              </li>
            </>
          )}
          {!context.isAuthenticated && (
            <li>
              <Link to="/auth/login">Login</Link>
            </li>
          )}
        </ul>
        {context.isAuthenticated && (
          <button type="button" onClick={context.onLogout}>
            Logout
          </button>
        )}
      </nav>
    </header>
  );
};

export default Header;
