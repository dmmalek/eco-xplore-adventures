import { useContext } from "react";
import { AuthContext } from "../../component/context/AuthProvider";

const Register = () => {
  const { signUpUser, profileUpdate } = useContext(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    const email = form.email.value;
    const password = form.password.value;

    console.log(name, url, email, password);

    signUpUser(email, password)
      .then((result) => {
        console.log(result.user);
        profileUpdate(name, url);
      })
      .catch((error) => {
        console.log(error.message);
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
              className="btn btn-neutral mt-4"
              type="submit"
              value="Register"
            />
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
