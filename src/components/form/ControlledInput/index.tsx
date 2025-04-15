import { ChangeEvent, FunctionComponent, memo } from "react";

interface IControlledInput {
  type: string;
  name: string;
  value: string;
  placeholder: string;
  label: string;
  isRequired: boolean;
  onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

const ControlledInput: FunctionComponent<IControlledInput> = ({
  type,
  name,
  value,
  placeholder,
  label,
  isRequired,
  onChange,
}) => {
  return (
    <div className="mb-3 sm:mb-4">
      <label
        htmlFor={name}
        className="text-left block text-[12px] sm:text-sm font-medium text-gray-700 mb-1"
      >
        {label}:
      </label>
      <input
        type={type}
        name={name}
        value={value}
        placeholder={placeholder}
        required={isRequired}
        onChange={onChange}
        className="w-full text-[12px] sm:text-sm px-2 md:px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
    </div>
  );
};

export default memo(ControlledInput);
