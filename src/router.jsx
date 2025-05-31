import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateLayout from "./routes/_layout/PrivateLayout";
import PublicLayout from "./routes/_layout/PublicLayout";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./routes/_error";
import GoogleSuccess from "./components/GoogleSuccess";

const router = createBrowserRouter([
  {
    path: "/",
    element: <PrivateRoute />,
    children: [
      {
        element: <PrivateLayout />,
        children: [
          {
            index: true,
            lazy: () =>
              import("./routes/Home").then((module) => ({
                Component: module.default,
              })),
          },
          {
            path: "about",
            lazy: () =>
              import("./routes/Details").then((module) => ({
                Component: module.default,
              })),
          },
        ],
      },
    ],
    errorElement: <ErrorPage />,
  },
  {
    path: "/auth",
    element: <PublicLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "login",
        lazy: () =>
          import("./routes/auth/login").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "register",
        lazy: () =>
          import("./routes/auth/register").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "google-success",
        element: <GoogleSuccess />,
      },
    ],
  },
]);

export default function Router() {
  return <RouterProvider router={router} />;
}
