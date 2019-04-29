import React from 'react';
import  PropTypes from 'prop-types';
/*import './ItemPage.css'    si on veut faire le css du component*/
import Item from './Item.js';


// un composant  sous forme de fonction 
 
function ItemPage ({items, onAddToCart}){

    return(
        <ul className="ItemPage-items">
            {
                items.map(
                    product =>
                        <li key={product.id} className="ItemPage-item">
                        <button className="Item-addToCart" onClick={onAddToCart}>Add to Cart</button>
                        </li>
                   )
                
            }

        </ul>
    )

}


ItemPage.propTypes = {

    items:PropTypes.array.isRequired,
    onAddToCart: PropTypes.func.isRequired
}

export default ItemPage;
/*Proptypes est l'objet que l'on importe et proptypes et ici on s'assure que items est un array*/