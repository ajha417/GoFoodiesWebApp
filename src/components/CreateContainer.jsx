import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import {FaRupeeSign} from 'react-icons/fa'
import {BsCurrencyRupee} from 'react-icons/bs'
import { categories } from '../utils/data';
import Loader from './Loader';

function CreateContainer() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState(null);
  const [calories, setCalories] = useState("");
  const [price, setPrice] = useState("");
  const [fields, setFields] = useState(false);
  const [imageAsset, setImageAsset] = useState(null)
  const [alertStatus, setAlertStatus] = useState("danger")
  const [msg, setMsg] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const upload = () => {

  }

  const deleteImage = () => {

  }
  const saveDetails = () =>{
     
  }
  return (
    <div className='w-full h-auto min-h-screen flex items-center justify-center'>
      <div className='w-[90%] md:w-[75%] border border-gray-300 rounded-lg 
      p-4 flex flex-col items-center justify-center gap-4'>
        {
          fields && (
            <motion.p className={`w-full p-2 text-center text-lg font-semibold 
            rounded-lg 
            ${alertStatus === "danger" ? "bg-red-400 text-red-800" : "bg-emerald-400 text-emerald-800"}`}>
              {msg}
            </motion.p>
          )
        }
        <div className='w-full py-2 border-b border-gray-300 flex items-center gap-2'>
          <MdFastfood className='text-gray-700' />
          <input type="text"
            className='w-full
            text-lg font-semibold bg-transparent
             outline-none border-non
              placeholder:text-gray-00
               text-textColor'
            onChange={(e) => setTitle(e.target.value)}
            required value={title} placeholder="Give me a title" name="" id="" />
        </div>
        <div className='w-full'>
          <select onChange={(e) => setCategory(e.target.value)} className='border-b-2 outline-none w-full text-base
           border-pink-200 p-2 rounded-md cursor-pointer'>
            <option value="other" className='bg-white'>Select Category</option>
            {categories && categories.map(item => (
              <option key={item.id} className='text-base border-0 capitalize 
              outline-none bg-white text-textColor' value={item.urlParaName}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div className='group flex justify-center items-center border-dotted flex-col border-2 border-pink-200
        h-225 md:h-420 w-full cursor-pointer rounded-lg'>
          {
            isLoading ? (<Loader />) : (
              <>
                {!imageAsset ? (<>
                  <label className='w-full h-full flex flex-col items-center justify-center cursor-pointer'>
                    <div className='w-full h-full flex flex-col items-center justify-center gap-2'>
                      <MdCloudUpload className='text-gray-500 hover:text-gray-700 text-3xl' />
                      <p className='text-gray-500 hover:text-gray-700'>Click here to upload</p>
                    </div>
                    <input type="file" name="uploadimage" accept='image/*' onChange={upload}
                      className='w-0 h-0' />
                  </label>
                </>) : (
                  <>
                    <div className='relative h-full'>
                      <img src={imageAsset} alt="uploaded image"
                        className='w-full h-full object-cover' />
                      <button type='button' className='absolute bottom-3 right-3 p-3 rounded-full bg-pink-500
                    text-xl cursor-pointer outline-none hover:shadow-lg duration-500 transition-all 
                    ease-in-out' onClick={deleteImage}>
                        <MdDelete className='text-white' />
                      </button>
                    </div>
                  </>)
                }
              </>
            )}
        </div>
        <div className='flex flex-col md:flex-row w-full items-center gap-3'>
          <div className='border-b border-pink-200 w-full py-2 flex items-center gap-2'>
            <MdFoodBank className='text-gray-700 text-2xl' />
            <input type="text" required placeholder='Calories'
            value={calories}
            onChange={(e)=>setCalories(e.target.value)}
             className='w-full h-full text-textColor text-lg
                outline-none bg-transparent border-none placeholder:text-gray-400' />
          </div>
          <div className='border-b border-blue-200 w-full py-2 flex items-center gap-2'>
            <BsCurrencyRupee className='text-gray-700 mx-2 text-2xl' />
            <input type="text" required placeholder='Price'
            value={price}
            onChange={(e)=>setPrice(e.target.value)}
             className='w-full h-full text-textColor text-lg
                outline-none bg-transparent border-none placeholder:text-gray-400' />
          </div>
        </div>
        <div className='flex items-center w-full'>
            <button type='button' className='ml-10 md:ml-auto  w-full md:w-auto
            border-none outline-none bg-pink-400 px-12 py-2
            rounded-lg text-lg text-white font-semibold' onClick={saveDetails}>Save</button>
        </div>
      </div>
    </div>
  )
}

export default CreateContainer