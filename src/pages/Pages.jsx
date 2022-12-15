import React from 'react'
import FlashDeals from '../components/flashDeals/FlashDeals'
import Home from '../components/mainpage/Home'


const Pages = ({productItems, cartItem, addToCart}) => {
  return (
    <div>
        <Home cartItem={cartItem}/>
        <FlashDeals productItems={productItems} addToCart={addToCart} cartItem={cartItem}/>
    </div>
  )
}

export default Pages