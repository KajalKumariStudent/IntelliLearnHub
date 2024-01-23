import {createContext, useContext, useState} from "react"

export const UserContext = createContext({

    users: [{
        id:1,
        name :"kajal",
        eMail : "kajal@email.com",
        gender : "Female",
        password : "123kajal",
        contact : 9508282895
    }],
    addUser: () => {},
   
       
})



export const useContextUser = () => {
    
    return useContext(UserContext)
}

export const UserProvider = UserContext.Provider





