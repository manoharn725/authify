import { FunctionComponent } from "react";
import { RouterProvider } from "react-router-dom";
import { router } from "./appRoutes";
import UserAuthProvider from "./context/UserAuthContext";
import "./App.css";

// interface IApp {}

const App: FunctionComponent = () => {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  );
};

export default App;
