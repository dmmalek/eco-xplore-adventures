import { useContext } from "react";
import { AuthContext } from "./context/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import { FaGoogle } from "react-icons/fa";

const SocialLogIn = () => {
  const { signInByGoogle } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const handleGoogleLogIn = () => {
    signInByGoogle()
      .then((result) => {
        if (result.user) {
          const redirectTo = location.state || "/";
          navigate(redirectTo);
        }
      })
      .catch((error) => console.log(error.message));
  };
  return (
    <div className="text-center mb-4">
      <div className="py-2 ">
        <button
          onClick={handleGoogleLogIn}
          className="btn text-teal-600 hover:bg-green-600 hover:text-white font-semibold border-black w-4/5"
        >
          <FaGoogle /> Sign Up With Google
        </button>
      </div>
    </div>
  );
};

export default SocialLogIn;
