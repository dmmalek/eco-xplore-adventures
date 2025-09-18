import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../component/ErrorPage";
import HomePage from "../pages/HomePage";
import AdvExperiencesDetails from "../component/Home/AdvExperiencesDetails";
import AuthLayout from "../layouts/AuthLayout";
import { LogIn } from "lucide-react";
import Register from "../pages/Auth/Register";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <HomePage />,
        loader: () => fetch("/ecoAdventures.json"),
      },
      {
        path: "/adventure/:id",
        element: <AdvExperiencesDetails />,
        loader: () => fetch("/ecoAdventures.json"),
      },
    ],
  },
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "/auth/login",
        element: <LogIn />,
      },
      {
        path: "/auth/register",
        element: <Register />,
      },
    ],
  },
]);

export default router;
