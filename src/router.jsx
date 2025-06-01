import { createBrowserRouter, RouterProvider } from "react-router-dom";
import PrivateLayout from "./routes/_layout/PrivateLayout";
import PublicLayout from "./routes/_layout/PublicLayout";
import PrivateRoute from "./components/PrivateRoute";
import ErrorPage from "./routes/_error";
import GoogleSuccess from "./components/GoogleSuccess";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
      {
        path: "forgot-password",
        lazy: () =>
          import("./routes/auth/ForgotPassword").then((module) => ({
            Component: module.default,
          })),
      },
      {
        path: "reset-password/:token",
        lazy: () =>
          import("./routes/auth/NewPassword").then((module) => ({
            Component: module.default,
          })),
      },
    ],
  },
]);

export default router;
