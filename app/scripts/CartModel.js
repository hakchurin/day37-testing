import Backbone from 'backbone';

 const CarModel = Backbone.Model.extend({
  defaults: {
    items: [],
    price: 0
  },
addItem: function(item){
  let cartItem= this.get('items')
  item.quantity =1
  cartItem.push(item)
  this.set('items',cartItem)
  this.updateTotal()
},
updateTotal: function(){
  let newTotal = 0
  let cartItems = this.get('items')
  cartItem.forEach(item => {
    newTotal += (item.price + item.quantity)
  })
}

})
export default CarModel;
