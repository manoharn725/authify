import { createBrowserRouter } from "react-router-dom";
import Login from "./pages/Login";
import { lazy, Suspense } from "react";
import Loader from "./components/Loader";

//Lazy Loading..
const Home = lazy(() => import("./pages/Home"));
const SignUp = lazy(() => import("./pages/SignUp"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
const ProtectedRoutes = lazy(() => import("./components/ProtectdRoutes"));
const ProtectedLayout = lazy(() => import("./components/ProtectedLayout"));

export const router = createBrowserRouter([
  {
    element: (
      <Suspense fallback={<Loader />}>
        <ProtectedRoutes />
      </Suspense>
    ),
    children: [
      {
        element: (
          <Suspense fallback={<Loader />}>
            <ProtectedLayout />
          </Suspense>
        ),
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
