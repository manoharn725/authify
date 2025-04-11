import { FunctionComponent, MouseEvent } from "react";
import GoogleIcon from "../../assets/googleIcon.svg";

interface IButton {
  label: string;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  isGoogle?: boolean;
  isPrimary?: boolean;
  isSecondary?: boolean;
  isTeritary?: boolean;
  isFullWidth?: boolean;
}

const Button: FunctionComponent<IButton> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
  isGoogle = false,
  isPrimary = false,
  isSecondary = false,
  isTeritary = false,
  isFullWidth= false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`flex justify-center items-center gap-2.5 px-4 py-2 rounded-md transition duration-200 mb-3 disabled:opacity-50 border border-gray-300 cursor-pointer ${
        isPrimary
          ? "bg-white hover:bg-gray-100 text-gray-700"
          : isSecondary
          ? "bg-rose-600 hover:bg-rose-700 text-white"
          : isTeritary
          ? "bg-indigo-600 hover:bg-indigo-700 text-white"
          : ""
      } ${isFullWidth ? 'w-full' : ''}  ${className}`}
    >
      {isGoogle && <img src={GoogleIcon} alt="Google Icon" className="w-4" />}{" "}
      {label}
    </button>
  );
};

export default Button;
