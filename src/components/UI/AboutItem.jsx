import {motion} from "motion/react";

export default function AboutItem({title, text,children}) {
  return (
    <motion.div 
            className=" flex flex-col p-8 gap-5 my-15 items-center bg-white rounded-4xl w-[80%] md:w-[78%] h-[500px] text-center "
            initial={{
                opacity: 1
            }}
            whileInView={{
                opacity:1,
                scale: 1.25,
                transition:{
                    duration:3
                }
            }}
            viewport={{
                once:false,
                amount: "some"
            }}
            >
                <h2 className="text-sm md:text-xl font-bold ">{title}</h2>
                <p className="text-xs md:text-sm ">{text} 
                </p>
                {children}
        </motion.div>
  )
}
