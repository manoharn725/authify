import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
import PandaSleeping from '../../assets/pandaSleeping.json';
import Lottie from "lottie-react";
// interface IPageNotFound{}<IPageNotFound>

const PageNotFound: React.FunctionComponent = () => {
    const navigate = useNavigate()
  return (
    <section className="min-h-[calc(100dvh)] bg-amber-50 flex justify-center">
      <div className="text-center w-80 m-auto">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <div className="w-full">
        <Lottie  animationData={PandaSleeping} />
        </div>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Button type="button" label="Go to Login" onClick={()=>navigate('/login')}>
        </Button>
      </div>
    </section>
  );
};

export default PageNotFound;
