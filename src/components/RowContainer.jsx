import React, { useEffect, useRef } from 'react'
// import { MdShoppingBasket } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
import { motion } from 'framer-motion'

const RowContainer = ({ flag,data,scrollValue }) => {
    // console.log(data);
    const rowContainer = useRef();
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue])
    return (
        <div  ref={rowContainer} className={`w-full flex items-center gap-3 my-12  scroll-smooth bg-pink-50
     ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap'}`}>
           {
            data && data.map(item=>(
                <div key={item?.id} className='w-275 h-[275px]  min-w-[375px] md:min-w-[300px] 
                md:w-300 hover:drop-shadow-xl my-12 bg-cardOverlay rounded-lg shadow-lg p-2 flex flex-col
                items-center justify-between
                backdrop-blue-lg'>
                   <div className='w-full flex  items-center justify-between'>
                       <motion.img whileHover={{ scale: 1.2 }} className='w-44  -mt-8'
                           src={item?.imageURL} alt="" />
                       <motion.div whileTap={{ scale: 0.75 }} className='w-10 h-10 rounded-full bg-pink-600 cursor-pointer  hover:shadow-lg flex items-center justify-center'>
                           <FaShoppingBag className='text-white' />
                       </motion.div>
                   </div>
                   <div className='w-full flex flex-col items-end justify-end'>
                       <p className='text-textColor font-semibold text-base md:text-lg'>
                           {item?.title}
                       </p>
                       <p className='mt-1 text-sm text-gray-500'>{item?.calories} Calories</p>
                       <div className='flex items-center gap-8'>
                           <p className='text-lg text-headingColor font-semibold'>
                               <span className='text-lg text-red-600'>&#8377; </span>
                               {item?.price}
                           </p>
                       </div>
                   </div>
               </div>
            ))
           }
        </div>
    )
}

export default RowContainer