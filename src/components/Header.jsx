import React from 'react'
import Logo from '../img/logo.png'
import { FaShoppingBag } from 'react-icons/fa'
import { MdLogout, MdAdd } from 'react-icons/md'
import Avatar from '../img/avatar.png'
// import { app } from '../firebase.config'
import { app } from '../firebase.config.js'
import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { async } from '@firebase/util'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'
import { useState } from 'react'

function Header() {
    const firebaseAuth = getAuth();
    const provider = new GoogleAuthProvider()

    const [{ user, cartShow, cartItems }, dispatch] = useStateValue();

    const [isMenu, setIsMenu] = useState(false)

    const login = async () => {
        if (!user) {

            const { user: { refreshToken, providerData } } = await signInWithPopup(firebaseAuth, provider)
            dispatch({
                type: actionType.SET_USER,
                user: providerData[0]
            });
            localStorage.setItem("user", JSON.stringify(providerData[0]));
        }
        else {
            setIsMenu(!isMenu);
        }
    };

    const logout = () => {
        setIsMenu(false);
        localStorage.clear();
        dispatch({
            type: actionType.SET_USER,
            user: null
        });
    }
    const showCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        })
    }
    return (
        <header className='fixed z-50 w-screen  p-3 px-4 md:p-6 md:px-16 bg-primary'>
            {/* this is for desktop and tablet */}
            <div className='hidden md:flex w-full h-full p-4 item-center justify-between'>
                <Link to={"/"} className='flex item-center gap-2'>
                    <img src={Logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>Go Foodies</p>
                </Link>
                <div className='flex items-center gap-8'>
                    <motion.ul
                        initial={{ opacity: 0, x: 200 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 200 }}
                        className='flex items-center gap-8'>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>Home</li>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>Menu</li>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>About Us</li>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer' onClick={() => setIsMenu(false)}>Service</li>
                    </motion.ul>
                    <div className='relative flex items-center justify-center' onClick={showCart}>
                        <FaShoppingBag className='text-textColor  text-2xl hover:red cursor-pointer' />
                        {
                            cartItems && cartItems.length > 0 && (
                                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                    <p className='text-xs font-semibold text-white'>{cartItems.length}</p>
                                </div>
                            )
                        }
                    </div>
                    <div className='relative'>
                        <motion.img
                            whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar}
                            className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer'
                            alt="avatar" onClick={login} />
                        {
                            isMenu && (
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.6 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.6 }}
                                    className='w-40 bg-primary shadow-xl flex flex-col rounded-lg absolute top-11 right-0'>
                                    {
                                        user && user.email === "amitjhasmart@gmail.com" && (
                                            <Link to={'/createItem'}>
                                                <p className='px-4 py-3 cursor-pointer items-center flex gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base' onClick={() => setIsMenu(false)}>New Item <MdAdd /></p>
                                            </Link>
                                        )
                                    }
                                    <p className='px-4 py-3 cursor-pointer items-center flex gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base' onClick={logout}>Logout <MdLogout /></p>
                                </motion.div>
                            )
                        }
                    </div>

                </div>
            </div>
            {/* this is for mobile */}
            <div className='flex items-center justify-between md:hidden w-full h-full  p-4'>
                <div className='relative flex items-center justify-center cursor-pointer' onClick={showCart}>
                    <FaShoppingBag className='text-textColor  text-2xl hover:red cursor-pointer' />
                    {
                            cartItems && cartItems.length > 0 && (
                                <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                                    <p className='text-xs font-semibold text-white'>{cartItems.length}</p>
                                </div>
                            )
                        }
                </div>
                <Link to={"/"} className='flex item-center gap-2'>
                    <img src={Logo} alt="logo" className='w-8 items-center object-cover' />
                    <p className='text-headingColor text-xl font-bold'>Go Foodies</p>
                </Link>
                <div className='relative'>
                    <motion.img
                        whileTap={{ scale: 0.6 }} src={user ? user.photoURL : Avatar}
                        className='w-10 min-w-[40px] h-10 min-h-[40px] rounded-full drop-shadow-xl cursor-pointer'
                        alt="avatar" onClick={login} />
                    {
                        isMenu && (
                            <motion.div
                                initial={{ opacity: 0, scale: 0.6 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.6 }}
                                className='w-40 bg-primary shadow-xl flex flex-col rounded-lg absolute top-11 right-0'>
                                {
                                    user && user.email === "amitjhasmart@gmail.com" && (
                                        <Link to={'/createItem'}>
                                            <p className='px-4 py-3 cursor-pointer items-center flex gap-3 hover:bg-slate-200 transition-all duration-100 ease-in-out text-textColor text-base'>New Item <MdAdd /></p>
                                        </Link>

                                    )
                                }
                                <ul
                                    className='flex flex-col'>
                                    <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>Home</li>
                                    <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>Menu</li>
                                    <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>About Us</li>
                                    <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer hover:bg-slate-200 px-4 py-2'>Service</li>
                                </ul>
                                <p className='px-4 py-3 cursor-pointer items-center flex gap-3 m-2 p-2 rounded-md shadow-lg hover:bg-slate-300 transition-all duration-100 ease-in-out bg-gray-200 justify-center text-textColor text-base' onClick={logout}>Logout <MdLogout /></p>
                            </motion.div>
                        )
                    }
                </div>
            </div>
        </header>
    )
}

export default Header