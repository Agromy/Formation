import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';



// un composant  sous forme de fonction 
 
function CartPage ({items, onAddOne, onRemoveOne}){


    return(
        <ul className="CartPage-items">
        {   items.map ( (product) => 
            <li key = {product.id} className="CartePage-item">
            <Item product={product}/>

            <button onClick={()=>onRemoveOne(product)}>-</button>
            <span>Quantity </span>

            <button onClick={()=>onAddOne(product)}>+</button>
            <span>Quantity </span>

            
            </li>  
        )}
        </ul>
     )
}




CartPage.propTypes ={

    items : PropTypes.array.isRequired,
    onAddOne : PropTypes.func.isRequired,
    onRemoveOne : PropTypes.func.isRequired
}
// je cible mon composant puis .PropTypes et on lui donne son type .type  et .isRequired (pas necessaire)

export default CartPage;