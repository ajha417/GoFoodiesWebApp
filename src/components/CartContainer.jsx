import React from 'react'
import { MdKeyboardBackspace } from 'react-icons/md'
import { RiRefreshFill } from 'react-icons/ri'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

import { motion } from 'framer-motion'
import EmptyCart from '../img/emptyCart.svg'
import CartItem from './CartItem'

function CartContainer() {

    const [{ cartShow, cartItems, user }, dispatch] = useStateValue();
    const hideCart = () => {
        dispatch({
            type: actionType.SET_CART_SHOW,
            cartShow: !cartShow,
        })
    }


    return (
        <motion.div
            initial={{ opacity: 0, x: 200 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: 200 }}
            className='w-full md:w-375 z-[101] h-screen drop-shadow-md flex flex-col bg-white fixed top-0 right-4'>
            <div className='w-full flex items-center justify-between p-4 cursor-pointer'>
                <motion.div whileTap={{ scale: 0.75 }} onClick={hideCart}>
                    <MdKeyboardBackspace className='text-textColor text-3xl' />
                </motion.div>
                <p className='text-textColor text-lg font-semibold'>Cart</p>
                <motion.p whileTap={{ scale: 0.75 }} className='flex items-center gap-2  p-1 px-2 my-2 bg-gray-100 rounded-md
                hover:shadow-md  cursor-pointer text-textColor text-base'>
                    Clear <RiRefreshFill />
                </motion.p>
            </div>
            {/* bottom cart section */}
            {
                cartItems && cartItems.length > 0 ? (

                    <div className='w-full h-full rounded-t-[2rem] bg-gradient-to-bl from-pink-200 to-pink-900 shadow-2xl flex flex-col'>
                        <div className='w-full h-340 md:h-442 px-6 py-10 flex flex-col gap-3 overflow-y-scroll
                scrollbar-none'>
                            {/* cart Items */}
                            {
                                cartItems && cartItems.map((item) => (
                                    <CartItem key={item.id} data={item}/>
                                ))
                            }

                        </div>

                        {/* cart total section */}
                        <div className='w-full flex-1 bg-gradient-to-bl from-cartInitial to-cartFinal rounded-t-[2rem] flex flex-col
            items-center justify-evenly px-8 py-2'>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-gray-900 text-lg'>Sub Total</p>
                                <p className='text-gray-900 text-lg'>
                                    <span className='text-lg text-red-600'>&#8377; </span>
                                    338
                                </p>
                            </div>
                            <div className='w-full flex items-center justify-between'>
                                <p className='text-gray-900 text-lg'>Delivery</p>
                                <p className='text-gray-900 text-lg'>
                                    <span className='text-lg text-red-600'>&#8377; </span>
                                    70
                                </p>
                            </div>
                            {/* divider */}
                            <div className='w-full border-b border-gray-600 my-2'></div>

                            <div className='w-full flex items-center justify-between'>
                                <p className='text-gray-600 text-xl font-semibold'>Total</p>
                                <p className='text-gray-600 text-xl font-semibold'>
                                    <span className='text-lg text-red-600'>&#8377; </span>
                                    489
                                </p>
                            </div>

                            {
                                user ? (
                                    <motion.button
                                        whileTap={{ scale: 0.8 }}
                                        type='button'
                                        className='w-full p-2 rounded-full bg-gradient-to-bl from-pink-300 to-pink-900 text-gray-50 text-lg my-2
                                        hover:shadow-lg '
                                    >
                                        Check out
                                    </motion.button>
                                ):(
                                    <motion.button
                                        whileTap={{ scale: 0.8 }}
                                        type='button'
                                        className='w-full p-2 rounded-full bg-gradient-to-bl from-pink-300 to-pink-900 text-gray-50 text-lg my-2
                                        hover:shadow-lg '
                                    >
                                        Login to check out
                                    </motion.button>
                                )
                    }
                        </div>
                    </div>
                ) :
                    (
                        <div className='w-full h-full flex flex-col items-center justify-center gap-6'>
                            <img src={EmptyCart} className='w-300' alt="Empty" />
                            <p className='text-xl text-textColor font-semibold'>
                                Add some items to your cart
                            </p>
                        </div>
                    )
            }
        </motion.div>
    )
}

export default CartContainer
