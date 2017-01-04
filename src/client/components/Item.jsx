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
		//init a wholesale state of false
		this.state = {
			wholesale: false
		};
		this.handleWholesaleChange = this.handleWholesaleChange.bind(this);
	}

	// helper function to set state of wholesale, on set will rerender individual components price to reflect new price
	handleWholesaleChange() {
		this.setState({
			wholesale: !this.state.wholesale
		});
	}

	render() {
		const url = `https:${this.props.image}`;
		let price = (this.props.price / 100).toFixed(2);

		// conditionally change price of item depending on if wholesale box is checked
		if (this.state.wholesale) {
			price = (price * 0.75).toFixed(2);
		}

		return (
			<div className="items_container">
				<label><input type="checkbox" id="wsbox" value={this.state.wholesale} onChange={this.handleWholesaleChange} /> Wholesale?</label>
				<img className="item_img" src={url} alt={this.props.alt} />
				<h3 className="item_price">${price}</h3>
				<h3 className="item_name">{this.props.name}</h3>
				<button onClick={this.props.addToCart} className="cart_btn">Add to Cart</button>
			</div>
		)
	}
}