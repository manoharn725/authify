import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
import Button from "../../components/Button";
// interface IHomeProps {}<IHomeProps>

const Home: React.FunctionComponent = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/login')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="min-h-[calc(100vh-4rem)] flex flex-col items-center justify-center bg-gray-100 px-4">
    <div className="bg-white shadow-lg rounded-lg p-8 max-w-md w-full text-center">
      <h1 className="text-2xl font-semibold mb-4 text-gray-800">Welcome Home 🎉</h1>
      <p className="mb-6 text-gray-600">You are successfully logged in!</p>
     
      <Button onClick={handleLogOut} type="button" label="Log Out" className="bg-red-500 hover:bg-red-600" />
    </div>
  </div>
  
  );
};
export default Home;
