import Banner from "./Banner"
import IntroAbout from "./UI/IntroAbout"
import FirstProducts from "./FirstProducts"
import ProductsFrei from "./UI/ProductsFrei"

export default function Home() {
  return (
    <div>
      <Banner animation="fade" />
      <IntroAbout />
      <FirstProducts />
      <ProductsFrei />
    </div>
  )
}
