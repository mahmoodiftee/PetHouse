import { createContext, useContext, useEffect, useState } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from 'firebase/auth';
import { auth } from '../Pages/Authentication/firebase.config';
export const CategoryContext = createContext();

const CategoryProvider = ({ children }) => {
  const GoogleProvider = new GoogleAuthProvider();
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
    const unSubscribe = onAuthStateChanged(auth, currentUser => {
      setUser(currentUser);
      console.log('Observing Current User', currentUser);
      setLoading(false); 
    });
    return () => {
      unSubscribe();
    }
  }, [])

  return (
    <CategoryContext.Provider value={{ loading, GoogleSignIn, SignOut, createUser, LoginUser, user, Selected, setSelected, searchedItem, setSearchedItem }}>
      {children}
    </CategoryContext.Provider>
  );
};
export default CategoryProvider;

export const useCustomHook = () => {
  return useContext(CategoryContext);
};
