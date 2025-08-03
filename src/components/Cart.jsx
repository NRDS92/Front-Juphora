import React, { useContext } from 'react'
import Modal from './UI/Modal'
import { ShopContext } from '../store/CartContext'
import UserProgressContext from '../store/UserProgressContext';
import CartItem from './UI/CartItem';
import Button from './UI/Button';
import { currencyFormatter } from '../util/formattin';

export default function Cart() {
    const cartCtx = useContext(ShopContext)
    const userProgressCtx = useContext(UserProgressContext);
    const cartTotal = cartCtx.items.reduce((totalPrice, item)=>{
      return totalPrice + item.quantity * item.price
    },0)
    const deliveryFee = 5

    function handleClose(){
        userProgressCtx.hideCart()
    }
    function goToCheckout(){
      userProgressCtx.showCheckout()
    }

  return (
    
      <Modal open={userProgressCtx.progress === "cart"}
            onClose={userProgressCtx.progress === "cart" ? handleClose: null} 
            onClick={handleClose}>

            {cartTotal > 0 ? 
            <div className='flex flex-col text-center gap-1 p-5 my-5'>
              <h2 className='font-bold text-3xl mb-7'>Ihre Produkte</h2>

              {cartCtx.items.map((item)=>{
                  return(
                    <CartItem item={item} key={item.id}
                      onIncrease={()=>cartCtx.addItem(item)}
                      onDecrease={()=>cartCtx.removeItem(item.id)}
                    />
                  )
                })
              }

              <div className='flex flex-col px-20 mt-5'>
                <div className='flex justify-between'>
                  <p>Subtotal</p>
                  <p>{currencyFormatter.format(cartTotal)}</p>
                </div>
                <div className='flex justify-between'>
                  <p className='flex justify-between'>Liferung</p>
                  <p>{currencyFormatter.format(deliveryFee)}</p>
                </div>
                <div className='flex justify-between font-bold'>
                  <p >Total</p>
                  <p className=''>{currencyFormatter.format(cartTotal + deliveryFee)}</p>
                </div>
                
              </div>
              <p className='mt-7'>
                <Button onClick={goToCheckout} buttonType="purple-long">Bestellen</Button>
              </p>
            </div> :
              <div className='text-2xl text-center p-5'>
                <h2>No Items added to the cart</h2>
              </div>
            
            
            
            }
            
            
    </Modal>

    
  )
}
