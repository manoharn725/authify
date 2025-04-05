import { useNavigate } from "react-router-dom";
import { useUserAuth } from "../../context/UserAuthContext";
interface IHomeProps {}

const Home: React.FunctionComponent<IHomeProps> = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();
  const handleLogOut = async () => {
    try {
      await logOut();
      navigate('/signup')
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <h1>Home</h1>
      <div>
        <button onClick={handleLogOut}>Log Out</button>
      </div>
    </div>
  );
};
export default Home;
