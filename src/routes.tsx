import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { lazy } from "react";
import ProtectedRoutes from "./components/ProtectdRoutes";
import ProtectedLayout from "./components/ProtectedLayout";
import WithSuspense from "./hoc/WithSuspense";

//Lazy Loading..
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));

export const router = createBrowserRouter([
  {
    element: <ProtectedRoutes />,
    children: [
      {
        element: <ProtectedLayout />,
        children: [
          {
            path: "/",
            element: WithSuspense(Home),
          },
        ],
      },
    ],
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: WithSuspense(SignUp),
  },
  {
    path: "*",
    element: WithSuspense(PageNotFound),
  },
]);
