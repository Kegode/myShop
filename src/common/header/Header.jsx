import React from 'react'
import Search from './Search'
import Head from './Head'
import Navbar from './Navbar'
import './Header.css'

const Header = ({cartItem, addToCart}) => {
  return (
    <div>
        <Head/>
        <Search cartItem={cartItem} addToCart={addToCart}/>
        <Navbar/>
        
    </div>
  )
}

export default Header