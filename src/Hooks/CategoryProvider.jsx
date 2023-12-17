import { createContext, useContext, useState } from 'react';

const CategoryContext = createContext();

export const CategoryProvider = ({ children }) => {
  const [Selected, setSelected] = useState('all');
  const [searchedItem, setSearchedItem] = useState('all');
  console.log(Selected);
  console.log(searchedItem);

  return (
    <CategoryContext.Provider value={{ Selected, setSelected, searchedItem, setSearchedItem }}>
      {children}
    </CategoryContext.Provider>
  );
};

export const useCategory = () => {
  return useContext(CategoryContext);
};
