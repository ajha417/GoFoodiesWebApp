import React, { useEffect, useRef, useState } from 'react'
import HomeContainer from './HomeContainer'
import {motion} from 'framer-motion'
import {MdChevronLeft,MdChevronRight} from 'react-icons/md'
import RowContainer from './RowContainer'
import { useStateValue } from '../context/StateProvider'

function MainContainer() {
  const [{foodItems},dispatch] = useStateValue()

  const [scrollValue,setScrollValue] = useState(0);
  useEffect(()=>{

  },[scrollValue])
  
  return (
   <div className='w-full h-auto flex flex-col items-center justify-center'>
      <HomeContainer/>

      <section className='w-full my-6'>
        <div className='w-full flex items-center justify-between'>
          <p className='text-2xl font-semibold relative capitalize text-textColor
          before:absolute before:rounded-lg before:content before:w-32 before:h-1 before:-bottom-2
           before:left-0 before:bg-gradient-to-tr from-pink-400 to-pink-600 transition-all ease-in-out duration-100'>
            Our Fresh & healthy fruits
          </p>
          <div className='hidden md:flex gap-3 items-center'>
            <motion.div whileTap={{scale:0.75}} 
            className='w-8 h-8 rounded-lg bg-pink-300 hover:bg-pink-500 cursor-pointer 
            transition-all hover:shadow-lg duration-100 ease-in-out flex items-center justify-center'
            onClick={()=>setScrollValue(-200)}>
              <MdChevronLeft className='text-base text-white'/>    
            </motion.div>
            <motion.div whileTap={{scale:0.75}} 
            className='w-8 h-8 rounded-lg bg-pink-300 hover:bg-pink-500 cursor-pointer 
            transition-all hover:shadow-lg duration-100 ease-in-out flex items-center justify-center'
            onClick={()=>setScrollValue(200)}>
              <MdChevronRight className='text-base text-white'/>
            </motion.div>
          </div>
        </div>
        <RowContainer scrollValue={scrollValue} flag={true} data = {foodItems?.filter(n=>n.category === "fuits")}/>
      </section>
   </div>

  )
}

export default MainContainer