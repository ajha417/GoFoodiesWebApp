import React, { useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import {motion} from 'framer-motion'
const CartItem = (item) => {
    const [qty,setQty] = useState(1);
  return (
    <div  className='w-full p-1 px-2 shadow-2xl rounded-lg bg-gradient-to-bl from-cartInitial to-cartFinal flex items-center gap-2'>
                                        <img src={item?.imageURL} alt="cartItems" className='w-20 h-20 max-w-[60px rounded-full object-contain' />
                                        {/* name section */}
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-base text-gray-700'>
                                                {item?.title}
                                            </p>
                                            <p className='text-sm block text-gray-900 font-semibold'>
                                                <span className='text-lg text-red-600'>&#8377; </span>
                                                {item?.price}
                                            </p>
                                        </div>
                                        {/* button section */}
                                        <div className='grup flex items-center gap-2 ml-auto cursor-pointer'>
                                            <motion.div whileTap={{ scale: 0.75 }}>
                                                <BiMinus className='text-gray-900 text-2xl hover:shadow-2xl' />
                                            </motion.div>
                                            <p className='w-5 h-5 rounded-md bg-pink-700 text-gray-50 flex items-center
                            justify-center'>
                                                {item?.qty}
                                            </p>
                                            <motion.div whileTap={{ scale: 0.75 }}>
                                                <BiPlus className='text-gray-900 text-2xl hover:shadow-2xl' />
                                            </motion.div>
                                        </div>
                                    </div>
  )
}

export default CartItem