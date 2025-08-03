import {  useEffect, useRef } from "react";
import {createPortal} from "react-dom"
import Button from "./Button";


export default function Modal({children, open, className="", onClose }) {
    const dialog = useRef();

    useEffect(()=>{
        const modal = dialog.current;
        if(open){
            modal.showModal()
        }

        return ()=>modal.close()
    },[open])
    
  return createPortal(
    <dialog ref={dialog} className={` ${className}  w-full md:w-[80%] p-5 m-2 md:mt-10 md:mx-30 no-scrollbar rounded-4xl backdrop:bg-[rgba(0,0,0,0.55) ] `} onClose={onClose}>
    <Button onClick={onClose} buttonType={"icon-color-purple"} className="absolute right-6">
      <i className="fa-solid fa-circle-xmark"></i>
    </Button>
        {children}
    </dialog>,
    document.getElementById("modal")
  )
}
