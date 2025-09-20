import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const usePageTitle = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | Eco Xplore Adventure";
        break;
      case "/auth/register":
        document.title = "Register | Eco Xplore Adventure";
        break;
      case "/auth/login":
        document.title = "Log in | Eco Xplore Adventure";
        break;
      case "/myProfile":
        document.title = "My Profile | Eco Xplore Adventure";
        break;
      case "/update-profile":
        document.title = "Update Profile | Eco Xplore Adventure";
        break;
      default:
        document.title = "Eco Xplore Adventure";
    }
  }, [location]);
};

export default usePageTitle;
