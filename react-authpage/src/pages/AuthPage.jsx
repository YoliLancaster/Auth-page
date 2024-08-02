import { Route, Routes, Link } from "react-router-dom";
import Login from "./Login";
import Register from "./Register";
import "../styles/authPage.css";

const AuthPage = () => {
  return (
    <div className="auth-page">
      <div className="tabs">
        <h1>
          <Link to="register">SignUp</Link>
        </h1>
        <h1>
          <Link to="login">SignIn</Link>
        </h1>
      </div>
      <Routes>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
      </Routes>
    </div>
  );
};

export default AuthPage;
