import { FunctionComponent, MouseEvent } from "react";
import GoogleIcon from "../../assets/googleIcon.svg";
import LoginIcon from "../../assets/loginIcon.svg";
import SignupIcon from '../../assets/signupIcon.svg';
import LogoutIcon from '../../assets/logoutIcon.svg';

interface IButton {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  isGoogle?: boolean;
  isLoginIcon?: boolean;
  isSignupIcon?: boolean;
  isLogoutIcon?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTeritary?: boolean;
  isFullWidth?: boolean;
  isLoading?: boolean;
}

const Button: FunctionComponent<IButton> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  isGoogle = false,
  isLoginIcon = false,
  isSignupIcon = false,
  isLogoutIcon = false,
  isPrimary = false,
  isSecondary = false,
  isTeritary = false,
  isFullWidth = false,
  isLoading = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center gap-2.5 px-4 py-2 rounded-md transition duration-200 mb-2 disabled:opacity-50 border border-gray-300 cursor-pointer text-sm sm:text-base ${
        isPrimary
          ? "bg-white hover:bg-gray-100 text-gray-700"
          : isSecondary
          ? "bg-rose-600 hover:bg-rose-700 text-white"
          : isTeritary
          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
          : ""
      } ${isFullWidth ? "w-full" : ""}  ${className}`}
    >
      {isLoading ? (
        <span
          className={`w-4 h-4 mr-1 border-2 ${
            isPrimary
              ? "border-gray-700"
              : isSecondary
              ? "border-white"
              : isTeritary
              ? '"border-white'
              : ""
          } border-t-transparent rounded-full animate-spin`}
        ></span>
      ) : (
        ""
      )}
    {(isGoogle || isLoginIcon || isSignupIcon || isLogoutIcon) && (
  <img
    src={
      isGoogle
        ? GoogleIcon
        : isLoginIcon
        ? LoginIcon
        : isSignupIcon
        ? SignupIcon
        : isLogoutIcon
        ? LogoutIcon
        : ""
    }
    alt={
      isGoogle
        ? "Google Icon"
        : isLoginIcon
        ? "Login Icon"
        : isSignupIcon
        ? "Signup Icon"
        : isLogoutIcon
        ? "Logout Icon"
        : ""
    }
    className="w-4"
  />
)}

      {label}
    </button>
  );
};

export default Button;
