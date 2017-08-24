import React, { Component } from 'react';

export default class LocationFormComponent extends Component {
	render() {
		return (
			<div>
				<h3>Change Location</h3>
				<form onSubmit={this.changeLocation.bind(this)}>
					<input type="text" ref="city" placeholder="Enter City" />
					<br/>
					<input type="text" ref="state" placeholder="Enter State" />
					<br/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		);
	}

	changeLocation(e){
		e.preventDefault();
		let location = {
			city: this.refs.city.value,
			state: this.refs.state.value
		}
		this.props.onLocationChange(location);
		return false;
	}

	onLocationChange(Location) {
		this.props.dispatch.fetchWeather({ city: location.city, state: location.state })	}
}