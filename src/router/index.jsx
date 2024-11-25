import { createBrowserRouter } from "react-router-dom";
import { Layout } from "../layout";
import { Details, Home, Movies } from "../pages";

export const router = createBrowserRouter([
  {
    element: <Layout />,
    children: [
      {
        path: "/",
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
    ],
  },
]);
