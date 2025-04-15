import { FunctionComponent } from "react";
import { Outlet } from "react-router-dom";
import TopBar from "../TopBar";

// interface IProtectedLayout {}

const ProtectedLayout: FunctionComponent = () => {
  return (
    <>
      <main className="h-[100dvh]">
        <TopBar />
        <Outlet />
      </main>
    </>
  );
};

export default ProtectedLayout;
