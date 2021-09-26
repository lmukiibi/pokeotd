import { useState, createContext } from "react";
import LocalStorage from "../storage/LocalStorage";

export const UserContext = createContext(null);

export const UserProvider = ({children}) => {

    const [authenticatedUser, setAuthenticatedUser] = useState(null);

    const IsUserAuthenticated = () => {
        const userFromBrowerMemory = localStorage.getItem(LocalStorage.username);
        setAuthenticatedUser(userFromBrowerMemory);
    }

    return(
        <UserContext.Provider value = {[authenticatedUser, setAuthenticatedUser]}>
            {children}

        </UserContext.Provider>
    )

}