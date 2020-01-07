import React, { Component } from 'react';
import menuData from '../pizzaData';
import MenuItem from './MenuItem';

export default class Menu extends Component {
	render() {
		console.log(menuData);
		return (
			<div className="menu">
				<h1>Menu</h1>
                <div className="menu-container">
				{menuData.map((menuItem, i) => {
					
					return <MenuItem menuItem={menuItem} key={i} />;
				})}
                </div>
			</div>
		);
	}
}
