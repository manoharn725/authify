import React, { useState } from "react";
import { UserSignIn } from "../../types";
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../components/Button";

// interface ISignUpProps {} <ISignUpProps>
type InputTypes = {
  id: number;
  type: string;
  name: keyof UserSignIn;
  placeholder: string;
};
const initialValue: UserSignIn = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp: React.FunctionComponent = () => {
  const [userInfo, setUserInfo] = useState<UserSignIn>(initialValue);

  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();

  const inputTypes: InputTypes[] = [
    { id: 1, type: "text", name: "userName", placeholder: "User Name" },
    { id: 2, type: "email", name: "email", placeholder: "Email" },
    { id: 3, type: "password", name: "password", placeholder: "Password" },
    {
      id: 4,
      type: "text",
      name: "confirmPassword",
      placeholder: "Confirm Password",
    },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo((prev) => ({ ...prev, [name as keyof UserSignIn]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await signUp(userInfo.email, userInfo.password);
      setUserInfo(initialValue);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      await navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div className="min-h-[calc(100vh-4rem)] flex items-center justify-center bg-amber-50">
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-md p-6 bg-white shadow-md rounded-lg"
    >
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Sign Up
      </h2>
  
      {inputTypes.map(({ id, type, name, placeholder }) => (
        <div key={id} className="mb-4">
          <label
            htmlFor={name}
            className="text-left block text-sm font-medium text-gray-700 mb-1"
          >
            {placeholder}:
          </label>
          <input
            type={type}
            name={name}
            placeholder={placeholder}
            value={userInfo[name]}
            onChange={handleChange}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
      ))}
  
      <Button type="submit" label="Sign Up" className="w-full" />


      <Button onClick={handleGoogleSignIn} type="button" label="Google SignIn" className="w-full bg-red-500 hover:bg-red-600" />
  
      <p className="text-sm text-center">
        Already have an account?{" "}
        <Link to="/login" className="text-blue-600 hover:underline">
          Login
        </Link>
      </p>
    </form>
  </div>
  
  );
};
export default SignUp;
