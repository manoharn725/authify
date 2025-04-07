import { RouterProvider } from "react-router-dom";
import { router } from "./routes";
import UserAuthProvider from "./context/UserAuthContext";
import "./App.css";

// interface IApp {}

const App: React.FunctionComponent = () => {
  return (
    <UserAuthProvider>
      <RouterProvider router={router} />
    </UserAuthProvider>
  );
};

export default App;
