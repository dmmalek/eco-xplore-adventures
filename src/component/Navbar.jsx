import { useContext } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from "../component/context/AuthProvider";

const Navbar = () => {
  // usePageTitle();
  const { user, signOutUser, setUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const links = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/auth/register">Register</NavLink>
      </li>
      <li>
        <NavLink to="/auth/login">Log In</NavLink>
      </li>
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
    <div className="navbar bg-base-100 shadow-sm bg-gradient-to-r from-green-600 via-teal-600 to-emerald-500 text-white font-semibold ">
      <div className="navbar-start">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </div>
          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
          >
            {links}
          </ul>
        </div>
        <a className="btn btn-ghost text-xl">daisyUI</a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{links}</ul>
      </div>
      <div className="navbar-end space-x-2">
        {user ? (
          <>
            <div className="flex items-center space-x-4">
              <p>{user?.email}</p>
              <NavLink
                className="w-8 h-8 rounded-full shadow bg-base-100"
                to="/myprofile"
              >
                <img
                  src={user?.photoURL}
                  alt="Profile"
                  className="w-8 h-8 rounded-full shadow bg-base-100"
                />
              </NavLink>

              <button
                className="btn bg-[#c8e6c9] hover:bg-base-100 border-none font-bold"
                onClick={handleSignOut}
              >
                Log Out
              </button>
            </div>
          </>
        ) : (
          <NavLink
            className="btn bg-[#c8e6c9] hover:bg-base-100 border-none font-bold"
            to="/auth/login"
          >
            Log In
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;
