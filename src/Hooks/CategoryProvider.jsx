import { createContext, useContext, useEffect, useState } from 'react';
import auth from "../Pages/Authentication/firebase.config";
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
const CategoryContext = createContext();
const GoogleProvider = new GoogleAuthProvider();

export const CategoryProvider = ({ children }) => {
  const [Selected, setSelected] = useState('all');
  const [searchedItem, setSearchedItem] = useState('all');
  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);

  const GoogleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, GoogleProvider)
  }
  //LogOut
  const SignOut = () => {
    setLoading(true);
    return signOut(auth)
  }

  // Create User

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password)
  }
  // Login User

  const LoginUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password)
  }

  useEffect(() => {
    const unSubscribe = onAuthStateChanged(auth, async (currentUser) => {
      setUser(currentUser);
      console.log('Logged in User', currentUser);

      if (currentUser) {
        await updateUserData(currentUser);
      }

      setLoading(false);
    });

    return () => {
      unSubscribe();
    }
  }, []);

  return (
    <CategoryContext.Provider value={{ loading, GoogleSignIn, SignOut, createUser, LoginUser, user, Selected, setSelected, searchedItem, setSearchedItem }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCustomHook = () => {
  return useContext(CategoryContext);
};
