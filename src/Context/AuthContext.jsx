import React, { createContext, useEffect, useState } from "react";
import { app } from "../FirebaseConfig/firebase";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import useAxiosPublic from "../hooks/useAxiosPublic";

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const axiosPublic = useAxiosPublic();
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);

      if (user) {
        axiosPublic
          .post("jwt", { email: user.email })
          .then((data) => {
            const token = data.data?.token;
            localStorage.setItem("accessToken", token);
          })
          .catch((error) => {
            console.log(error.message);
          });
      } else {
        localStorage.removeItem("accessToken");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authUser = {
    user,
    createUser,
    signIn,
    googleSignIn,
    logOut,
    loading,
  };
  return (
    <UserContext.Provider value={authUser}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
