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
			<div className="container">
				<div className="row">
					<div className="text-center col-md-6 col-md-offset-3">
						<h1>WeatherCheck</h1>
						<WeatherComponent weather={weather} />
						<LocationFormComponent onLocationChange={this.onLocationChange.bind(this)} /> 
					</div>
				</div>
			</div>
		);
	}

	onLocationChange(location) {
		this.props.dispatch(fetchWeather({ city: location.city, state: location.state }));
	}
}