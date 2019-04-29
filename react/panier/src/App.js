import React, { Component } from 'react';
/*import Item from './Item.js';*/
import Nav from './Nav.js';
import CartPage from './CartPage.js';
import ItemPage from './ItemPage.js';
import {items} from './statis-data';
import './App.css';

class App extends Component {


  state ={
      activeTab:0,
      cart:[]
    };

handleAddToCart = (product)=> {
  this.setState({
    cart:[...this.state.cart, product.id]
  })
}

handleRemoveOne = (product)=>{
let index = this.state.cart.indexOf(product.id)
this.setState({
  cart:[...this.state.cart.slice(0,index),
  ...this.state.cart.slice(index +1)]
})
}

  tabChange = (index)=>{
  this.setState({activeTab:index});
  }

    renderContent(){
  switch (this.state.activeTab){
    default:
  case 0 : return <ItemPage items={items} onAddToCart={this.handleAddToCart}/>;
  case 1 : return this.renderCart();
    } 
  }




  renderCart(){
//combien d'item il y a dans le panier
let itemCounts = this.state.cart.reduce ((itemCount, itemId)=>{
itemCount[itemId]= itemCount[itemId] || 0;
itemCount[itemId]++;
return itemCount; 
}, 
{}); console.log(itemCounts)
//creation d'un tableau Array d'items

let cartItems = Object.keys(itemCounts).map(itemId =>{
// trouvons l'élément avec son id mon array items depuis statis-data 
let item = items.find(item=>
  
  item.id === parseInt (itemId, items.lenght+1)
  );
// création d'un nouveau élément

return{
  ...item,
  count: itemCounts[itemId]
}
}
);
return( <CartPage items = {cartItems} onAddOne={this.handleAddToCart} onRemoveOne={this.handleRemoveOne}/>)
  }


  /* Rappel ES6 avec Reduce

  let array =[1,5,2,6]
  let total = array.reduce ( (sum, currentvalue) => {

    return sum + currentvalue;

  }, 2)

  espected output : (2,1) => 3
                    (3,5) => 8
                    (8,2) => 10
                    (10,6) => 16


  */


  render() {
let {activeTab}=this.state;

    return (

      <div className="App">
      <h1>Shopping avec React</h1>
      <h3>You have {this.state.cart.length} products in your cart</h3>
          <Nav activeTab={activeTab} onTabChange={this.tabChange}/>
         
{this.renderContent()}

      </div>


    );
  }
}

export default App;

