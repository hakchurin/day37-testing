import Session from './models/session';


export default {
  session: new Session()
};


let store={
  cart: new Cart(),
  shoppingItems: new ShoppingItems()
}

store.shoppingItems.createItems()

export default store;
