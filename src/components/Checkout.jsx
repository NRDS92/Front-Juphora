import { ShopContext } from "../store/CartContext"

import UserProgressContext from "../store/UserProgressContext"
import Modal from "./UI/Modal"
import { useContext, useState } from "react"
import Input from "./UI/Input"
import { currencyFormatter } from "../util/formattin"
import paypalImg from "../assets/Paypal.png"
import klarnaImg from "../assets/Klarna-Symbol.png"
import Button from "./UI/Button"

export default function Checkout() {
    const userProgressCtx = useContext(UserProgressContext)
    const cartCtx = useContext(ShopContext)
    const [method, setMethod] = useState()
    function handleClose(){
        userProgressCtx.hideCheckout()
    }
    const cartTotal = cartCtx.items.reduce((totalPrice, item)=>{
      return totalPrice + item.quantity * item.price
    },0)
  return (
    <Modal open={userProgressCtx.progress === "checkout"}
            onClose={userProgressCtx.progress === "checkout" ? handleClose: null} 
            onClick={handleClose}>
        <form className="flex flex-col py-6 mt-9 rounded-3xl justify-center items-center bg-primary-grey">
            <h2 className="text-2xl py-2">Checkout</h2>
            <p className="font-bold">Total Amount: {currencyFormatter.format(cartTotal)} </p>
            <div className=" flex flex-col md:grid grid-cols-2 mt-5 gap-5">
                <Input placeholder={"Full Name"}  type="text" id="name"/>
                <Input placeholder={"E-Mail Address"}  type="email" id="email"/>
                <Input placeholder={"Street"}  type="text" id="street"/>
                <Input placeholder={"Post Code"}  type="text" id="postal-code"/>
                <Input placeholder={"City"}  type="text" id="city"/>
            </div>
            <div className="flex gap-5 my-5">
                <div onClick={()=>setMethod("paypal")} className="flex justify-between">
                    <input type="radio" id="paypal" name="method" className=""  />
                    <img className="w-[100px]" src={paypalImg} alt="Paypal" />
                </div>
                <div onClick={()=>setMethod("klarna")} className="flex justify-between ">
                    <input type="radio" id="klarna" className=""  name="method"/>
                    <img className="w-[100px]" src={klarnaImg} alt="Klarna" />
                </div>
            </div>
            <Button buttonType="purple-long">Set Order</Button>
        </form>
    </Modal>
  )
}
