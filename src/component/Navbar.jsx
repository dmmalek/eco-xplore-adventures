import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/context/AuthProvider";
import { FaBars } from "react-icons/fa";
import "../customCss/style.css";
import logo from "../assets/image/logo.png";
import usePageTitle from "./usePageTitle";

const Navbar = () => {
  // usePageTitle();
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();
  usePageTitle();

  const links = (
    <>
      <li>
        <NavLink
          to="/"
          className="text-gray-800 lg:text-white hover:bg-green-100 lg:hover:bg-white/10 rounded-lg transition-colors duration-200"
        >
          Home
        </NavLink>
      </li>
      {user && (
        <li>
          <NavLink
            to="/myProfile"
            className="text-gray-800 lg:text-white hover:bg-green-100 lg:hover:bg-white/10 rounded-lg transition-colors duration-200"
          >
            My Profile
          </NavLink>
        </li>
      )}
    </>
  );

  const handleSignOut = () => {
    signOutUser()
      .then(() => {
        setUser(null);
        navigate("/auth/login");
      })
      .catch((error) => {
        // console.log(error);
      });
  };

  return (
    <div className="sticky top-0 w-full max-w-full z-50">
      <div className="navbar bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 backdrop-blur-md bg-opacity-95 text-white font-semibold shadow-xl transition-all duration-300 px-2 sm:px-4 lg:px-6 border-b border-green-500/20 w-full max-w-full relative">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost lg:hidden p-1 text-white hover:bg-white/10 hover:text-green-100"
            >
              <FaBars className="h-5 w-5 sm:h-6 sm:w-6" />
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-gradient-to-br from-white to-green-50 rounded-2xl z-[10000] mt-3 w-52 p-3 shadow-2xl border border-green-200/50 backdrop-blur-sm"
            >
              {links}
            </ul>
          </div>
          <div className="flex items-center space-x-2 sm:space-x-3 min-w-0 flex-shrink">
            <img
              src={logo}
              alt="eco xplore adventures"
              className="w-5 h-5 hidden sm:block sm:w-10 sm:h-10 md:w-12 md:h-12 flex-shrink-0"
            />
            <a className="text-xs md:text-balance sm:text-base md:text-lg lg:text-xl font-bold hidden xs:block text-white drop-shadow-sm truncate">
              Eco Xplore Adventures
            </a>
            <a className="text-sm font-bold block xs:hidden text-white drop-shadow-sm truncate">
              Eco Xplore
            </a>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-base">{links}</ul>
        </div>
        <div className="navbar-end min-w-0 flex-shrink">
          {user ? (
            <>
              <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4 min-w-0">
                <p className="hidden sm:block text-xs sm:text-sm md:text-base truncate max-w-12 sm:max-w-16 md:max-w-20 text-green-100 font-medium">
                  {user?.displayName}
                </p>
                <NavLink
                  className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow bg-base-100 flex-shrink-0"
                  to="/myprofile"
                >
                  <img
                    src={user?.photoURL}
                    alt="Profile"
                    className="w-6 h-6 sm:w-8 sm:h-8 rounded-full shadow bg-base-100 object-cover"
                  />
                </NavLink>

                <button
                  className="btn btn-sm sm:btn-md bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 font-semibold shadow-lg transition-all duration-300 text-xs sm:text-sm backdrop-blur-sm whitespace-nowrap"
                  onClick={handleSignOut}
                >
                  <span className="hidden xs:inline">Logout</span>
                  <span className="xs:hidden">Out</span>
                </button>
              </div>
            </>
          ) : (
            <div className="flex space-x-1 sm:space-x-2 flex-shrink-0 overflow-hidden">
              <NavLink
                className="btn btn-sm sm:btn-md bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 font-semibold shadow-lg transition-all duration-300 text-xs sm:text-sm backdrop-blur-sm flex-shrink-0 whitespace-nowrap"
                to="/auth/login"
              >
                Login
              </NavLink>
              <NavLink
                className="btn btn-sm sm:btn-md bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 font-semibold shadow-lg transition-all duration-300 text-xs sm:text-sm backdrop-blur-sm flex-shrink-0 whitespace-nowrap"
                to="/auth/register"
              >
                <span className="hidden xs:inline">Register</span>
                <span className="xs:hidden">Join</span>
              </NavLink>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
