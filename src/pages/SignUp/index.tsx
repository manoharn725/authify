import React, { useState } from "react";
import { UserSignIn } from "../../types";
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

interface ISignUpProps {}
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
const SignUp: React.FunctionComponent<ISignUpProps> = () => {
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
      setUserInfo(initialValue)
      navigate('/login');    
    } catch (error) {
      console.log(error);
    }
  };

  const handleGoogleSignIn = async (e: React.MouseEvent<HTMLElement>) => {
    e.preventDefault();
    try {
      await googleSignIn();
      await navigate("/home");
    } catch (error) {
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        {inputTypes.map(({ id, type, name, placeholder }) => (
          <div key={id}>
            <label htmlFor={name}>{placeholder}:</label>
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              value={userInfo[name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button type="submit">Sign Up</button>
      </form>
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
      <br></br>
            <button><Link to={'/login'}>Go to Login</Link></button>
    </div>
  );
};
export default SignUp;
