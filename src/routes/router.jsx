import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import ErrorPage from "../component/ErrorPage";
import HomePage from "../pages/HomePage";
import AdvExperiencesDetails from "../component/Home/AdvExperiencesDetails";

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
]);

export default router;
