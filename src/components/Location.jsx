import React, { Component } from 'react'
import LocationList from './LocationList'
import listData from '../locationData'

export default class Location extends Component {
    render() {
        return (
            <div className='locations'>
                <h1>Locations:</h1>
                <div className='location-list'>
                {listData.map((listItem, i) => {
					
					return <LocationList listItem={listItem} key={i} />;
				})}
                </div>
            </div>
        )
    }
}
