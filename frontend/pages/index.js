import Head from 'next/head'
import Navbar from '../components/Navbar'
import Products from '../components/Products'
import CarouselComponent from '../components/Carousel'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Shop</title>
      </Head>
      <CarouselComponent/>
      <Products />
        {/* <CarouselComponent /> */}
    </div>
  )
}
