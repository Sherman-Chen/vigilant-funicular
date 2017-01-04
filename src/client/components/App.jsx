// import libraries
import React from 'react';

// import components
import Item from './Item';

// start class App
export default class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: '',
			itemsInCart: 0
		};
		this.addToCart = this.addToCart.bind(this);
	} // end constructor

	addToCart() {
		this.setState({
			itemsInCart: this.state.itemsInCart += 1
		});
	} // end addToCart

	componentDidMount() {
		// on mount make GET request to server which then pings the url to fetch for data
		/* we could also just directly fetch the data ourselves, but we interact with our server first, 
		incase we need to perform any other operations before receiving the data to render/display */
		fetch('http://localhost:8080/data')
		.then(res => {
			res.json()
			.then(data => {
				this.setState({
					products: data
				});
			});
		})
		.catch(err => {
			console.error(err);
		})
	} // end componentDidMount

	render() {
		// due to async request only render content when the response has been received, else render a loading message
		if (this.state.products.length) {
			// here we map over a custom component, providing the necessary props to render the desired content
			return (
				<div className="store_container">
					<div className="nav">
						<div className="store_title">Store Page</div>
						<div className="shopping_cart">{this.state.itemsInCart} Items in Cart</div>
					</div>
					<div>
						{this.state.products.map((item) => {
							return <Item name={item.name} image={item.mainImage.ref} alt={item.name} price={item.defaultPriceInCents} addToCart={this.addToCart} key={item.id} />
						})}
					</div>
				</div>
			)
		} else {
			return (
				<div>Loading...</div>
			)
		}
	} // end render
} // end class App
