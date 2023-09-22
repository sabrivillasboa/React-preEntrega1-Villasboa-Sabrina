import React from 'react'
import img from './cart.png'
import './CartWidget.css'

const CartWidget = () => {
  return (
    <div className='container-cart'>
        <img className='img-cart' src= {img} alt="cart"/>
        <span className='span-cart'>3</span>
    </div>
  )
}

export default CartWidget