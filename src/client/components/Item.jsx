// import libraries
import React from 'react';

// start class Item
export default class Item extends React.Component {
	constructor() {
		super();
		//init a wholesale state of false, and price color of black
		this.state = {
			wholesale: false,
			discount: 'black'
		};
		this.handleWholesaleChange = this.handleWholesaleChange.bind(this);
	} // end constructor

	// helper function to set state of wholesale, on set will rerender individual components price to reflect new price
	handleWholesaleChange() {
		this.setState({
			wholesale: !this.state.wholesale,
			discount: this.state.wholesale ? 'black' : 'red'
		});
	} // end handleWholesaleChange

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
				{/* inline a conditional styling here to better indicate discount*/}
				<h3 className="item_price" style={{color: this.state.discount}}>${price}</h3>
				<h3 className="item_name">{this.props.name}</h3>
				<button onClick={this.props.addToCart} className="cart_btn">Add to Cart</button>
			</div>
		)
	} // end render
} // end class Item
