import { createBrowserRouter, Navigate } from "react-router-dom";
import { Layout } from "../layout";
import { Details, Home, Movies } from "../pages";
import Login from "../pages/login/login";
import Favorites from "../pages/favorites/Favorites.jsx";
import Logout from "../components/Logout";

export const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <Navigate to="/login" replace />,
  },
  {
    element: <Layout />,
    children: [
      {
        path: "/home",
        element: <Home />,
      },
      {
        path: "/movies/:countryCode",
        element: <Movies />,
      },
      {
        path: "/movies/details/:movieId",
        element: <Details />,
      },
      {
        path: "/favorites",
        element: <Favorites />,
      },
      {
        path: "/logout",
        element: <Logout />, 
      },
    ],
  },
]);
