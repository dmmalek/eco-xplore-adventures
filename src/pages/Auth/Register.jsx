import { useContext, useState } from "react";
import { AuthContext } from "../../component/context/AuthProvider";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import SocialLogIn from "../../component/SocialLogIn";
import Swal from "sweetalert2";

const Register = () => {
  const { signUpUser, profileUpdate } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    //  password validation
    if (password.length < 6) {
      setErrorMessage("Password must be at least 6 characters long.");
    }
    if (!/[A-Z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one uppercase letter."
      );
    }
    if (!/[a-z]/.test(password)) {
      return setErrorMessage(
        "Password must contain at least one lowercase letter."
      );
    }

    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        profileUpdate(name, url);
        Swal.fire({
          title: "Good job!",
          text: "Sign Up Succesfully",
          icon: "success",
        });
        const redirectTo = location.state || "/";
        navigate(redirectTo);
      })
      .catch((error) => {
        const errMesage = error.message;
        setErrorMessage(errMesage);
      });
  };

  return (
    <div className="hero  bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Register now!</h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Name</label>
            <input
              type="text"
              className="input"
              name="name"
              placeholder="Name"
            />
            <label className="label">Photo Url</label>
            <input
              type="text"
              className="input"
              name="url"
              placeholder="Enter Photo Url"
            />
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
            <input
              className="btn bg-green-600 hover:bg-green-700 mt-4 text-white"
              type="submit"
              value="Register"
            />
          </form>
          <p>
            Already have an account?
            <NavLink className="text-green-600 font-bold ml-1" to="/auth/login">
              Log in Now
            </NavLink>
          </p>
          {errorMessage && (
            <p className="text-red-600 text-xs">{errorMessage}</p>
          )}
        </div>
        <h3 className="text-center">Or, Register with</h3>
        <SocialLogIn />
      </div>
    </div>
  );
};

export default Register;
