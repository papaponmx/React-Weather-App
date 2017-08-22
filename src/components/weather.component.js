import React, { Component } from 'react';

export default class WeatherComponent extends Component {
	render() {
		if(Object.getOwnPropertyNames(this.props.weather).length === 0){
			return(<div></div>)
		}

		return (
			<div>
				<h3>{this.props.weather.current_observation.display_location.full}</h3>
				<h3>{this.props.weather.current_observation.weather}</h3>
				<img src={this.props.weather.current_observation.icon_url} />
				<h1>{this.props.weather.current_observation.temperature}</h1>
			</div>
		);
	}
}