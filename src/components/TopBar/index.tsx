import { FunctionComponent } from "react";
import { useUserAuth } from "../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../Button";
// interface ITopBar {}

const TopBar: FunctionComponent = () => {
  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut();
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <header className="h-16 px-2.5 sm:px-5 w-full bg-amber-200 flex justify-between items-center">
      <div>Authify</div>
      <Button
        onClick={handleLogout}
        label="Log Out"
        type="button"
        className="mb-[unset]"
        isTeritary={true}
      />
    </header>
  );
};
export default TopBar;
