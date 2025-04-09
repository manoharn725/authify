import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";
import ProtectedRoutes from "./components/ProtectdRoutes";
import ProtectedLayout from "./components/ProtectedLayout";

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
            element: (
              <Suspense fallback={<Loader />}>
                <Home />
              </Suspense>
            ),
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
    element: (
      <Suspense fallback={<Loader />}>
        <SignUp />
      </Suspense>
    ),
  },
  {
    path: "*",
    element: (
      <Suspense fallback={<Loader />}>
        <PageNotFound />
      </Suspense>
    ),
  },
]);
