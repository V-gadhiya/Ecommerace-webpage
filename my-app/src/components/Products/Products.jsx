import React from "react";
import Img1 from "../../asset/women/women-NhG2D3pl (1).png";
import Img2 from "../../asset/women/women2-wroTMLvf (1).jpg";
import Img3 from "../../asset/women/women2-wroTMLvf.jpg";
import Img4 from "../../asset/women/women3-HFaPDX0l.jpg";
import Img5 from "../../asset/women/women4-zXERyOhD.jpg";
import { FaStar } from "react-icons/fa6";

const ProductsData = [
  {
    id: 1,
    img: Img1,
    title: "Women Ethnic",
    rating: 5.0,
    color: "white",
    aosDelay: "0",
  },
  {
    id: 2,
    img: Img2,
    title: "Women western",
    rating: 4.5,
    color: "Red",
    aosDelay: "0",
  },
  {
    id: 3,
    img: Img3,
    title: "Goggles",
    rating: 4.7,
    color: "Brown",
    aosDelay: "0",
  },
  {
    id: 4,
    img: Img4,
    title: "Women Ethnic",
    rating: 4.0,
    color: "Yellow",
    aosDelay: "0",
  },
  {
    id: 5,
    img: Img5,
    title: "Fashin T-Shirt",
    rating: 4.7,
    color: "Pink",
    aosDelay: "0",
  },
];


const Products = () => {
  return (
    <div className="mt-14 mb-12" >
      <div className=" container">
        <div className="text-center mb-10 max-w-[600px] mx-auto">
          <p data-aos="fade-up" className="text-sm text-primary ">
            Top selling Products for you
          </p>
          <h1 data-aos="fade-up" className="text-3xl font-bold ">
            Products
          </h1>
          <p data-aos="fade-up" className="text-xs text-gray-400 ">
            Lorem ipsum dolor sit amet consectetur adipisicing.
          </p>
        </div>
        <div >
          <div className="grid grid-cols-1 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 place-items-center gap-5">
            {ProductsData.map((data) => (
              <div
                key={data.id}
                className=" space-y-3"
                data-aos-delay={data.aosDelay}
                data-aos="fade-up"
              >
                <img
                  src={data.img}
                  alt=""
                  className="h-[220px] w-[150px] object-cover rounded-md "
                />
                <div>
                  <h3 className=" font-semibold">{data.title}</h3>
                  <p className=" text-sm text-gray-600">{data.color}</p>
                  <div className="flex items-center gap-1">
                    <FaStar className="text-yellow-400" />
                    <span>{data.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div
        className="flex justify-center"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="300"
      >
        <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-md mt-5 text-center justify-center align-center " >
          View all button
        </button>
      </div>
    </div>
  );
};

export default Products;
