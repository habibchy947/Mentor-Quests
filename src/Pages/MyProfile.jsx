import React, { useContext } from 'react';
import { AuthContext } from '../Components/AuthProvider';
import { IoPersonCircleOutline } from "react-icons/io5";
import { FaPhotoFilm } from 'react-icons/fa6';
import toast from 'react-hot-toast';
const MyProfile = () => {
    const { user,setUser ,updateUserProfile} = useContext(AuthContext)
    const handleUpdate = (e) => {
        e.preventDefault()
        const name = e.target.name.value;
        const photo = e.target.photo.value;
        updateUserProfile({
            displayName: name,
            photoURL:photo
        })
        .then(()=>{
            setUser({
                ...user,
                displayName:name,
                photoURL:photo
            })
            e.target.reset()
            toast.success('your profile is updated')
        })
    }
    return (
        <div className='md:w-5/12 w-10/12 py-5 rounded-lg mx-auto '>
           <div className='bg-white shadow-lg rounded-xl'>
           <div className='flex relative mb-14 md:mb-20 justify-center rounded-t-lg py-14 md:py-20 bg-cyan-500 items-center'>
                <div className='absolute top-10  rounded-full'>
                    {
                        user.photoURL
                            ?
                            <img className='md:h-52 h-32 w-32 md:w-52 rounded-full object-cover' src={user?.photoURL} alt="" />
                            : ''
                    }
                </div>
            </div>
            <div className='p-4 space-y-3'>
                <h2><span className='text-lg font-semibold'>Profile Name : </span><span>{user?.displayName}</span></h2>
                <h2><span className='text-lg font-semibold'>Email : </span><span>{user?.email}</span></h2>
                <h2><span className='text-lg font-semibold'>Photo URL : </span><span>{user?.photoURL}</span></h2>
                <p className='text-xl font-semibold text-cyan-600 pt-5'>Update Profile</p>
                <div className="divider"></div>
            </div>
            <div className='px-4 pb-4'>
                <form onSubmit={handleUpdate} className='space-y-4' action="">
                    {/* name field */}
                    <label className="input  input-bordered flex items-center gap-2">
                        <input name='name' type="text" className="grow " required placeholder="Enter Your Name" />
                    </label>
                    {/* photoURL field */}
                    <label className="input  input-bordered flex items-center gap-2">
                        <span><FaPhotoFilm /></span>
                        <input name='photo' type="text" className="grow " required placeholder="Enter Photo URL" />
                    </label>
                    <button className='btn bg-cyan-600 w-full text-white'>Save changes</button>
                </form>
            </div>
           </div>

        </div>
    );
};

export default MyProfile;