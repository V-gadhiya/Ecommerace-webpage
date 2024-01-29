
import './App.css'; 
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import AOS from 'aos';
import { useEffect, useState } from 'react';
import "aos/dist/aos.css";
import Topproduct from './components/Products/TopProduct/Topproduct';
import Banner from './components/banner/Banner';
import Testimonial from './components/Testimonial/Testimonial';
import Footer from './components/Footer/Footer';
import Popupbox from './components/Popupbox/Popupbox';

function App() {
  const [orderPopup, setOrderPopup] = useState(false);

  const handleOnClick = () => {
    setOrderPopup(!orderPopup);
  };

  useEffect(()=>{
    AOS.init({
      offset: 100,
      duration : 800,
      easing : 'ease-in-sine',
      delay: 100
    });
    AOS.refresh();
  }, []);
  return (
    
    <>
    <div className='bg-white dark:bg-gray-900 dark:text-white duration-200'>
     <Navbar handleOnClick={handleOnClick} />
     <Hero handleOnClick={handleOnClick} />
     <Products />
     <Topproduct handleOnClick={handleOnClick} />
     <Banner />
     <Testimonial />
     <Footer />
     <Popupbox orderPopup={orderPopup}  setOrderPopup={setOrderPopup} />
     </div>
    </>
   
  );
}

export default App;
