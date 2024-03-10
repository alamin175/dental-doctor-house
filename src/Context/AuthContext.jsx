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

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [user, setUser] = useState(null);
  // console.log(user);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      if (user) {
      }
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
  };
  return (
    <UserContext.Provider value={authUser}>{children}</UserContext.Provider>
  );
};

export default AuthContext;
