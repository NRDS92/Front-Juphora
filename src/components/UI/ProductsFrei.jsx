
import Frei1 from "../../assets/Frei1.png"
import Frei2 from "../../assets/Frei2.png"
import Frei3 from "../../assets/Frei3.png"
import Frei4 from "../../assets/Frei4.png"
import ProductsFreiItems from "./ProductsFreiItems"
import Title from "./Title"

export default function ProductsFrei() {
  return (
    <div className='flex flex-col items-center mb-10 text-center'>
        <Title >Unsere Produkte sind frei von</Title>
        <div className='flex flex-col md:flex-row md:gap-10' >
            <ProductsFreiItems src={Frei1} text="Von Paraben"/>
            <ProductsFreiItems src={Frei3} text="Nanopartikeln"/>
            <ProductsFreiItems src={Frei2} text="Tierischen Inhaltsstoffen"/>
            <ProductsFreiItems src={Frei4} text="Mineralöl"/>
        </div>
    </div>
  )
}

