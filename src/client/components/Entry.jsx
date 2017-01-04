import React from 'react';
import ReactDOM from 'react-dom';
import {Route, Router, browserHistory} from 'react-router';

import App from './App';
import Cart from './Cart';
import NotFound from './NotFound';

class Entry extends React.Component {
	render() {
		return (
			<Router history={browserHistory}>
				<Route path="/" component={App} />
				<Route path="/cart" component={Cart} />
				<Route path="/*" component={NotFound} />
			</Router>
		)
	}
}

ReactDOM.render(<Entry />, document.getElementById('app'));
