import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";
// interface IPageNotFound{}<IPageNotFound>

const PageNotFound: React.FunctionComponent = () => {
    const navigate = useNavigate()
  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-gray-100 px-4">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-red-500 mb-4">404</h1>
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-6">
          The page you are looking for doesn’t exist or has been moved.
        </p>
        <Button type="button" label="Go to Login" onClick={()=>navigate('/login')}>
        </Button>
      </div>
    </div>
  );
};

export default PageNotFound;
