import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaUser, FaEdit } from "react-icons/fa";

const MyProfile = () => {
  const { user } = useContext(AuthContext);
  console.log(user.photoURL);
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4 py-8">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8 text-center">
        <div className="mb-6 sm:mb-8">
          <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
            Welcome Back , {user?.displayName || "Adventure Seeker"}
          </h1>
          <p className="text-sm sm:text-base text-gray-600">
            Manage your eco-adventure profile
          </p>
        </div>

        <div className="flex flex-col items-center space-y-4 sm:space-y-6">
          <div className="relative">
            <img
              src={user?.photoURL}
              alt="Profile"
              className="w-20 h-20 sm:w-24 sm:h-24 md:w-32 md:h-32 lg:w-36 lg:h-36 rounded-full shadow-lg object-cover border-4 border-green-100"
            />
            <div className="absolute -bottom-2 -right-2 bg-green-500 text-white rounded-full p-1 sm:p-2">
              <FaUser className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
          </div>

          <div className="text-center space-y-2">
            <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
              {user?.displayName || "Adventure Seeker"}
            </h2>
            <p className="text-sm sm:text-base text-gray-600 break-words">
              {user?.email}
            </p>
          </div>

          <div className="w-full pt-4">
            <NavLink
              to="/update-profile"
              className="btn bg-green-600 hover:bg-green-700 text-white w-full sm:w-auto px-6 sm:px-8 py-2 sm:py-3 text-sm sm:text-base font-semibold shadow-lg transition-colors duration-200"
            >
              <FaEdit className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Update Profile
            </NavLink>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProfile;
