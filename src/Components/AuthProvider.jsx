import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase-init';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [loading,setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const googleProvider = new GoogleAuthProvider()

    const handleGoogleSignIn = () => {
        return signInWithPopup(auth, googleProvider)
    }
    const handleSignUp = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const handleManualSignIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const handleSignOut =() => {
        return signOut(auth)
    }
    const updateUserProfile = (userInfo) =>{
        return updateProfile(auth.currentUser,userInfo)
    }
    const handleForgetPass = (email)=>{
        return sendPasswordResetEmail(auth,email)
    }
    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
        })
        return () => {
            unSubscribe()
        }
    }, [])
    const authInfo = {
        user,
        setUser,
        handleGoogleSignIn,
        handleSignUp,
        handleManualSignIn,
        handleSignOut,
        updateUserProfile,
        handleForgetPass,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;