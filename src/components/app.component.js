import React, { Component } from 'react';
import {connect} from 'react-redux';
import WeatherComponent from './weather.component';
import LocationFormComponent from './location-form.component';
import {fetchWeather} from '../actions/weather.actions';


@connect((store) => {
	return {
		weather: store.weather.weather,
	};
})

export default class AppComponent extends Component {
	componentWillMount() {
		this.props.dispatch(fetchWeather({city: 'Boston', state: 'MA'}));
	}

	render() {
		const {weather} = this.props;
		return (
			<div>
				<h1>WeatherCheck</h1>
				<WeatherComponent />
				<LocationFormComponent /> 
			</div>
		);
	}
}