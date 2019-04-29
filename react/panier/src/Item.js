import React from 'react';
import PropTypes from 'prop-types';
//import './item.css';


const Item = ({product, children}) => (

<div className="Item">

{/*------Start Block left*/ }
<div className="Item-left">
<div className="Item-title"> {product.name}</div>
<div className="Item-description"> {product.description}</div>
</div>
{/*------End Block left*/ }

{/*------Block Right*/ }
<div className="Item-right">
<div className="Item-price">{product.price}</div>
{children}
</div>
{/*------End Block Right*/ }

</div>

)

Item.propTypes = {
    product : PropTypes.object.isRequired,
    children: PropTypes.node
}


export default Item

/*la bonne démarche : je créée mon composant, je créée ses propriétés puis j'exporte.*/