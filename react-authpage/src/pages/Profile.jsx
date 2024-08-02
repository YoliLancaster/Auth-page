import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const Profile = () => {
  const { userData } = useContext(AuthContext);

  if (!userData) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <h2>Profile</h2>
      <hr />
      <p>Name: {userData.name}</p>
      <p>Email: {userData.email}</p>
      <hr />
      <p>Gender: {userData.gender}</p>
      <p>Date of Birth: {userData.dateOfBirth}</p>
      <p>Address: {userData.address}</p>
    </div>
  );
};

export default Profile;
