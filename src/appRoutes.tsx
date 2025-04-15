import { createBrowserRouter } from "react-router-dom";
import { lazy } from "react";
import WithSuspense from "./components/hoc/WithSuspense";
import Login from "./pages/Auth/Login";

//Lazy Loading..
const LazyHome = WithSuspense(lazy(() => import("./pages/Home")));
const LazySignUp = WithSuspense(lazy(() => import("./pages/Auth/SignUp")));
const LazyPageNotFound = WithSuspense(
  lazy(() => import("./pages/PageNotFound"))
);
const LazyProtectdRoutes = WithSuspense(
  lazy(() => import("./components/routes/ProtectdRoutes"))
);
const LazyProtectedLayout = WithSuspense(
  lazy(() => import("./components/layout/ProtectedLayout"))
);

export const router = createBrowserRouter([
  {
    element: <LazyProtectdRoutes />,
    children: [
      {
        element: <LazyProtectedLayout />,
        children: [
          {
            path: "/",
            element: <LazyHome />,
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
    element: <LazySignUp />,
  },
  {
    path: "*",
    element: <LazyPageNotFound />,
  },
]);
