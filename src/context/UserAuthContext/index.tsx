import {
  createContext,
  FunctionComponent,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { auth } from "../../firebaseConfig";
import {
  GoogleAuthProvider,
  User,
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

interface IUserAuthProviderProps {
  children: ReactNode;
}

type AuthContextData = {
  user: User | null;
  logIn: (email: string, password: string) => void;
  signUp: (email: string, password: string) => void;
  logOut: (onSuccess?: () => void) => void;
  googleSignIn: () => void;
};

const UserAuthContext = createContext<AuthContextData>({
  user: null,
  logIn: async () => {},
  signUp: async () => {},
  logOut: async () => {},
  googleSignIn: async () => {},
});

const UserAuthProvider: FunctionComponent<IUserAuthProviderProps> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      console.log(`The Logged user state is: ${user}`);
      setUser(user);
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const logIn = async (email: string, password: string) => {
    try {
      await signInWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(`Login error ${error}`);
    }
  };

  const signUp = async (email: string, password: string) => {
    try {
      await createUserWithEmailAndPassword(auth, email, password);
    } catch (error) {
      console.log(`signup error: ${error}`);
    }
  };

  const logOut = async (onSuccess?: () => void) => {
    try {
      signOut(auth);
      if (onSuccess) onSuccess();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const googleSignIn = () => {
    const googleAuthProvider = new GoogleAuthProvider();
    return signInWithPopup(auth, googleAuthProvider);
  };

  return (
    <UserAuthContext.Provider
      value={{
        user,
        logIn,
        signUp,
        logOut,
        googleSignIn,
      }}
    >
      {children}
    </UserAuthContext.Provider>
  );
};

export const useUserAuth = () => useContext(UserAuthContext);

export default UserAuthProvider;
