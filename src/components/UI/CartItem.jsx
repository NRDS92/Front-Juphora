import React from 'react'
import Button from './Button'
import { currencyFormatter } from '../../util/formattin'

export default function CartItem({item, onIncrease, onDecrease}) {
  return (
    <div key={item.id} className='flex flex-col md:flex-row justify-between border-b-1 p-2 items-center'>
        <h2 className='w-[220px] font-bold text-xl'>{item.name}</h2>
        <h3>{item.content}</h3>
        <h3 className='font-bold'>{currencyFormatter.format(item.price)}</h3>
        <div className="flex items-center gap-3">
        <Button onClick={onDecrease} buttonType={"icon-color-purple"} className="text-black">
            <i className="fa-solid fa-circle-minus"></i>
        </Button>
        <p className="flex items-center justify-center rounded-[50px] h-10 font-bold bg-primary-green w-[200px] text-black text-xl text-center">{item.quantity}</p> 
        <Button onClick={onIncrease} buttonType={"icon-color-purple"} className="text-black">
            <i className="fa-solid fa-circle-plus"></i>
        </Button>
        </div>
    </div>
  )
}
