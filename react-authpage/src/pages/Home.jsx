import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Home = () => {
  const { userData } = useContext(AuthContext);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <>
      <h2>Welcome to the Vet Clinic, {userData.name}</h2>
      <p>Your pet&apos;s health is our priority.</p>
    </>
  );
};

export default Home;
