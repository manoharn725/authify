import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import WithSuspense from "./hoc/WithSuspense";
import Login from "./pages/auth/Login";

//Lazy Loading..
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/auth/SignUp"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ProtectdRoutes = lazy(()=> import('./components/ProtectdRoutes'));
const ProtectedLayout = lazy(()=> import('./components/ProtectedLayout'));

export const router = createBrowserRouter([
  {
    element: WithSuspense(ProtectdRoutes),
    children: [
      {
        element: WithSuspense(ProtectedLayout),
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
