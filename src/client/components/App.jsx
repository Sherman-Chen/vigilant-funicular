// import libraries
import React from 'react';
import ReactDOM from 'react-dom';

// import components
import Item from './Item';

// start class App
class App extends React.Component {
	constructor() {
		super();
		this.state = {
			products: '',
			itemsInCart: 0
		};
		this.addToCart = this.addToCart.bind(this);
	} // end constructor

	addToCart() {
		console.log('wired!');
		this.setState({
			itemsInCart: this.state.itemsInCart += 1
		});
	} // end addToCart

	componentDidMount() {
		// on mount make GET request for data
		fetch('https://sneakpeeq-sites.s3.amazonaws.com/interviews/ce/feeds/store.js')
		.then(res => {
			// resolve promise
			res.json()
			.then(data => {
				// update state to grab products info
				const products = data.products;
				this.setState({
					products: products
				})
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

ReactDOM.render(<App />, document.getElementById('app'));
