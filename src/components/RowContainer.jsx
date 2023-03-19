import React from 'react'
import { MdShoppingBasket } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
import { motion } from 'framer-motion'

const RowContainer = ({ flag,data }) => {
    console.log(data)
    return (
        <div className={`w-full my-12 bg-pink-50
     ${flag ? 'overflow-x-scroll' : 'overflow-x-hidden'}`}>
           {
            data && data.map(item=>{
                <div key={item.id} className='w-300 md:w-340 hover:drop-shadow-xl h-auto  my-12 bg-cardOverlay rounded-lg shadow-lg p-2
                backdrop-blue-lg'>
                   <div className='w-full  flex items-center justify-between'>
                       <motion.img whileHover={{ scale: 1.2 }} className='w-44 -mt-8'
                           src="https://firebasestorage.googleapis.com/v0/b/gofoodiesapp.appspot.com/o/Images%2F1679151750971-panir_pakoda.png?alt=media&token=9aaa0e06-98b0-4b37-83d2-68d763ef8116" alt="" />
                       <motion.div whileTap={{ scale: 0.75 }} className='w-10 h-10 rounded-full bg-pink-600 cursor-pointer  hover:shadow-lg flex items-center justify-center'>
                           <FaShoppingBag className='text-white' />
                       </motion.div>
                   </div>
                   <div className='w-full flex flex-col items-end justify-end'>
                       <p className='text-textColor font-semibold text-base md:text-lg'>
                           Hot Panir Pakoda
                       </p>
                       <p className='mt-1 text-sm text-gray-500'>645 Calories</p>
                       <div className='flex items-center gap-8'>
                           <p className='text-lg text-headingColor font-semibold'>
                               <span className='text-lg text-red-600'>&#8377; </span>
                               220
                           </p>
                       </div>
                   </div>
               </div>
            })
           }
        </div>
    )
}

export default RowContainer