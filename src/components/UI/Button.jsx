import { motion } from "motion/react"

export default function Button({children, buttonType, className, ...props}) {
    let buttonStyle = " rounded-[50px] uppercase h-10 font-bold"

    if( buttonType === "purple-long"){
        buttonStyle += " bg-primary-purple w-[200px] md:w-[320px] text-white  "
    }
    if( buttonType === "grey-long"){
        buttonStyle += " bg-primary-grey w-[200px] md:w-[320px] text-primary-purple "
    }
    if( buttonType === "purple-short"){
        buttonStyle += " bg-primary-purple w-[200px] text-white text-xs "
    }
    if( buttonType === "icon"){
        buttonStyle += " text-2xl "
    }
    if( buttonType === "icon-color-purple"){
        buttonStyle += " text-2xl text-primary-purple"
    }
    if( buttonType === "green-short"){
        buttonStyle += " bg-primary-green w-[200px] text-white text-xs "
    }
    if( buttonType === "green-long"){
        buttonStyle += " bg-primary-green w-[200px] md:w-[320px] text-primary-purple "
    }
  return (
    <>
        <motion.button {...props}
            className={ className +  buttonStyle}
            whileHover={{scale:1.1}}
            transition={{type: "spring", stiffness: 500}}
        >{children}

        </motion.button>
    </>
      
    
  )
}
