import { NavLink } from "react-router-dom"
import Button from "./UI/Button"
import imgLogo from "../assets/JuphoraLogo.png"
import { useContext, useState } from "react"
import UserProgressContext from "../store/UserProgressContext"
import { ShopContext } from "../store/CartContext"


export default function Header() {

  const userProgressCtx = useContext(UserProgressContext)
  const cartCtx = useContext(ShopContext)
  const [menu, setMenu] = useState(false)

  const totalCartItems = cartCtx.items.reduce((totalItems, item)=>{
    return totalItems + item.quantity
  },0)

  function handleShowCart(){
    userProgressCtx.showCart()
    setMenu(false)
  }
  
  return (
    <div className="flex  h-[60px] md:h-[100px]  justify-between items-center  px-5">
    <NavLink to="/" >
      <img className="w-20 md:w-50 " src={imgLogo} alt="logo"/>
    </NavLink>
    {/* Responsive Menu*/}
    <div className="md:hidden">
      <Button onClick={()=>setMenu(!menu)}>
          <i className="fa-solid fa-bars text-primary-purple "></i>
        </Button>
        {menu ?
      <div className="absolute right-0 flex flex-col md:hidden items-end z-10 bg-white p-1 ">
            <ul className="w-[120px] text-center text-sm flex flex-col gap-2">
              <li ><NavLink className="hover:bg-primary-purple hover:text-white rounded-xl py-2 px-5" onClick={()=>setMenu(false)} to="/" >Home</NavLink></li>
              <li ><NavLink className="hover:bg-primary-purple hover:text-white rounded-xl py-2 px-5" onClick={()=>setMenu(false)} to="/about-us" >Über uns</NavLink></li>
              <li ><NavLink className="hover:bg-primary-purple hover:text-white rounded-xl py-2 px-5" onClick={()=>setMenu(false)} to="/contact" >Kontact</NavLink></li>
              <li ><NavLink className="hover:bg-primary-purple hover:text-white rounded-xl py-2 px-5" onClick={()=>setMenu(false)} to="/all-products" >All Products</NavLink></li>
              <li ><NavLink className="hover:bg-primary-purple hover:text-white rounded-xl py-2 px-5" onClick={handleShowCart} >Go To Cart</NavLink></li>
              <li ><NavLink className="hover:bg-primary-purple hover:text-white rounded-xl py-2 px-5" onClick={()=>setMenu(false)} to="/login" >Login</NavLink></li>
            </ul>
        </div>:
        null
      }
      </div>      
      <nav className="md:flex justify-center hidden">
        <div className="flex gap-5 ">
            <p >
              <NavLink to="/about-us">
                <Button>Über uns</Button>
              </NavLink>
            </p>
            <p>
            <NavLink to="/contact">
              <Button>Kontact</Button>
            </NavLink>
            </p>
            <p>
              <NavLink to="/all-products">
                <Button buttonType="purple-short">Go to the products</Button>
              </NavLink>
            </p>
        </div>
        <div className="flex ml-5 mr-10 gap-5 " >
          <div className="flex justify-center items-center">
            <Button onClick={handleShowCart} buttonType="icon" className="flex justify-center items-center" >
              <i className="fa-solid fa-cart-arrow-down"></i>
              <p className=" text-secundary-purple w-[50px]">{totalCartItems}</p>
            </Button>
          </div>
            <NavLink to="/login">
              <Button buttonType="icon"><i className="fa-solid fa-circle-user"></i></Button>
            </NavLink>
        </div>
      </nav>
    </div>
  )
}
