import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    WINDY,
} from './../../constants/weathers';

const data = {
    temperature: 24,
    weatherState: SUN,
    humidity: 15,
    wind: "10 m/s"

}

const data2 = {
    temperature: 20,
    weatherState: WINDY,
    humidity: 19,
    wind: "18 m/s"

}

class WeatherLocation extends Component {

    constructor (){
        super();
        this.state = {
            city: 'Barquisimeto',
            data:data,
        };
    }

    handleUpdateClick = () => {
        console.log('update');
        this.setState({
            city: 'Cabudare',
            data:data2,
        });
    }

    render(){
        const { city , data } = this.state;

        return( 
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                <WeatherData data={data}></WeatherData>
                <button onClick={this.handleUpdateClick}>Actualizar</button>
            </div>
        )
    }
};

export default WeatherLocation;