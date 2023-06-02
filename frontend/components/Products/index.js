import React, {useState} from 'react'
import images from '../../images'
import Title from '../Title'
import ProductCard from '../productCard'
import {Grid} from '@chakra-ui/react'
import { addToCart } from "../../redux/action/cart";
import { connect } from "react-redux";

const Products = () => {
  const [products, setProducts] = useState([
    {id:1,name:"Kahve 1",image:images.Image5},
    {id:2,name:"Kahve 2",image:images.Image6},
    {id:3,name:"Kahve 3",image:images.Image7},
    {id:4,name:"Kahve 3",image:images.Image7},
    {id:5,name:"Kahve 3",image:images.Image7},
    {id:6,name:"Kahve 3",image:images.Image7}])
    
  return (
    <>
      <Title title={"Ürünler"}></Title>
      <Grid templateColumns="repeat(auto-fill, minmax(250px, 1fr))" gap={6}>  
        {
          products.map((product,i) =>{
            return <ProductCard key={i} product={product}/>
          })
        }
      </Grid>
    </>
  )
}

const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(Products);