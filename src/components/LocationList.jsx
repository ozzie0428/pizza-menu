import React, { Component } from 'react';

export default class LocationList extends Component {
	render() {
		return (
			<div className="location">
				<p>{this.props.listItem.name}</p>
				<strong>Address:</strong>
				<p>{this.props.listItem.address}</p>
                <strong>Phone:</strong>
                <p> {this.props.listItem.phone}</p>
			</div>
		);
	}
}
