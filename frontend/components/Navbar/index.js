import React, {useState} from 'react'
import Styles from './styles.module.css'

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const buttonClick = () =>{
    setToggleMenu(!toggleMenu);
  }

  return (
    <header className={Styles.header}>
      <div className={Styles.brand}><a href="/">Coffee Shop</a></div>
      <nav>
        <ul className={Styles.menuList}>
          <li><a href="/home">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li className={Styles.login}><a href="/login" >Login</a></li>
          <li className={Styles.signup}><a href="/signup">Signup</a></li>
        </ul>
      </nav>
      <div className={Styles.hamburgerIcon} onClick={() => buttonClick()}>
        <div className={Styles.bar1}></div>
        <div className={Styles.bar2}></div>
        <div className={Styles.bar3}></div>
        <ul className={Styles.mobileMenu} style={toggleMenu ? {display:"block"}:{display:"none"}}>
          <li><a href="/home">Home</a></li>
          <li><a href="/products">Products</a></li>
          <li className={Styles.login}><a href="/login">Login</a></li>
          <li className={Styles.signup}><a href="/signup">Signup</a></li>
        </ul>
      </div>
    </header>
  )
}

export default Navbar