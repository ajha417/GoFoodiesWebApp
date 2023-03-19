import React, { useEffect, useState } from 'react'
import { IoFastFood } from 'react-icons/io5'
import { categories } from '../utils/data'
import {motion} from 'framer-motion'

function MenuContainer() {
    const [filter, setFilter] = useState("chicken")
    useEffect(()=>{

    },[filter])
    return (
        <>
            <section className='w-full my-2' id='menu'>
                <div  className='flex flex-col w-full items-center justify-center'>
                    <p className='text-2xl font-semibold relative capitalize text-textColor
                        before:absolute before:rounded-lg before:content before:w-16 before:h-1 before:-bottom-2
                        before:left-0 mr-auto before:bg-gradient-to-tr from-pink-400 to-pink-600 
                        transition-all ease-in-out duration-100'>
                        Our Hot Dishes
                    </p>
                    <div  className='w-full flex items-center justify-start py-6 lg:justify-center gap-8 
                     overflow-x-scroll
                    scrollbar-none'>
                        {
                            categories && categories.map(category => (
                                <motion.div whileTap={{ scale : 0.75 }} key={category.id} className={`group ${filter === category.urlParaName ? 'bg-pink-600' : 'bg-white' }
                                 rounded-lg cursor-pointer  w-24 min-w-[94px] h-28
                                drop-shadow-xl flex flex-col gap-3 hover:bg-pink-600 items-center justify-center`} onClick={()=>setFilter(category.urlParaName)}>

                                    <div className={`w-10 h-10 rounded-full ${filter === category.urlParaName ? 'bg-white' : 'bg-pink-600' } group-hover:bg-white flex
                                        items-center justify-center`}>
                                        <IoFastFood className={`${filter === category.urlParaName ? 'text-textColor' : 'text-white' } group-hover:text-textColor
                                         text-lg`} />
                                    </div>
                                    <p className={`text-sm ${filter === category.urlParaName ? 'text-white' : 'text-textColor' } font-semibold group-hover:text-white`}>
                                        {category.name}
                                    </p>
                                </motion.div>
                            ))
                        }
                    </div>
                </div>
            </section>
        </>
    )
}

export default MenuContainer