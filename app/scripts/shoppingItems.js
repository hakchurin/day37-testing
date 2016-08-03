


import Backbone from 'Backbone';
import CartModel from './CartModel';
import data from './data';
import CartModel from './CartModel';

const ShoppingItems = Backbone.Collection.extend({
  model: CartModel,
  createItems: function(){
    data.forEach(item =>{
      this.add(item)
    })
  }
});

export default ShoppingItems;
