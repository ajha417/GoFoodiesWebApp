import React from 'react'
import Delivery from '../img/delivery.png'
import HeroBg from '../img/heroBg.png'
import I1 from '../img/i1.png'
import { dataImage } from '../utils/data'

function HomeContainer() {
  return (
    <section className='grid grid-cols-1 md:grid-cols-2 gap-2 w-full]' id='home'>
    <div className='py-2 flex-1 flex flex-col items-start justify-center gap-6'>
      <div className='flex items-center px-2 py-1 gap-2 justify-center bg-orange-100 rounded-full'>
        <p className='text-base text-orange-500 font-semibold'>Bike Delivery</p>
        <div className='w-5 h-5 rounded-full drop-shadow-xl overflow-hidden bg-white'>
          <img src={Delivery} alt="delivery" className='w-full h-full object-contain'/>
        </div>
      </div>
      <p className='text-[2.5rem] lg:text-[4rem] md:text-[3rem] font-bold tracking-wide text-headingColor'>
        The fastest delivery in <span className='text-orange-600 lg:text-[5rem] text-[3rem]'>Rajkot</span>
      </p>
      <p className='text-base text-textColor  md:text-[80%] tracking-wide text-center md:text-left'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Harum consequatur maxime distinctio, et quasi reiciendis adipisci repellat accusantium omnis dolores aut. Sunt, ut, similique autem perferendis officia aliquid atque cupiditate necessitatibus, quas rem amet fugiat qui eaque eum pariatur excepturi quia quibusdam placeat at dolores.</p>
      <button className='md:w-auto bg-gradient-to-br w-full  from-pink-600 to-pink-400 text-white px-4 py-2 rounded-md shadow-xl hover:shadow-2xl transition-all ease-in-out duration-100'>Order Now</button>
    </div>
    <div className='py-2 flex-1 flex items-center relative'>
        <img src={HeroBg} className='h-400 lg:h-650  w-full lg:w-auto ml-auto' alt="heroBg" />
        <div className='w-full h-full absolute top-0 left-0 flex lg:px-32 py-4 flex-wrap gap-5 items-center justify-center'>
          
            {dataImage && dataImage.map(n=>(
              <div key={n.id} className='lg:w-190 p-4 bg-cardOverlay drop-shadow-lg rounded-3xl backdrop-blur-md flex flex-col justify-center items-center'>
            <img src={n.imageScr} className='w-20 lg:w-40 -mt-10 lg:-mt-20' alt="i1" />
            <p className='text-base lg:text-xl font-semibold text-textColor mt-2 lg:mt-4'>
              {n.name}
            </p>
            <p className='text-lighttextGray text-[12px]  lg:text-sm my-1 lg:my-3 font-semibold'>
              {n.desc}
            </p>
            <p className=' text-lg font-semibold text-headingColor'><span className='text-red-600'>&#8377; </span>
              {n.price}
            </p>
          </div>
            ))}
          
        </div>
    </div>
  </section>
  )
}

export default HomeContainer