import React from "react";
import Image1 from "../../asset/hero/sale-cnpHUeHf.png";
import Image2 from "../../asset/hero/shopping-vpNvhQDE.png";
import Image3 from "../../asset/hero/women-NhG2D3pl.png";
import Sli from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ImageList = [
  {
    id: 1,
    img: Image3,
    Title: "Upto 50% off on all Women`s Were",
    discription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, non laborum cum vero, id voluptates ipsa reprehenderit aliquid adipisci similique aspernatur eos et maxime quos officiis rerum beatae impedit culpa.",
  },
  {
    id: 2,
    img: Image2,
    Title: "Upto 30% off on all Men`s Were",
    discription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, non laborum cum vero, id voluptates ipsa reprehenderit aliquid adipisci similique aspernatur eos et maxime quos officiis rerum beatae impedit culpa.",
  },
  {
    id: 3,
    img: Image1,
    Title: "Upto 70% off on all Products Sale",
    discription:
      " Lorem ipsum dolor sit, amet consectetur adipisicing elit. Repellendus, non laborum cum vero, id voluptates ipsa reprehenderit aliquid adipisci similique aspernatur eos et maxime quos officiis rerum beatae impedit culpa.",
  },
];

const Hero = ({handleOnClick}) => {
  var settings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 800,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "ease-in-out",
    pauseOnHover: false,
    pauseOnFocus: true,
  };

  return (
    <div className="relative overflow-hidden min-h-[550px] sm:min-h-[650px] bg-gray-100 flex justify-center items-center dark:bg-gray-950 dark:text-white duration-200">
      <div className="h-[700px] w-[700px] bg-primary/40 absolute -top-1/2 right-0 rounded-3px rotate-45 -z-9"></div>
      <div className="container pb-8 sm:pb-0">
        <Sli {...settings}>
          {ImageList.map((data) => (
            <div key={data.id}>
              <div className="grid grid-cols-1 sm:grid-cols-2 ">
                <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 text-center sm:text-left order-2  sm:order-1 relative z-10 ">
                  <h1
                    className="text-5xl sm:text-6xl lg:text-7xl font-bold "
                    data-aos="zoom-out"
                    data-aos-duration="500"
                    data-aos-once="true"
                  >
                    {data.Title}
                  </h1>
                  <p
                    className="text-sm"
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="100"
                  >
                    {data.discription}{" "}
                  </p>
                  <div
                    data-aos="fade-up"
                    data-aos-duration="500"
                    data-aos-delay="300"
                  >
                    <button className="bg-gradient-to-r from-primary to-secondary hover:scale-105 duration-200 text-white py-2 px-4 rounded-full" onClick={handleOnClick}>
                      Order Now
                    </button>
                  </div>
                </div>

                <div className="order-1 sm:order-2">
                  <div
                    className=" relative z-10 "
                    data-aos="zoom-in"
                    data-aos-once="true"
                  >
                    <img
                      src={data.img}
                      alt=""
                      className="w-[300px] h-[300px] sm:h-[450px] sm:w-[450px] sm:scale-125 lg:scale-120 object-contain mx-auto"
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </Sli>
      </div>
         
    </div>
  );
};

export default Hero;
