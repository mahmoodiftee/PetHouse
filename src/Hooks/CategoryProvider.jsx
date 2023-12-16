import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [Selected, setSelected] = useState('all');
  console.log(Selected);

  return (
    <CategoryContext.Provider value={{ Selected, setSelected }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
