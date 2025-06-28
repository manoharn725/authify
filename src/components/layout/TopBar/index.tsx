import { FunctionComponent, useState } from "react";
import { useUserAuth } from "../../../context/UserAuthContext";
import { useNavigate } from "react-router-dom";
import Button from "../../ui/Button";
import useLocalStorage from "../../../hooks/useLocalStorage/index.ts";
import Modal from "../../ui/Modal/index.tsx";
// interface ITopBar {}

const TopBar: FunctionComponent = () => {
  const [theme, setTheme] = useLocalStorage({
    key: "theme",
    initialValue: "light",
  });
  const [isModal, setIsModal] = useState(false);

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
    setTheme(theme === "light" ? "dark" : "light");
  };

  const handleClose = () => {
    setIsModal((prev) => !prev);
  };

  return (
    <header className="h-16 px-2.5 sm:px-5 w-full bg-amber-400 dark:bg-gray-900 flex justify-between items-center">
      <div className="text-black dark:text-white">Authify</div>
      <div className="flex gap-4 items-center justify-center">
        <Button label="Modal" onClick={handleClose} isTeritary />
        <Button isDark={theme} isTeritary onClick={handleTheme} />
        <Button
          onClick={handleLogout}
          label="Log Out"
          type="button"
          className="mb-[unset]"
          isTeritary={true}
          isLogoutIcon
        />
      </div>
      {isModal && <Modal onClose={handleClose} />}
    </header>
  );
};
export default TopBar;
