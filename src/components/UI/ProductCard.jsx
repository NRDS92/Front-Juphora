import React, { useContext } from 'react'
import UserProgressContext from '../../store/UserProgressContext'
import { currencyFormatter } from '../../util/formattin'


export default function ProductCard({item}) {
  const userProgressCtx = useContext(UserProgressContext)


  function handleShowItem(id){
    userProgressCtx.showProductDeltail(id)

  }
  return (

    <div onClick={()=>handleShowItem(item.id)} className='flex relative justify-center  '>
        <div className='flex flex-col w-[220px] items-center gap-2'>
            <img className='h-50 object-contain' src={item.imgUrl} alt={item.name}/>
            <h2 className="text-2xl font-bold text-center">{item.name}</h2>
            <div>
                <p>{item.description}</p>
                <p className='font-bold'>{currencyFormatter.format(item.price)}</p>
            </div>
        </div>
        <div className={`absolute -z-10 ${item.id % 2 === 0 ? " bg-primary-green rounded-[50%] " :  "bg-secundary-purple rounded-[30%]" }  w-35 h-35  top-[35px]`}></div>
        
    </div>
  )
}
