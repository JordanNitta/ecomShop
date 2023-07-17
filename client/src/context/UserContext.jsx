import React from 'react'
import { createContext, useState } from 'react'
import axios from 'axios'
const UserContext = createContext({})

export const UserProvider = ({ children }) => {
    const [loggedUser, setLoggedUser] = useState()


    return (
        <UserContext.Provider value={{  loggedUser, setLoggedUser }}>
            { children }
        </UserContext.Provider>
    )
}
export default UserContext
