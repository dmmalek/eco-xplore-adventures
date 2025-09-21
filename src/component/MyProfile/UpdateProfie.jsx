import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../context/AuthProvider";
import { FaCheck } from "react-icons/fa";
import Swal from "sweetalert2";

const UpdateProfie = () => {
  const { profileUpdate } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleSaveProfile = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const url = form.url.value;

    profileUpdate(name, url).then(() => {
      // Profile updated!
      Swal.fire({
        title: "Good job!",
        text: "Profile Updated Successfully",
        icon: "success",
      });
      navigate("/myprofile");
    });
  };
  return (
    <div className="flex justify-center items-center min-h-screen bg-gradient-to-br from-green-50 to-blue-50 px-4 py-8">
      <div className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg">
        <form
          onSubmit={handleSaveProfile}
          className="bg-white rounded-2xl shadow-lg p-4 sm:p-6 md:p-8"
        >
          <div className="text-center mb-6 sm:mb-8">
            <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
              Update Profile
            </h2>
            <p className="text-sm sm:text-base text-gray-600">
              Keep your adventure profile up to date
            </p>
          </div>

          {/* Name input */}
          <div className="form-control mb-4 sm:mb-6">
            <label className="label text-sm sm:text-base">
              <span className="label-text font-medium text-gray-700">
                Display Name
              </span>
            </label>
            <input
              type="text"
              className="input input-bordered w-full text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="Enter your full name"
              name="name"
              required
            />
          </div>

          {/* Photo URL input */}
          <div className="form-control mb-6 sm:mb-8">
            <label className="label text-sm sm:text-base">
              <span className="label-text font-medium text-gray-700">
                Profile Photo URL
              </span>
            </label>
            <input
              type="url"
              className="input input-bordered w-full text-sm sm:text-base focus:ring-2 focus:ring-green-500 focus:border-transparent"
              placeholder="https://example.com/your-photo.jpg"
              name="url"
              required
            />
            <label className="label">
              <span className="label-text-alt text-xs text-gray-500">
                Make sure the URL points to a valid image
              </span>
            </label>
          </div>

          {/* Action Buttons */}
          <div className="space-y-3 sm:space-y-0 sm:space-x-3 sm:flex">
            <button
              type="submit"
              className="btn bg-green-600 hover:bg-green-700 text-white w-full sm:flex-1 text-sm sm:text-base font-semibold shadow-lg transition-colors duration-200"
            >
              <FaCheck className="w-4 h-4 sm:w-5 sm:h-5 mr-2" />
              Save Changes
            </button>

            <button
              type="button"
              onClick={() => navigate("/myprofile")}
              className="btn btn-outline w-full sm:w-auto text-sm sm:text-base"
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UpdateProfie;
