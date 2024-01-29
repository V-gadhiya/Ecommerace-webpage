import React from "react";
import Logo from "../../asset/logo.png";
import img1 from "../../asset/footer/footer-pattern-mGVwO-y6.jpg";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaMobileAlt } from "react-icons/fa";

const Footerlink = [
  {
   
    title: "Home",
    link: "/#",
  },
  {
    title: "About",
    link: "/about",
  },
  {
    title: "Contact",
    link: "/contact",
  },
  {
    title: "Blog",
    link: "/blog",
  },
];
const footerStyle = {
  backgroundImage: `url(${img1})`,
  backgroundPosition: "bottom",
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  height: "100%",
  width: "100%",
};

const Footer = () => {
  return (
    <div className="text-white mb-20 bg-cover " style={footerStyle}>
      <div className=" container">
        <div className="grid md:grid-cols-3  pt-5 pb-44" data-aos="zoom-in">
          <div className="py-8 px-4">
            <h1 className=" sm:text-3xl text-xl font-bold  text-justify sm:text-left mb-3 flex items-center gap-3">
              <img src={Logo} alt="" className=" max-w-[50px]" />
              Shopsy
            </h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Delectus
              totam, animi cupiditate inventore placeat porro!
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:pl-10 col-span-2">
            <div>
              <div className="py-8 px-4 ">
                <h1 className=" sm:text-3xl text-xl font-bold sm:text-left  text-justify mb-3">
                  Important Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {Footerlink.map((data) => (
                    <li
                      key={data.title}
                      className=" cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            <div>
              <div className="py-8 px-4 ">
                <h1 className=" sm:text-3xl text-xl font-bold sm:text-left  text-justify mb-3">
                  {" "}
                  Links
                </h1>
                <ul className="flex flex-col gap-3">
                  {Footerlink.map((data) => (
                    <li
                      key={data.title}
                      className=" cursor-pointer hover:text-primary hover:translate-x-1 duration-300 text-gray-200"
                    >
                      <span>{data.title}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div>
              <div className="flex items-center gap-3 mt-6">
                <a href="https://example.com/instagram" className="ml-3">
                  <FaInstagram className="text-3xl " />
                </a>
                <a href="https://example.com/facebook" className="ml-3">
                  <FaFacebook className="text-3xl " />
                </a>
                <a href="https://example.com/linkedin" className="ml-3">
                  <FaLinkedin className="text-3xl " />
                </a>
              </div>
              <div className="mt-6">
                <div className="flex items-center gap-3 mt-3">
                  <FaLocationDot />
                  <p>Ahmedabad, Gujarat</p>
                </div>
                <div className="flex items-center gap-3 mt-3">
                  <FaMobileAlt />
                  <p>+91 9822233366</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
