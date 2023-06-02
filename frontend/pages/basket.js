import React from 'react'
import Styles from '../styles/Basket.module.css'
import { addToCart } from "../../redux/action/cart";
import { connect } from "react-redux";

const Basket = () => {
  return (
    <div></div>
  )
}

const mapDispatchToProps = {
  addToCart,
  cartItems: state.cart.items,
};

export default connect(null, mapDispatchToProps)(Basket);