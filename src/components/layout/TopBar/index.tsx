import { FunctionComponent } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import useLocalStorage from "../../../hooks/useLocalStorage/index.ts";
// interface ITopBar {}

const TopBar: FunctionComponent = () => {
  const [storedValue, setStoredValue] = useLocalStorage("theme", "light");

  const { logOut } = useUserAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    try {
      await logOut(() => {
        navigate("/login");
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleTheme = () => {
    setStoredValue(storedValue === "light" ? "dark" : "light");
  };

  return (
    <header className="h-16 px-2.5 sm:px-5 w-full bg-amber-200 flex justify-between items-center">
      <div>Authify</div>
      <div className="flex gap-4 items-center justify-center">
        <Button isDark={storedValue} isTeritary onClick={handleTheme} />
        <Button
          onClick={handleLogout}
          label="Log Out"
          type="button"
        className="mb-[unset]"
          isTeritary={true}
          isLogoutIcon
        />
      </div>
    </header>
  );
};
export default TopBar;
