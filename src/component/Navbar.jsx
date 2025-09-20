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
        <NavLink to="/">Home</NavLink>
      </li>
      {user && (
        <li>
          <NavLink to="/myProfile">My Profile</NavLink>
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
        console.log(error);
      });
  };

  return (
    <div className="navbar bg-gradient-to-r from-emerald-600 via-green-600 to-teal-600 backdrop-blur-md bg-opacity-95 text-white font-semibold shadow-xl transition-all duration-300 px-2 sm:px-4 lg:px-6 border-b border-green-500/20">
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
            className="menu menu-sm dropdown-content bg-gradient-to-br from-white to-green-50 rounded-2xl z-[1000] mt-3 w-52 p-3 shadow-2xl border border-green-200/50 backdrop-blur-sm"
          >
            {links}
          </ul>
        </div>
        <div className="flex items-center space-x-2 sm:space-x-3">
          <img
            src={logo}
            alt="eco xplore adventures"
            className="w-8 h-8 sm:w-10 sm:h-10 md:w-12 md:h-12"
          />
          <a className="text-sm sm:text-base md:text-lg lg:text-xl font-bold hidden xs:block text-white drop-shadow-sm">
            Eco Xplore Adventures
          </a>
          <a className="text-sm font-bold block xs:hidden text-white drop-shadow-sm">
            Eco Xplore
          </a>
        </div>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 text-base text-white">
          {links}
        </ul>
      </div>
      <div className="navbar-end">
        {user ? (
          <>
            <div className="flex items-center space-x-1 sm:space-x-2 md:space-x-4">
              <p className="hidden sm:block text-xs sm:text-sm md:text-base truncate max-w-24 sm:max-w-32 md:max-w-none text-green-100 font-medium">
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
                className="btn btn-sm sm:btn-md bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 font-semibold shadow-lg transition-all duration-300 text-xs sm:text-sm backdrop-blur-sm"
                onClick={handleSignOut}
              >
                <span className="hidden sm:inline">Log Out</span>
                <span className="sm:hidden">Out</span>
              </button>
            </div>
          </>
        ) : (
          <div className="flex space-x-1 sm:space-x-2">
            <NavLink
              className="btn btn-sm sm:btn-md bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 font-semibold shadow-lg transition-all duration-300 text-xs sm:text-sm backdrop-blur-sm"
              to="/auth/login"
            >
              Log In
            </NavLink>
            <NavLink
              className="btn btn-sm sm:btn-md bg-white/10 hover:bg-white/20 text-white border-white/20 hover:border-white/30 font-semibold shadow-lg transition-all duration-300 text-xs sm:text-sm backdrop-blur-sm"
              to="/auth/register"
            >
              <span className="hidden sm:inline">Sign Up</span>
              <span className="sm:hidden">Sign</span>
            </NavLink>
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
