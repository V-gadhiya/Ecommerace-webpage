import React from 'react';
import Img1 from '../../asset/Testimonial/1.jpg';
import Img2 from '../../asset/Testimonial/2.jpg';
import Img3 from '../../asset/Testimonial/3.jpg';
import Img4 from '../../asset/Testimonial/4.jpg';
import Sli from "react-slick";


const Testi = [

    {
        id : 1,
        name : "Rohit Sharma",
        text :" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum culpa vel, impedit labore error?",
        img: Img1,
    },
    {
        id : 2,
        name : "Virat Kohli",
        text :" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum culpa vel, impedit labore error?",
        img: Img2,
    },
    {
        id : 3,
        name : "Hardik Pandya",
        text :" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum culpa vel, impedit labore error?",
        img: Img3,
    },
    {
        id : 4,
        name : "Rinku Singh",
        text :" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum culpa vel, impedit labore error?",
        img: Img4,
    },
    {
        id : 5,
        name : "Shivam Dube",
        text :" Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nobis dolorum culpa vel, impedit labore error?",
        img: Img2,
    },
]

const Testimonial = () => {

    var settings = {
        dots: true,
        arrows: false,
        infinite: true,
        speed: 500,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: "linear",
        pauseOnHover: true,
        pauseOnFocus: true,
        responsive : [
          {  
            breakpoint : 10000,
            settings :{
                slidesToShow: 3,
                slidesToScroll:1,
                infinite : true,
            },   
          },
          {  
            breakpoint : 1024,
            settings :{
                slidesToShow: 2, 
                slidesToScroll:1,
                initialSlide: 2, 
            },   
          },
          {  
            breakpoint : 640,
            settings :{
                slidesToShow: 1,  
                slidesToScroll:1,
            },   
          },
        ], 
      };
    
  return (
    <div className='py-10'>
      <div className=' container'>
        <div className="text-center mb-10 max-w-[600px] mx-auto">
            <p data-aos="fade-up" className="text-sm text-primary ">What our customers are saying</p>
            <h1 data-aos="fade-up" className="text-3xl font-bold ">Testimonials</h1>
            <p data-aos="fade-up" className="text-xs text-gray-400 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, temporibus.</p>
        </div>
        <div data-aos = "zoom-in">
            <Sli {...settings}>
                {
                    Testi.map((data)=>(
                        <div className='my-6' key={data.id}>
                        <div  className='flex flex-col  gap-4 shadow-lg py-8 px-6  mx-4 rounded-xl dark:bg-gray-800 bg-primary/10 relative'>
                            <div className='mb-4'>
                                <img src={data.img} alt=""  className=' rounded-full h-20 w-20'/>
                            </div>
                            <div className='flex flex-col items-center gap-4'> 
                            <div className=' space-y-3'> 
                                <p className=' text-xs text-gray-400'>{data.text}</p>
                                <h1 className='font-bold text-xl dark:text-white/90 text-black/80 dark:text-light'>{data.name}</h1>
                                
                            </div>
                            </div>
                            <p className='text-black/20  dark:text-white/90 text-9xl top-0 right-0 absolute font-serif'>,,</p>
                        </div>
                        </div>
                    ))
                }
            </Sli>
        </div>
      </div>
    </div>

  )
}

export default Testimonial
