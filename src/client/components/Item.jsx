import React from 'react';

const Item = (props) => {
	const url = `https:${props.image}`

	return (
		<div>
			<h1>{props.name}</h1>
			<img src={url} alt={props.alt} />
			<h3>${(props.price / 100).toFixed(2)}</h3>
		</div>
	)
}

export default Item
