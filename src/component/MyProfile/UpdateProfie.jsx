import { useContext } from "react";

import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";

const UpdateProfie = () => {
  const { profileUpdate } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;
    console.log(name, url);
    profileUpdate(name, url).then(() => {
      // Profile updated!
      alert("Profile updated!");
      navigate("/myprofile");
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 px-4">
      <form
        onSubmit={handleSaveProfile}
        className="w-full max-w-sm sm:max-w-md bg-white rounded-2xl shadow-md p-6"
      >
        <h2 className="text-xl font-semibold text-center mb-6">
          Update Profile
        </h2>
        {/* Name input */}
        <div className="form-control mb-4">
          <label className="label font-medium">Name</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter your name"
            name="name"
            required
          />
        </div>
        {/* Photo URL input */}
        <div className="form-control mb-4">
          <label className="label font-medium">Photo URL</label>
          <input
            type="text"
            className="input input-bordered w-full"
            placeholder="Enter photo URL"
            name="url"
            required
          />
        </div>
        {/* Save Button */}

        <input
          className="btn btn-primary w-full"
          type="submit"
          value="Save Profile"
        />
      </form>
    </div>
  );
};

export default UpdateProfie;
