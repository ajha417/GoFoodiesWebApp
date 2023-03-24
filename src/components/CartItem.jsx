import React, { useEffect, useState } from 'react'
import { BiMinus, BiPlus } from 'react-icons/bi'
import {motion} from 'framer-motion'
import { useStateValue } from '../context/StateProvider';
import { actionType } from '../context/reducer';
const CartItem = ({item}) => {
    console.log(item);
    const [qty,setQty] = useState(1);
    const [items,setItems] = useState([])
    
    const [{ cartItems },dispatch] = useStateValue();
    const updateQty = (action,id)=>{
        if(action === "add"){
            setQty(qty + 1)
            
            cartItems.map(item=> {
                if(item.id === id){
                    item.qty += 1;

                }
            });
            cartDispatch();
        }
        else{
            if(qty == 1){
                
                setItems(cartItems.filter((item) => item.id !== id));
                cartDispatch()
            }
            else{
                
                setQty(qty-1)
                cartItems.map(item=> {
                    if(item.id === id){
                        item.qty -= 1;
    
                    }
                });
                cartDispatch();
            }
        }
    };
    const cartDispatch = ()=>{
        localStorage.setItem("cartItems",JSON.stringify(items));
        dispatch({
            type: actionType.SET_CARTITEMS,
            cartItems:items,
        })
    }
    useEffect(()=>{
        setItems(cartItems)
    },[qty]);

    
  return (
    <div key={item.id} className='w-full p-1 px-2 shadow-2xl rounded-lg bg-gradient-to-bl from-cartInitial to-cartFinal flex items-center gap-2'>
                                        <img src={item?.imageURL} alt="cartItems" className='w-20 h-20 max-w-[60px rounded-full object-contain' />
                                        {/* name section */}
                                        <div className='flex flex-col gap-2'>
                                            <p className='text-base text-gray-700'>
                                                {item?.title}
                                            </p>
                                            <p className='text-sm block text-gray-900 font-semibold'>
                                                <span className='text-lg text-red-600'>&#8377; </span>
                                                {parseFloat(item?.price) * qty}
                                            </p>
                                        </div>
                                        {/* button section */}
                                        <div className='grup flex items-center gap-2 ml-auto cursor-pointer'>
                                            <motion.div whileTap={{ scale: 0.75 }} onClick={()=>updateQty("remove", item?.id)}>
                                                <BiMinus className='text-gray-900 text-2xl hover:shadow-2xl' />
                                            </motion.div>
                                            <p className='w-5 h-5 rounded-md bg-pink-700 text-gray-50 flex items-center
                            justify-center'>
                                                {qty}
                                            </p>
                                            <motion.div whileTap={{ scale: 0.75 }} onClick={()=>updateQty("add", item?.id)}>
                                                <BiPlus className='text-gray-900 text-2xl hover:shadow-2xl' />
                                            </motion.div>
                                        </div>
                                    </div>
  )
}

export default CartItem
