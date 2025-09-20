import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user.photoURL);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-2xl shadow-md p-6 text-center">
        <h1 className="text-2xl font-bold text-center mb-4">
          Welcome, {user?.displayName}
        </h1>
        <div className="flex flex-col items-center">
          <img
            src={user.photoURL}
            alt="Profile"
            className="w-24 h-24 md:w-32 md:h-32 rounded-full shadow mb-4 object-cover"
          />
          <h2 className="text-lg md:text-2xl font-semibold mb-1">
            {user?.displayName}
          </h2>
          <p className="text-sm md:text-base text-gray-600 mb-4">
            {user?.email}
          </p>
        </div>

        <NavLink
          to="/update-profile"
          className="btn btn-primary w-full md:w-auto px-6"
        >
          Update Profile
        </NavLink>
      </div>
    </div>
  );
};

export default MyProfile;
