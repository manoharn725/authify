import React from "react";

interface IButton {
  label: string;
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
}

const Button: React.FC<IButton> = ({
  label,
  onClick,
  type = "button",
  className = "",
  disabled = false,
}) => {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={`bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition duration-200 mb-3 disabled:opacity-50 ${className}`}
    >
      {label}
    </button>
  );
};

export default Button;
