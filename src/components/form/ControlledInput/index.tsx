import { ChangeEvent, FunctionComponent, memo, useState } from "react";
import EyePasswordShow from "../../../assets/eye-password-show.svg";
import EyePasswordHide from "../../../assets/eye-password-hide.svg";
import {
  passwordRules,
  getPasswordStrength,
  PasswordRuleKey,
} from "../../../utils/passwordStrengthUtils";

interface IControlledInput {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  label: string;
  isRequired: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
  isPasswordStrength?: boolean;
}

const ControlledInput: FunctionComponent<IControlledInput> = ({
  type,
  name,
  value,
  placeholder,
  label,
  isRequired,
  onChange,
  isPasswordStrength = false,
}) => {
  const [isShowPassword, setIsShowPassword] = useState(false);
  const isPassword = type === "password";

  // Password Strength logic
  const { rules, strengthLabel } = getPasswordStrength(value);

  const handleShowPassword = () => {
    if (value.length > 0) {
      setIsShowPassword((prev) => !prev);
    }
  };

  return (
    <div className="mb-3 sm:mb-4 relative">
      <label
        htmlFor={name}
        className="text-left block text-[12px] sm:text-sm font-medium text-gray-700 mb-1"
      >
        {label}
        {isRequired && <span className="text-red-500"> *</span>}
      </label>

      <input
        type={isPassword ? (isShowPassword ? "text" : "password") : type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
        className="w-full text-[12px] sm:text-sm px-2 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />

      {isPassword && value.length > 0 && (
        <img
          onClick={handleShowPassword}
          src={isShowPassword ? EyePasswordShow : EyePasswordHide}
          className="absolute sm:top-9 top-8 right-3 font-light w-4 cursor-pointer"
          alt="Toggle Password Visibility"
        />
      )}

      {/* Display Password Strength */}
      {isPasswordStrength && value.length > 0 && isPassword && (
        <div className="mt-2 flex justify-between">
          {isPasswordStrength && value.length > 0 && (
            <div className="text-sm text-red-500">
              {
                Object.entries(passwordRules)
                  .map(([key, rule]) => {
                    const isRulePassed = rules.includes(key as PasswordRuleKey);
                    if (!isRulePassed) {
                      return <span key={key}>{rule.label}</span>; // Only first failing rule
                    }
                    return null;
                  })
                  .filter(Boolean)[0]
              }
            </div>
          )}

          <span
            className={`text-sm text-gray-600 ${
              strengthLabel === "Weak"
                ? "text-red-500"
                : strengthLabel === "Good"
                ? "text-yellow-500"
                : "text-green-500"
            }`}
          >
            {strengthLabel}
          </span>
        </div>
      )}
    </div>
  );
};

export default memo(ControlledInput);
