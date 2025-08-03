
import { useContext, useEffect, useState } from 'react'
import Title from './UI/Title'
import { ShopContext } from '../store/CartContext.jsx'
import ProductCard from './UI/ProductCard.jsx'
import Button from './UI/Button.jsx'

export default function AllProducts() {

    const {products} = useContext(ShopContext)
    const [showFilter, setShowFilter] = useState(false);
    const [category, setCategory] = useState([])
    const [subCategory, setSubCategory] = useState([])
    const [filterProducts, setFilterProducts] =  useState([])
    const [sortType, setSortType] = useState("relevant")

    function toggleCategory(e){
        if (category.includes(e.target.value)) {
            setCategory(prev=> prev.filter(item => item != e.target.value))
        }else{
            setCategory(prev => [...prev, e.target.value])
        }
    };
    function toggleSubCategory(e){
        if (subCategory.includes(e.target.value)) {
            setSubCategory(prev=> prev.filter(item => item != e.target.value))
        }else{
            setSubCategory(prev => [...prev, e.target.value])
        }
    };

    function applyFilter(){
        let productsCopy = products.slice();

        if (category.length > 0){
            productsCopy = productsCopy.filter(item => category.includes(item.category))
        }
        if (subCategory.length > 0){
            productsCopy = productsCopy.filter(item => subCategory.includes(item.subCategory))
        }
        setFilterProducts(productsCopy)
    }

    function sortProducts(){
        let filterProductscopy = filterProducts.slice()

        if (sortType === "low-high") {
            setFilterProducts(filterProductscopy.sort((a,b)=>(a.price - b.price)));
        } else if (sortType === "low-high") {
            setFilterProducts(filterProductscopy.sort((a,b)=>(b.price - a.price)));
        }

        switch(sortType){
            case "low-high":
                setFilterProducts(filterProductscopy.sort((a,b)=>(a.price - b.price)));
                break;
            case "high-low":
                setFilterProducts(filterProductscopy.sort((a,b)=>(b.price - a.price)));
            break;
            default:
                applyFilter();
            break;
        }
    }
    useEffect(()=>{
        applyFilter()
    }, [category, products,subCategory] )

    useEffect(()=>{
        sortProducts()
    },[sortType]);
    
  return (
    <>
      <Title>Find your Perfect Skin Product </Title>
      <div className='flex flex-col sm:flex-row gap-1 sm:gap-10 p-10 justify-center '>
        {/*Filter option*/}
        <div className='min-w-60'>
            <div className='flex justify-center items-center gap-6'>
                <Button buttonType="purple-short" onClick={()=>setShowFilter(!showFilter)} >FILTERS 
                    <i className={`   pl-5 ${showFilter ? 
                        "fa-solid fa-circle-arrow-down" :
                        "fa-solid fa-circle-arrow-right"}`
                    }></i>
                </Button>         
            </div>
           
        {/*Filter Category*/}
            {showFilter ? 
                <div className={`border border-gray-300 pl-5 py-3 mt-6 sm:block`}>
                    <div>
                        <p className='my-3 text-sm font-medium'>CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light'>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={"pflege"} onClick={toggleCategory} />Pflege
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={"repair"} onClick={toggleCategory} />Repair
                            </p>
                        </div>
                    </div>
                    <div>
                        <p className='my-3 text-sm font-medium'>SUB-CATEGORIES</p>
                        <div className='flex flex-col gap-2 text-sm font-light'>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={"cream"} onClick={toggleSubCategory} />Cream
                            </p>
                            <p className='flex gap-2'>
                                <input className='w-3' type='checkbox' value={"shampoo"} onClick={toggleSubCategory} />Shampoo
                            </p>
                        </div>
                    </div>
                    <p className='my-3 text-sm font-medium'>Sort By</p>
                    <select onChange={(e)=>setSortType(e.target.value)} className='border-2 border-gray-300 text-sm px-2'>
                        <option value="relevant">sort by: Relevant</option>
                        <option value="low-high">sort by: Low to High</option>
                        <option value="high-low">sort by: High to Low</option>
                    </select>
                </div>:null
            }
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 gap-y-6'>
            {filterProducts.map((item, index)=>{
                return(
                    <ProductCard key={index} item={item} />
                )
            })}

        </div>
      </div>
    </>
  )
}
