import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import CarouselComponent from '../components/Carousel'
import Deals1 from '../components/elements/Deals1'
import ProductCard from '../components/productCard'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Coffee Shop</title>
      </Head>
      <Navbar/>
      <div className="container">
        <CarouselComponent />
        <ProductCard />
      </div>
    </div>
  )
}
