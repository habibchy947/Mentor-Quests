import React, { useContext } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate } from 'react-router-dom';
import login from '../assets/mobile-password-forgot.png'
import { AuthContext } from './AuthProvider';
import toast from 'react-hot-toast';

const ForgetPassword = () => {
    const {handleForgetPass,forgetEmail} = useContext(AuthContext)
    const handleRedirect = () =>{
        window.location.href='https://mail.google.com/mail/u/0/?tab=rm&ogbl#inbox'
    }
    const handleForgetPassword =(e) => {
        e.preventDefault()
        const email = e.target.email.value
        handleForgetPass(email)
        .then(()=>{
            toast.success('Send password reset email, check your inbox')
            e.target.reset()
            handleRedirect()
        })
        .catch(err =>{
            toast.error(err)
        })
    }
    return (
        <div className='flex flex-col md:flex-row lg:w-2/3 md:w-10/12  mx-auto'>
            <Helmet>
                <title>Mentor Quest | Login</title>
            </Helmet>
            <div className='md:w-2/5  flex md:flex-col flex-row justify-between bg-cyan-600 px-6 py-8 text-white'>
                <div className='flex-1'>
                    <h2 className='text-2xl font-semibold mb-4'>Login</h2>
                    <p>Stay in touch with us by log in with your personal information</p>
                </div>
                <div className=' flex justify-center md:items-end flex-1'>
                    <img className='h-36 ' src={login} alt="" />
                </div>
            </div>
            <div className='md:w-3/5 bg-white py-8 md:px-10 px-6 space-y-4'>
            <div className='text-center space-y-4 py-2'>
                <h3 className='md:text-3xl text-2xl font-semibold'>Forgot your password ?</h3>
                <p>Provide your email to regain access your account</p>
            </div>
                <div className=''>
                    <form onSubmit={handleForgetPassword} className='space-y-5 py-3' action="">
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
                            <input name='email' type="email" className="grow " value={forgetEmail} required placeholder="Enter Email" />
                        </label>
                        
                        <button className='btn bg-cyan-600 w-full text-white'>Reset Password</button>
                    </form>
                    <p className='pt-3 text-center'>Return to <Link to='/authLayout/login' className='text-cyan-600 font-semibold'>Login</Link></p>
                </div>
            </div>
        </div>
    );
};

export default ForgetPassword;