import { ChangeEvent, FunctionComponent, MouseEvent, useState } from "react";
import { UserSignIn } from "../../../types";
import { useUserAuth } from "../../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";
import Button from "../../../components/ui/Button";
import ControlledInput from "../../../components/form/ControlledInput";

// interface ISignUpProps {} <ISignUpProps>
type InputTypes = {
  id: number;
  type: string;
  name: keyof UserSignIn;
  placeholder: string;
  label:string;
  isRequired?: boolean;
};
const initialValue: UserSignIn = {
  userName: "",
  email: "",
  password: "",
  confirmPassword: "",
};
const SignUp: FunctionComponent = () => {
  const [userSignupInfo, setUserSignupInfo] = useState<UserSignIn>(initialValue);

  const { googleSignIn, signUp } = useUserAuth();
  const navigate = useNavigate();

  const inputTypes: InputTypes[] = [
    {
      id: 1,
      type: "text",
      name: "userName",
      placeholder: "User Name",
      label:"User Name",
      isRequired: true,
    },
    {
      id: 2,
      type: "email",
      name: "email",
      placeholder: "Email",
      label: "Email",
      isRequired: true,
    },
    {
      id: 3,
      type: "password",
      name: "password",
      placeholder: "Password",
      label: "Password",
      isRequired: true,
    },
    {
      id: 4,
      type: "password",
      name: "confirmPassword",
      placeholder: "Confirm Password",
      label: "Confirm Password",
      isRequired: true,
    },
  ];

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserSignupInfo((prev) => ({ ...prev, [name as keyof UserSignIn]: value }));
  };

  const handleSubmit = async (e: MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    const {userName, email, password, confirmPassword} = userSignupInfo;

    // validation
    if(!userName || !email || !password || !confirmPassword){
      alert('Please fill all the fields');
      return;
    }

    if(password.length < 6){
      alert('Password must have atleast 6 characters long.')
      return;
    }

    if(password !== confirmPassword){
      alert('password do not match.');
      return;
    }

    try {
      await signUp(email, password);
      setUserSignupInfo(initialValue);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async (e: MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      await navigate("/");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <section className="min-h-dvh flex items-center justify-center bg-amber-50">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md sm:p-6 p-4 bg-white shadow-md rounded-lg sm:min-h-auto min-h-dvh content-center"
      >
        <div className="text-center text-gray-500 mb-2 sm:mb-4">
          <h1 className="text-xl sm:text-2xl font-bold text-gray-800">
            Create your Authify account
          </h1>
          <p className="text-[12px] sm:text-sm">
            Please fill in your details to get started
          </p>
        </div>

        <h2 className="text-xl sm:text-2xl font-semibold mb-3 sm:mb-6 text-center text-gray-800">
          Sign Up
        </h2>

        {inputTypes.map(
          ({ id, type, name, placeholder = "", label,isRequired = false }) => (
            <ControlledInput
            key={id}
            type={type}
            name={name}
            value={userSignupInfo[name]}
            placeholder={placeholder}
            label={label}
            isRequired={isRequired}
            onChange={handleChange}
            isPasswordStrength
          />
          )
        )}

        <Button type="submit" label="Sign Up" isSignupIcon isSecondary isFullWidth  className="mb-2" />
        <div className="flex items-center justify-center gap-2.5 mb-2 text-gray-400">
          <hr className="w-30" />
          or
          <hr className="w-30" />
        </div>

        <Button
          onClick={handleGoogleSignIn}
          type="button"
          label=" Google SignIn"
          isPrimary
          isFullWidth={true}
          isGoogle={true}
           className="mb-2"
        />

        <p className="text-[12px] sm:text-sm text-center mt-3">
          Already have an account?{" "}
          <Link to="/login" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </form>
    </section>
  );
};
export default SignUp;
