import React from 'react'
import ReactDOM from 'react-dom'
import CartItem from './CartItem';
// import Cart from './Cart';


const TheCart = react.createClass({

  render:function(){
    return (
      <div>
      <CartItem/>
      <Cart/>
      </div>
    )
  }
})

export default TheCart;
