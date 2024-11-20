import React, { useContext, useState } from 'react';
import login from '../assets/mobile-password-forgot.png'
import { FaGoogle, FaRegEyeSlash } from 'react-icons/fa6';
import { Link, useNavigate } from 'react-router-dom';
import { FaPhotoFilm } from "react-icons/fa6";
import { FaRegEye } from "react-icons/fa6";
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';
import { Helmet } from 'react-helmet-async';
const Register = () => {
    const {handleGoogleSignIn,handleSignUp,setUser,updateUserProfile,setLoading} = useContext(AuthContext)
    const [eye,setEye] = useState(false)
    const navigate = useNavigate()
    const handleRegister = (e) => {
        e.preventDefault()
        const name = e.target.name.value
        const email = e.target.email.value;
        const photo = e.target.photo.value;
        const password = e.target.password.value;
        console.log(name,email,password)
        if(!/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/.test(password)){
            toast.error('Password should be at least 6 character with one upperCase and one lowerCase letter')
            return
        }else{
            toast.success('Your account has been created')
        }
        handleSignUp(email,password)
        .then(result =>{
            setUser(result.user)
            e.target.reset()
            updateUserProfile({
                displayName:name,
                photoURL:photo
            })
            .then(()=>{
                navigate('/')
            })
            .catch(err => {
                console.log(err)
            })
        })
        .catch(err =>{
            console.log(err)
            toast.error('your password or email is not valid')
        })
    }
    const handleGoogle =(e) => {
        e.preventDefault()
        handleGoogleSignIn()
        .then(()=>{
            navigate('/')
            toast.success('Your are logged in')
        })
    }
    return (
        <div className='flex flex-col md:flex-row lg:w-2/3 md:w-10/12  mx-auto'>
            <Helmet>
                <title>Mentor Quest | Register</title>
            </Helmet>
            <div className='md:w-2/5 flex md:flex-col flex-row justify-between bg-cyan-600 px-6 py-8 text-white'>
                <div className='flex-1'>
                    <h2 className='text-2xl font-semibold mb-4'>Register</h2>
                    <p>Provide your personal details to begin your journey with us</p>
                </div>
                <div className=' flex flex-1 md:items-end  justify-center'>
                    <img className='h-36 ' src={login} alt="" />
                </div>
            </div>
            <div className='md:w-3/5 bg-white py-8 md:px-10 px-6 space-y-4'>
                <div className='flex justify-center'>
                    <button onClick={handleGoogle} className='px-4 py-2 text-xl rounded-2xl border-2 flex items-center gap-2'>Login with<span className='text-cyan-600'>Google</span> <span className='text-cyan-600'><FaGoogle /></span></button>
                </div>
                <div className="divider py-4">or create an account</div>
                <div className=''>
                    <form onSubmit={handleRegister} className='space-y-4 py-3' action="">
                        {/* name field */}
                        <label className="input  input-bordered flex items-center gap-2">
                            <input name='name' type="text" className="grow " required  placeholder="Enter Your Name" />
                        </label>
                        {/* email field */}
                        <label className="input  input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                                <path
                                    d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
                            </svg>
                            <input name='email' type="email" className="grow " required placeholder="Enter Email" />
                        </label>
                        {/* photoURL field */}
                        <label className="input  input-bordered flex items-center gap-2">
                            <span><FaPhotoFilm/></span>
                            <input name='photo' type="text" className="grow " required  placeholder="Enter Photo URL" />
                        </label>
                        {/* password field */}
                        <label className="input input-bordered flex items-center gap-2">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 16 16"
                                fill="currentColor"
                                className="h-4 w-4 opacity-70">
                                <path
                                    fillRule="evenodd"
                                    d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                                    clipRule="evenodd" />
                            </svg>
                            <input name='password' type={eye ? 'text' : 'password'} className="grow" required placeholder='Enter Password' />
                            <span onClick={()=>setEye(!eye)}>
                                {
                                eye ? <FaRegEyeSlash/> : <FaRegEye/>
                                }</span>
                        </label>
                        <button className='btn bg-cyan-600 w-full text-white'>Register</button>
                    </form>
                    <p className='pt-3 text-center'>Already have an account ? please <Link to='/authLayout/login' className='text-cyan-600 font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default Register;