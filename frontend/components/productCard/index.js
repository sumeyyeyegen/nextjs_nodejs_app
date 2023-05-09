import React from 'react'
import Styles from './styles.module.css'
import { addToCart } from "../../redux/action/cart";
import { connect } from "react-redux";

const ProductCard = () => {
  return (
    <div>ProductCard</div>
  )
}
const mapDispatchToProps = {
  addToCart
};

export default connect(null, mapDispatchToProps)(ProductCard);