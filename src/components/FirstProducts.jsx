import { NavLink} from 'react-router-dom'
import products from '../assets/products'
import ProductCard from './UI/ProductCard'
import Title from './UI/Title'
import Button from './UI/Button'
import lavenderImg from "../assets/lavender.png"


export default function FirstProducts() {
    const sugestedProducts = products.slice(0,4)
  return (
    <>
        <div className='flex relative justify-end'  >
            <img className='hidden md:absolute w-[25%] ' src={lavenderImg} alt='Lavanda'/>
        </div>
        <div className='flex flex-col justify-center items-center'>
            <Title>Find your Perfect Skin Product </Title>
            <div className='grid grid-cols-2 md:flex justify-center  gap-2 md:gap-10'>
                {sugestedProducts.map((item, index)=>(
                    <ProductCard key={item.id} item={item} />
                ))}
            </div>
            <div className='my-10 md:my-20'>
                <NavLink to="/all-products">
                    <Button buttonType="purple-short">Alle Produkte Anzeigen</Button>
                </NavLink>
            </div>
        
        </div>
    </>
  )
}
