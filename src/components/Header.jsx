import React from 'react'
import Logo from './img/logo.png'
import { FaShoppingBag } from 'react-icons/fa'
import Avatar from './img/avatar.png'
function Header() {
    return (
        <header className='fixed z-50 w-screen  p-6 px-16'>
            {/* this is for desktop and tablet */}
            <div className='hidden md:flex w-full h-full p-4 item-center justify-between'>
                <div className='flex item-center gap-2'>
                    <img src={Logo} alt="logo" className='w-8 object-cover' />
                    <p className='text-headingColor text-xl font-bold'>Go Foodies</p>
                </div>
                <div className='flex items-center gap-8'>
                    <ul className='flex items-center gap-8'>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer'>Home</li>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer'>Menu</li>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer'>About Us</li>
                        <li className='text-textColor hover:text-headingColor text-base duration-100 transition-all ease-in-out cursor-pointer'>Service</li>
                    </ul>
                    <div className='relative flex items-center justify-center'>
                        <FaShoppingBag className='text-textColor  text-2xl hover:red cursor-pointer' />
                        <div className='absolute -top-2 -right-2 w-5 h-5 rounded-full bg-cartNumBg flex items-center justify-center'>
                            <p className='text-xs font-semibold text-white'>2</p>
                        </div>
                    </div>
                    <img src={Avatar} className='w-10 min-w-[40px] h-10 min-h-[40px] drop-shadow-xl' alt="avatar" />
                </div>
            </div>
            {/* this is for mobile */}
            <div className='flex md:hidden w-full h-full bg-blue-300 p-4'>

            </div>
        </header>
    )
}

export default Header