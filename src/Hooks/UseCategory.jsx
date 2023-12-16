import { createContext, useState } from "react";

export const CategoryContext = createContext(null)
export const UseCategory = ({ children }) => {
    const [Selected, setSelected] = useState('all');
    console.log(Selected);

    const info = { setSelected };
    return (
        <div>
            <CategoryContext.Provider value={info}>
                {children}
            </CategoryContext.Provider>
        </div>
    );
};
export default UseCategory;

