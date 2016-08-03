import React from 'react';
import ReactDOM from 'react-dom';
import HaleysStore from './data';
import Store from './store';

///this is the item already in your cart


const CartItem = React.createClass({
  getInitialState: function(){
    let cartStateItem = store.cart.findItem(this.props.item)
    return {item:cartStateItem}
  },
  updateItem: function(){
    let cartStateItem = store.cart.findItem(this.props.item)
    if (cartStateItem){
      this.setState({item:cartStateItem})
    },

    render:function(){
      if (this.state.item) {
        return null
    },
    return(

      <li className = "cartItem">
      <h2 className= "ItemName"> {this.state.item.name}</h2>
      <h2 className = "itemPrice"> {this.state.item.price}</h2>
    </li>
    )

  }

});

export default CartItem;
