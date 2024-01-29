import React from "react";
import Img1 from '../../../asset/Best Product/1.png';
import Img2 from '../../../asset/Best Product/2.png';
import Img3 from '../../../asset/Best Product/3.png';
import { FaStar } from "react-icons/fa6";


const ProductData = [
    {
        id : 1,
        Img : Img1,
        title : "Casual Wear",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere eum, libero assumenda voluptate provident!"
    },
    {
        id : 2,
        Img : Img2,
        title : "Printed shirt",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere eum, libero assumenda voluptate provident!"
    },
    {
        id : 3,
        Img : Img3,
        title : "Women shirt",
        discription : "Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta facere eum, libero assumenda voluptate provident!"
    },
]

const Topproduct = ({handleOnClick}) => {
  return (
    <div className="  container ">
      <div className=" ml-5 mb-24 text-left">
        <p ata-aos="fade-up" className="text-sm text-primary ">
          Top rated product for you
        </p>
        <h2 data-aos="fade-up" className="text-3xl font-bold ">
          Best Product
        </h2>
        <p data-aos="fade-up" className="text-xs text-gray-400 ">
          Lorem ipsum dolor sit, amet consectetur adipisicing.
        </p>
      </div> 
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 md:gap-5 gap-20 place-items-center">

        {
            ProductData.map((data)=>(
                <div key={data.id} data-aos="zoom-in" className=" rounded-2xl bg-white dark:bg-gray-800 hover:bg-black/80 dark:hover:bg-primary hover:text-white  relative shadow-xl duration-300 group max-w-[300px]">
                    <div className=" h-[100px]">
                        <img src={data.Img} alt="img" className="block max-w-[140px] mx-auto transform -translate-y-20 group-hover:scale-105 duration-300 drop-shadow-md" />
                    </div>
                    <div className="p-4 text-center">
                         <div className="w-full flex items-center justify-center gap-1 dark:hover:text-gray-600">
                            < FaStar className=" text-yellow-500"/>
                            < FaStar className=" text-yellow-500"/>
                            < FaStar className=" text-yellow-500"/>
                            < FaStar className=" text-yellow-500"/>
                         </div>
                         <h1 className="text-xl font-bold dark:hover:text-white dark:text-white">
                            {data.title}
                         </h1>
                         <p className=" text-gray-500 group-hover:text-whited duration-300 text-sm line-clamp-2">
                            {data.discription}
                         </p>
                         <button onClick={handleOnClick} className="bg-primary hover:scale-105 duration-300 text-white py-1 px-4 rounded-full mt-4 group-hover:bg-white group-hover:text-primary">
                            Order Now
                         </button>
                    </div>
                </div>
            ))
        }

        </div>
      <div>

      </div>
    </div>
  );
};

export default Topproduct;
