import { useContext, useRef } from "react";
import { AuthContext } from "../../component/context/AuthProvider";
import { useNavigate } from "react-router-dom";

const LogIn = () => {
  const { signInUser, forgetPassword } = useContext(AuthContext);
  const navigate = useNavigate();
  const emailRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signInUser(email, password)
      .then((result) => {
        console.log(result.user);
        navigate("/");
      })
      .catch((error) => {
        console.log(error.meassage);
      });
  };
  const handleUpdatePassword = () => {
    const email = emailRef.current.value;
    if (!email) {
      alert("Please Type Valid Email");
    } else {
      forgetPassword(email).then(() => {
        alert("send email for password reset");
      });
    }
  };

  return (
    <div className="hero  bg-base-200 min-h-screen">
      <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
        <div className="card-body">
          <h1 className="text-5xl font-bold text-center">Login now!</h1>
          <form onSubmit={handleSubmit} className="fieldset">
            <label className="label">Email</label>
            <input
              type="email"
              className="input"
              name="email"
              placeholder="Email"
              ref={emailRef}
            />
            <label className="label">Password</label>
            <input
              type="password"
              className="input"
              name="password"
              placeholder="Password"
              autoComplete="off"
            />
            <div>
              <a onClick={handleUpdatePassword} className="link link-hover">
                Forgot password?
              </a>
            </div>
            <input
              className="btn bg-green-600 hover:bg-green-700 mt-4 text-white"
              type="submit"
              value="Log In"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default LogIn;
