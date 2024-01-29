import React, { useEffect, useState } from "react";
import LightPng from "../asset/Website/light-mode-button-X4OXHFfW.png";
import DarMode from "../asset/Website/dark-mode-button-85jBkhOs.png";

const DarkMode = () => {
  const [theme, setTheme] = useState(
    localStorage.getItem("theme") ? localStorage.getItem("theme") : "light"
  );
  const element = document.documentElement;

    useEffect(() => {
    if (theme === "dark") {
      element.classList.add("dark");
      localStorage.setItem("theme", "dark");
    } else {
      element.classList.remove("dark");
      localStorage.setItem("theme", "light");
    }
  },[theme, element.classList]);
  return (
    <div className=" relative">
      <img
        src={LightPng}
        onClick={()=> setTheme(theme === 'light' ? 'dark' : 'light')}
        alt="../asset/Website/light-mode-button-X4OXHFfW.png"
        className={`w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 absolute right-0 z-10  ${theme === 'dark'? 'opacity-0' : 'opacity-100'} `}
      />
      <img
        src={DarMode}
        onClick={()=> setTheme(theme === 'light' ? 'light' : 'dark')}
        alt="../asset/Website/dark-mode-button-85jBkhOs.png"
        className="w-12 cursor-pointer drop-shadow-[1px_1px_1px_rgba(0,0,0,0.1)] transition-all duration-300 "
      />
    </div>
  );
};

export default DarkMode;
