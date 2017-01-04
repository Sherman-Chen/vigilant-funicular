import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
	constructor() {
		super()
		this.state = {
			products: ''
		}
	}

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
	}

	render() {
		// due to async request only render content when the response has been received, else render a loading message
		if (this.state.products.length) {
			return (
				<div>
					
				</div>
			)
		} else {
			return (
				<div>Loading...</div>
			)
		}
	}
}

ReactDOM.render(<App />, document.getElementById('app'));
