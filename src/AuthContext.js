import React, { useContext, useState } from 'react'
import { auth } from '../firebase'
const AuthContext = react.createContent()

export function useAuth() {
    return useContext(AuthContext)
}

export default function AuthProvider({ children }) {
    const [currentUser, setcurrentUser]



    const value = {
        currentUser
    }
    return (
        <AuthContext.Provider value={value}>
            {children}
        </AuthContext.Provider>
    )
}
