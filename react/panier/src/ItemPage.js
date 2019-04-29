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
                        <Item product={product} onAddToCart={()=>onAddToCart(product)}/>
                        {/* balise du dessus rajouté après la créationd 'item 1 dont le but est de mettre le bouton en général */}
                        <button className="Item-addToCart" onClick={()=>onAddToCart(product)}>Add to Cart</button>
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