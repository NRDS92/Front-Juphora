import React, { useEffect, useRef, useState } from 'react'
import bannerImg from "../assets/bannerImg"
import Button from "../components/UI/Button"
import { AnimatePresence, motion } from 'motion/react'



export default function Banner(animation) {

    const [currentIndex, setCurrentIndex] = useState(0)
    const timeOut = useRef(null)

    const resetTimeOut = ()=>{
            if (timeOut.current) {
        clearTimeout(timeOut.current);
        }
    }

    useEffect(() => {
    resetTimeOut();

    // Cambio automático cada 5 segundos
    timeOut.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      resetTimeOut();
    };
  }, [currentIndex]);


    function prevSlide(){
        const isFirtSlide = currentIndex === 0;
        const newIndex = isFirtSlide ? bannerImg.length -1 : currentIndex -1
        setCurrentIndex(newIndex)
    }
    function nextSlide(){
        const isLastSlide = currentIndex === bannerImg.length - 1;
        const newIndex = isLastSlide ? 0 : currentIndex + 1
        setCurrentIndex(newIndex)
    }

   

    

    return (
        <div className='flex flex-col w-full h-20 mt-20 md:mt-0 md:h-[550px] justify-center'>
            <AnimatePresence mode='wait'>
                <motion.img 
                key={currentIndex}
                    className='object-cover w-full h-[200px] md:h-[550px] ' 
                    src={bannerImg[currentIndex].url} alt='Banner Imagen'
                    initial={
                        animation === "fade"
                            ? { opacity: 0 }
                            : { x: 300, opacity: 0 }
                        }
                        animate={
                        animation === "fade"
                            ? { opacity: 1 }
                            : { x: 0, opacity: 1 }
                        }
                        exit={
                        animation === "fade"
                            ? { opacity: 0 }
                            : { x: -300, opacity: 0 }
                        }
                        transition={{ duration: 0.6 }}
                    />
            </AnimatePresence>
            
            <div className='absolute ml-2 md:ml-5 ' 
                onClick={prevSlide} 
            >
                    <Button><i className="fa-solid fa-caret-left text-3xl text-primary-purple "></i></Button>
            </div>
            <div 
                onClick={nextSlide}
                className='absolute right-0 mr-2 md:mr-5' 
            >
                    <Button><i className="fa-solid fa-caret-right text-3xl text-primary-purple"></i></Button>
            </div>
            <div className='flex gap-1 justify-center pt-3 '>
                {bannerImg.map((item,index)=>{
                    
                    return <div key={index}
                                onClick={()=> setCurrentIndex(index)}
                                className={` w-3 h-3 ${currentIndex === index ? "bg-primary-gray border border-primary-purple" : "bg-primary-purple"} rounded-4xl cursor-pointer `}></div>
                    
                })}
            </div>
            
        </div>
    )
}
