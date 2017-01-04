import React from 'react';

const Item = (props) => {
	const url = `https:${props.image}`

	return (
		<div className="items_container">
			<img className="item_img" src={url} alt={props.alt} />
			<h3 className="item_price">${(props.price / 100).toFixed(2)}</h3>
			<h3 className="item_name">{props.name}</h3>
			<button className="cart_btn">Add to Cart</button>
		</div>
	)
}

export default Item
