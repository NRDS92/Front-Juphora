import { useContext, useEffect } from "react"
import { ShopContext } from "../store/CartContext"
import UserProgressContext from "../store/UserProgressContext.jsx"
import Modal from "./UI/Modal"
import Button from "./UI/Button.jsx"
import { currencyFormatter } from "../util/formattin.js"


export default function ProductDetail() {
  const {products, addItem, items} = useContext(ShopContext)
  const userProgressCtx = useContext(UserProgressContext)
  
  const itemId = userProgressCtx.itemId 
  const product = products[itemId]

  const cartTotal = items.reduce((totalPrice, item)=>{
      return totalPrice + item.quantity * item.price
    },0)

  function handleCloseItem(){
    userProgressCtx.hideProductDeltail()
  }
  function handleAdditem(){
    addItem(product)
    console.log("pruduct added... or thats what i thnk")
  }
  function handleShowCart(){
    userProgressCtx.showCart()
  }
  

  return (
    <Modal className="cart"
    open={userProgressCtx.progress === "item-description"}
    onClose={userProgressCtx.progress === "item-description" ? handleCloseItem : null}
    onClick={handleCloseItem}>
      <div className="flex flex-col md:flex-row justify-center items-center gap-10 m-10 p-5 ">
        <div className={`flex items-center justify-center relative rounded-2xl  ${product.id% 2 !== 0 ? " bg-primary-green " :  "bg-secundary-purple " }`}>
          <img className="h-[220px] " src={product.imgUrl} />
        </div>
        <div className="flex flex-col items-center">
          <div className="flex flex-col md:flex-row gap-6 items-center justify-center">
            <h2 className="text-3xl font-bold">{product.name}</h2>
            <h3 className="text-xl">{currencyFormatter.format(product.price)}</h3>
          </div>
          <div className="w-[80%] text-center">
            <p className="m-5  font-bold ">{product.description}</p>
            <p className="my-5 text-justify">{product.longDescription}</p>
          </div>
          <div className="flex  justify-center gap-10">
            <p className="flex items-center justify-center rounded-[50px] h-10 font-bold bg-primary-grey w-[200px] text-black text-sm text-center">1 X {product.content}</p>
          </div>
          <div className=" mt-5 md:mt-10 flex gap-2 md:gap-7 flex-col md:flex-row">
            <p>
              <Button buttonType="green-long" onClick={handleAdditem}>In den Warenkorb</Button>
            </p>
            {cartTotal > 0 ?
              <p>
                <Button buttonType="purple-long" onClick={handleShowCart}>Warenkorb</Button>
              </p>:
              <Button buttonType="grey-long" >Warenkorb</Button>
            }
            
          </div>
        </div>
      </div>
    </Modal>
  )
}
