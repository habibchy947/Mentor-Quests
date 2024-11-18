import React from 'react';
import { NavLink } from 'react-router-dom';
import { MdFacebook } from "react-icons/md";
import { RiInstagramLine } from "react-icons/ri";
import { FaXTwitter } from "react-icons/fa6";
import { FaYoutube } from "react-icons/fa6";
const Footer = () => {
    return (
        <div>
            <footer className=" gap-4 footer md:flex-row text-base-content py-10 w-11/12 mx-auto">
                <aside>
                    <NavLink to='/' className=" text-5xl font-bold"><span className='text-orange-400'>Mentor</span><span className='text-cyan-600'> Quest</span></NavLink>
                    <p className=''>
                        Empowering growth throw meaningful<br />collections.Join a thriving community<br />where mentors and mentees collaborate<br /> to unlock potential.
                    </p>
                    <div className="join">
                        <input
                            type="text"
                            placeholder="username@gmail.com"
                            className="input  join-item" />
                        <button className="btn bg-cyan-600 text-white join-item">Subscribe</button>
                    </div>
                    <div className='flex gap-3'>
                        <span className='text-2xl text-blue-600'><MdFacebook></MdFacebook></span>
                        <span className='text-2xl text-pink-600'><RiInstagramLine></RiInstagramLine></span>
                        <span className='text-2xl text-neutral'><FaXTwitter></FaXTwitter></span>
                        <span className='text-2xl text-red-600'><FaYoutube></FaYoutube></span>
                    </div>
                </aside>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-xl text-cyan-700">Services</h6>
                    <a className="link link-hover">Networking Strategies</a>
                    <a className="link link-hover">Skill Building Workshop</a>
                    <a className="link link-hover">Resume Review</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-xl text-cyan-700">Support</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='space-y-2'>
                    <h6 className="footer-title text-xl text-cyan-700">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
            </footer>
            <div className=' divider mb-0 py-5'></div>
            <p className='text-center text-cyan-700 pb-4'>&copy; 2024 Mentor Quest, ALl rights reserved.</p>
        </div>
    );
};

export default Footer;