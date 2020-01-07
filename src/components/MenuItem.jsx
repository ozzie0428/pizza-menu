import React, { Component } from 'react';

export default class MenuItem extends Component {
	render() {
		
		return (
			<div className="menu-list">
                <div id="menu" className='menu-item'>
                    <img src={this.props.menuItem.image} alt={this.props.menuItem.name}/>
                </div>
                <div className='menu-description'>
                    <div className='menu-item-name'>
                        {this.props.menuItem.name}
                    </div>
                    <div>
                        <strong>PRICE:</strong>
                        {this.props.menuItem.price}
                    </div>
                    <div>
                        {this.props.menuItem.description}
                    </div>
                </div>
              
			</div>
		);
	}
}
