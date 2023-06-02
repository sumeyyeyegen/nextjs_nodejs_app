import React, {useState} from 'react'
import Styles from '../styles/Product.module.css'
import Title from '../components/Title/index'
import ProductCard from '../components/productCard'
import images from '../images'
import {Grid} from '@chakra-ui/react'
import { addToCart } from "../redux/action/cart";
import { connect, useSelector } from "react-redux";
import Toast from '../util/toast'

const Products = () => {
  
  const cartItems = useSelector((state) => state.cart.items);
  const [products, setProducts] = useState([
    {id:1,name:"Kahve 1",image:images.Image5},
    {id:2,name:"Kahve 2",image:images.Image6},
    {id:3,name:"Kahve 3",image:images.Image7},
    {id:4,name:"Kahve 3",image:images.Image7},
    {id:5,name:"Kahve 3",image:images.Image7}
  ])

  return (<div>
  <Title title={"Ürünler"}></Title>
    <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>
    {
      cartItems.added_status ===true ? <Toast type="success" message="İşlem başarılı" /> : cartItems.added_status ===false ? <Toast type="error" message="Bir şeyler ters gitti" /> :""
    }
      {
        products.map((product,i) =>{ 
          return <ProductCard key={i} product={product}/>
        })
      }
    </Grid>
    </div>
  )
}

const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(Products);