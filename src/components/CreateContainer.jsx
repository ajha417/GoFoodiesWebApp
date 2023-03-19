import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { MdFastfood, MdCloudUpload, MdDelete, MdFoodBank, MdAttachMoney } from 'react-icons/md'
import { FaRupeeSign } from 'react-icons/fa'
import { BsCurrencyRupee } from 'react-icons/bs'
import { categories } from '../utils/data';
import Loader from './Loader';
import { deleteObject, getDownloadURL, ref, uploadBytesResumable } from 'firebase/storage'
import { storage } from '../firebase.config'
import { getAllFoodItems, saveItem } from '../utils/firebaseFunctions'
import { useStateValue } from '../context/StateProvider'
import { actionType } from '../context/reducer'

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

  const [{},dispatch] = useStateValue();

  const upload = (e) => {
    setIsLoading(true);
    const imageFile = e.target.files[0];
    const storageRef = ref(storage, `Images/${Date.now()}-${imageFile.name}`)
    const uploadTask = uploadBytesResumable(storageRef, imageFile);


    uploadTask.on('state_changed', (snapshot) => {
      const uploadProgress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
    }, (error) => {
      console.log(error);
      setFields(true);
      setAlertStatus("danger");
      setMsg("Error while uploading... Please try Again!!!");
      setTimeout(() => {
        setFields(false);
        setIsLoading(false);
      }, 4000)
    }, () => {
      getDownloadURL(uploadTask.snapshot.ref).then(downloadURL => {
        setImageAsset(downloadURL);
        setIsLoading(false);
        setFields(true);
        setMsg("Image uploaded successfully!");
        setAlertStatus("success");
        setTimeout(() => {
          setFields(false);
        }, 4000)
      })
    })
  };

  const deleteImage = () => {
    setIsLoading(true);
    const deleteRef = ref(storage, imageAsset);
    deleteObject(deleteRef).then(() => {
      setImageAsset(null);
      setIsLoading(false);
      setFields(true);
      setMsg("Image deleted successfully!!!");
      setAlertStatus("success");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    })

  }
  const saveDetails = () => {
    setIsLoading(true);
    try {
      if ((!title || !calories || !imageAsset || !price || !category)) {
        setFields(true);
        setAlertStatus("danger");
        setMsg("Error while uploading... Please try Again!!!");
        setTimeout(() => {
          setFields(false);
          setIsLoading(false);
        }, 4000);
      }
      else{
        const data = {
          id: `${Date.now()}`,
          title : title,
          imageURL : imageAsset,
          category : category,
          calories : calories,
          qty : 1,
          price : price
        }
        saveItem(data);
        setFields(true);
        setIsLoading(false);
        setAlertStatus("success");
        setMsg("Data uploaded successfully !!!");
        clearData();
        setTimeout(() => {
          setFields(false);
        }, 4000);

      }
    }
    catch (error) {
      console.log(error);
      setFields(true);
      setIsLoading(false);
      setAlertStatus("danger");
      setMsg("Error while uploading... Please try Again!!!");
      setTimeout(() => {
        setFields(false);
      }, 4000);
    }
    fetchData();
  };
  const clearData = ()=>{
    setTitle("");
    setImageAsset(null);
    setCalories("");
    setPrice("");
    setCategory("Select Category");
  }

  const fetchData = async()=>{
    await getAllFoodItems().then(data=>{
      // console.log(data)
      dispatch({
        type : actionType.SET_FOOD_ITEMS,
        foodItems : data
      })
    });
  };
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
            required value={title} placeholder="Give me a title" name="title" />
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
              onChange={(e) => setCalories(e.target.value)}
              className='w-full h-full text-textColor text-lg
                outline-none bg-transparent border-none placeholder:text-gray-400' />
          </div>
          <div className='border-b border-blue-200 w-full py-2 flex items-center gap-2'>
            <BsCurrencyRupee className='text-gray-700 mx-2 text-2xl' />
            <input type="text" required placeholder='Price'
              value={price}
              onChange={(e) => setPrice(e.target.value)}
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