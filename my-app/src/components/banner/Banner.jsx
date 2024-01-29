import React from 'react'
import Img1 from '../../asset/Best Product/banner.jpg';
import {GrSecure} from 'react-icons/gr';
import {IoFastFood} from 'react-icons/io5';
import {GiFoodTruck} from 'react-icons/gi';

const Banner = () => {
  return (
    <div className=' min-h-[550px] flex justify-center items-center py-12 sm:py-0'>
      <div className=' container'>
        <div className='grid grid-cols-1 sm:grid-cols-2 gap-6 items-center'>
            <div data-aos= 'zoom-in'>
               <img src={Img1} alt="" className=' max-w-[400px] h-[350px] w-full mx-auto drop-shadow-[-10px_10px_12px_rgba(0,0,0,1)] object-cover' /> 
            </div>
            <div className='flex flex-col gap-6 justify-center sm:pt-0'>
                <h1 data-aos="fade-up" className="text-3xl font-bold  sm:text-4xl tracking-wide leading-5">
                Winter Sale upto 50% Off
                </h1>
                <p data-aos="fade-up" className="text-xs text-gray-400 ">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Exercitationem, laudantium? Voluptatem doloremque consectetur deleniti aperiam, repellat molestias perspiciatis dolorum ducimus.</p>
                <div>
                    <div data-aos="fade-up" className='flex items-center gap-4 m-2'>
                        <GrSecure className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-violet-100 dark:bg-violet-400 ' />
                        <p className=''>Quality Products</p>
                        
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4 m-2'>
                        <IoFastFood className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-yellow-100 dark:bg-yellow-400 ' />
                        <p className=''>Fast Delivery</p>
                        
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4 m-2'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-orange-100 dark:bg-orange-400 ' />
                        <p className=''>Easy Payment method</p>
                        
                    </div>
                    <div data-aos="fade-up" className='flex items-center gap-4 m-2'>
                        <GiFoodTruck className='text-4xl h-12 w-12 shadow-sm p-4 rounded-full bg-green-100 dark:bg-green-400 ' />
                        <p className=''>Get Offers</p>
                        
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Banner
