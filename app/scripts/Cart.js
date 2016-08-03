import React from 'react';
import ReactDOM from 'react-dom';
import CartModel from './CartModel';

//this is the entire cart


const Cart = React.createClass({
getElementById: function(){
  return {CartItem: [], total: 0}

},
render: function(){
  let carItems = this.state.cartItems.map((item,i)=>{
    return (<CartItem item={item} key={i}/>)
  })
  return(
    <div className ="cart">
    <ul className= "cartList">
    {cartitems}
    </ul>
    </div>
  )
}
})


export default Cart;
