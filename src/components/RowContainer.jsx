import React, { useEffect, useRef, useState } from 'react'
// import { MdShoppingBasket } from 'react-icons/md'
import { FaShoppingBag } from 'react-icons/fa'
import { motion } from 'framer-motion'
import NotFound from '../img/NotFound.svg'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

const RowContainer = ({ flag,data,scrollValue }) => {
    // console.log(data);
    const rowContainer = useRef();

    const [items,setItems] = useState([])

    const [{cartItems},dispatch] = useStateValue();
    useEffect(()=>{
        rowContainer.current.scrollLeft += scrollValue;
    },[scrollValue])

    const addToCart = ()=>{

        // console.log(item);
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems: items  //here we are breaking cartItems and appending item into it
        });
        localStorage.setItem("cartItems",JSON.stringify(items))
    }
    useEffect(()=>{
        addToCart();
    },[items])
    return (
        <div  ref={rowContainer} className={`w-full flex items-center gap-3 my-12  scroll-smooth bg-pink-50
     ${flag ? 'overflow-x-scroll scrollbar-none' : 'overflow-x-hidden flex-wrap justify-center'}`}>
           {
            data && data.length > 0 ? (data.map(item=>(
                <div key={item?.id} className='w-275 h-[185px]  min-w-[275px] md:min-w-[300px] 
                md:w-300 hover:drop-shadow-xl my-12 bg-cardOverlay rounded-lg shadow-lg p-2 flex flex-col
                items-center justify-between
                backdrop-blue-lg'>
                   <div className='w-full flex h-40 items-center justify-between'>
                       <motion.div whileHover={{ scale: 1.2 }} className='w-40 -mt-8 drop-shadow-2xl'>
                       <img  className='w-40 h-40 -mt-8 object-contain'
                           src={item?.imageURL} alt="" />
                       </motion.div>
                       <motion.div whileTap={{ scale: 0.75 }}
                        className='w-10 h-10 rounded-full bg-pink-600 cursor-pointer  
                        hover:shadow-lg flex items-center justify-center'
                        onClick={()=>setItems([...cartItems,item])}>
                           <FaShoppingBag className='text-white' />
                       </motion.div>
                   </div>
                   <div className='w-full flex flex-col items-end justify-end'>
                       <p className='text-textColor  font-semibold text-base md:text-lg'>
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
            ))):
            <div className='w-full flex flex-col items-center justify-center'>
                <img src={NotFound} className='h-340' alt='NotFound'/>
                <p className='text-xl text-headingColor font-semibold my-2'>Items not available</p>
            </div>
           }
        </div>
    )
}

export default RowContainer