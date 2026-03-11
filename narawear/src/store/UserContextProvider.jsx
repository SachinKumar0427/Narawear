import { useState } from "react";
import { createContext } from "react";
// Addtocart items Store

export const userContext = createContext();

export default function UserContextProvider({children}){
    const [user, setUser] = useState(null)
    return(
        <userContext.Provider value={{user, setUser}}>
            {children}
        </userContext.Provider>
    )
}