import { createContext, useContext, useState } from 'react'
import { filterReducer, initialState } from '../Reducers/FilterReducer'

const UserContext = createContext()
const useAuth = () => useContext(UserContext)

const UserProvider = ({ children }) => {
    let loggedToken = localStorage.getItem('userToken')
    const [isLoggedIn, setIsLoggedIn] = useState(loggedToken);

    return (
        <UserContext.Provider value={{ isLoggedIn, setIsLoggedIn }}>
            {children}
        </UserContext.Provider>
    )
}

export { UserProvider, useAuth }