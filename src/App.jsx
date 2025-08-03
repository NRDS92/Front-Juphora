import { Route, Routes } from "react-router-dom"

import Header from "./components/Header"
import Home from "./components/Home"
import AllProducts from "./components/AllProducts"
import ProductDetail from "./components/ProductDetail"
import Cart from "./components/Cart"
import Checkout from "./components/Checkout"
import AboutUs from "./components/AboutUs"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Login from "./components/Login"


function App() {


  return (
    <>
      <Header />
      
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/all-products" element={<AllProducts />}></Route>
        <Route path="/about-us" element={<AboutUs />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/login" element={<Login />}></Route>
      </Routes>
      <ProductDetail />
      <Cart />
      <Checkout />
      <Footer />
    </>
  )
}

export default App
