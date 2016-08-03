
import React from 'react';
import ReactDOM from 'react-dom';
import Cart from './Cart';
import CartItem from './CartItem';
import {router, Route, hashHistory} from 'react-router';
// import HaleysStore from './data';




var HaleysStore = [{

  id:1,
  title: 'red shirt',
  price: '1.00'
},
{
id:2,
title: 'orange pants',
price: '2.00',
},
{
id:3,
title: 'yellow socks',
price: '3.00'
},
{
id:4,
title:'green dress',
price: '4.00'
},
{
id: 5,
title: 'blue shoes',
price: '5.00'
},
{
id:6,
title: 'purple hat',
price: '6.00'
}]

export default HaleysStore;
