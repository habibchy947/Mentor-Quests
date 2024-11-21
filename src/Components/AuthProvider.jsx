import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { createContext, useEffect, useState } from 'react';
import auth from '../Firebase/firebase-init';
import toast from 'react-hot-toast';
export const AuthContext = createContext(null)
const AuthProvider = ({ children }) => {
    const [loading,setLoading] = useState(true);
    const [user, setUser] = useState(null)
    const [forgetEmail,setForgetEmail] = useState('')
    const [services,setServices] = useState([])
    const [selectedServices,setSelectedServices] = useState([])
    const googleProvider = new GoogleAuthProvider()
    useEffect(()=>{
        fetch('services.json')
        .then(res => res.json())
        .then(data => setServices(data))
    },[])
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
    const handleBooking = (single) => {
       const isExist = selectedServices.find(serve => serve.id === single.id)
       if(isExist){
            toast.error('this course is already booked')
            return
       }else{
        const newBookedService = [...selectedServices,single]
        setSelectedServices(newBookedService)
        toast.success('this course is booked, check dashboard')
       }
    }
    const handleCancel = (id) =>{
        const remaining = selectedServices.filter(remain => remain.id !== id)
        setSelectedServices(remaining)
        toast.success('your booking of this course cancelled')
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
        loading,
        forgetEmail,
        setForgetEmail,
        handleBooking,
        setSelectedServices,
        selectedServices,
        handleCancel,
        services
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;