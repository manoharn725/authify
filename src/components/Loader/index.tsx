import Lottie from "lottie-react";
import AutifyLoader from "../../assets/authifyLoader.json";
// interface ILoader{}

const Loader: React.FunctionComponent = () => {
  return (
    <div className="min-h-[100dvh] flex items-center w-[300px] mx-auto">
      <Lottie animationData={AutifyLoader} loop autoPlay />
    </div>
  );
};
export default Loader;
