import React, { useState } from "react";
import { UserLogin } from "../../types";
import { useUserAuth } from "../../context/UserAuthContext";
import { Link, useNavigate } from "react-router-dom";

interface ILoginProps {}
type InputTypes = {
  id: number;
  type: string;
  name: keyof UserLogin;
  placeholder: string;
};
const initialValue: UserLogin = {
  email: "",
  password: "",
};

const Login: React.FunctionComponent<ILoginProps> = () => {
  const [userLoginInfo, setUserLoginInfo] = useState<UserLogin>(initialValue);

  const { googleSignIn, logIn } = useUserAuth();
  const navigate = useNavigate();

  const inputTypes: InputTypes[] = [
    { id: 2, type: "email", name: "email", placeholder: "Email" },
    { id: 3, type: "password", name: "password", placeholder: "Password" },
  ];

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserLoginInfo((prev) => ({ ...prev, [name as keyof UserLogin]: value }));
  };

  const handleSubmit = async (e: React.MouseEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await logIn(userLoginInfo.email, userLoginInfo.password);
      setUserLoginInfo(initialValue);
      navigate("/home");
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
              value={userLoginInfo[name]}
              onChange={handleChange}
            />
          </div>
        ))}
        <button  type="submit">Login</button>
      </form>
      <button onClick={handleGoogleSignIn}>Google SignIn</button>
      <br></br>
      <button><Link to={'/signup'}>Go to Sign Up</Link></button>
    </div>
  );
};

export default Login;
