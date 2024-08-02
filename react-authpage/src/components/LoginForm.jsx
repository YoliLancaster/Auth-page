import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import apiService from "../services/apiService";

const LoginForm = () => {
  const context = useContext(AuthContext);
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const response = await apiService.login(email, password);
      console.log(response.data);
      if (response.data.success) {
        const userData = response.data.employee;
        context.onLogin(userData);
        navigate("/dashboard");
      }
      // else {
      //   setError("Invalid email or password");
      // }
    } catch (err) {
      console.error("There was an error logging in!", err);
      //setError("Login failed. Please try again later.");
    }
  };

  return (
    <>
      <form onSubmit={submitHandler}>
        <input
          type="email"
          name="email"
          id="email"
          value={email}
          placeholder="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          placeholder="password"
          onChange={(e) => setPassword(e.target.value)}
        />
        <div>
          <button type="submit">Login</button>
        </div>
      </form>
    </>
  );
};

export default LoginForm;
