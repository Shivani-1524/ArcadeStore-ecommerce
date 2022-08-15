import { createContext, useContext, useState } from 'react'


type ProviderProps = {
    children: JSX.Element
}

interface ContextProps {
    isLoggedIn: string | false;
    setIsLoggedIn: React.Dispatch<React.SetStateAction<string | false>>;
}

const defaultValue: ContextProps = {
    isLoggedIn: false,
    setIsLoggedIn: ()=> console.error("attempting to use AuthContext outside of a valid provider"),
}

const UserContext = createContext<ContextProps>(defaultValue);
const useAuth = () => useContext(UserContext)

const UserProvider = ({ children } : ProviderProps) => {
    let loggedToken = localStorage.getItem('userToken') || false
    const [isLoggedIn, setIsLoggedIn] = useState<string | false>(loggedToken);
    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, useAuth }