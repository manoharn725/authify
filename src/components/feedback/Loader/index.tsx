import { FunctionComponent } from "react";
import Lottie from "lottie-react";
import AutifyLoader from "../../../assets/authifyLoader.json";
import { useUserAuth } from "../../../context/UserAuthContext";
// interface ILoader{}

const Loader: FunctionComponent = () => {
    const {user} =useUserAuth();
  return (
    <div className={`flex items-center w-[300px] mx-auto ${
        user ? "h-[calc(100dvh-64px)]" : "h-[100dvh]"
      }`}>
      <Lottie animationData={AutifyLoader} loop autoPlay />
    </div>
  );
};
export default Loader;
