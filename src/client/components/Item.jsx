import React from 'react';

// const Item = (props) => {
// 	const url = `https:${props.image}`

// 	return (
// 		<div className="items_container">
// 			<label><input type="checkbox" id="wsbox" value="test" /> Wholesale?</label>
// 			<img className="item_img" src={url} alt={props.alt} />
// 			<h3 className="item_price">${(props.price / 100).toFixed(2)}</h3>
// 			<h3 className="item_name">{props.name}</h3>
// 			<button onClick={props.addToCart} className="cart_btn">Add to Cart</button>
// 		</div>
// 	)
// }

// export default Item

export default class Item extends React.Component {
	constructor() {
		super();
		this.state = {
			wholesale: false
		}
	}

	render() {
		const url = `https:${this.props.image}`;
		const price = (this.props.price / 100).toFixed(3);
		return (
			<div className="items_container">
				<label><input type="checkbox" id="wsbox" value={this.state.wholesale} /> Wholesale?</label>
				<img className="item_img" src={url} alt={this.props.alt} />
				<h3 className="item_price">${price}</h3>
				<h3 className="item_name">{this.props.name}</h3>
				<button onClick={this.props.addToCart} className="cart_btn">Add to Cart</button>
			</div>
		)
	}
}