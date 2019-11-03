import React, {Component} from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
    WINDY,
} from './../../constants/weathers';

const location = "Barquisimeto,VE";
const api_key = "6e4ea37823111c23ec8eb9dbe1f87f1f";
const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";

const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;



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

        fetch(api_weather);

        console.log('update');

        this.setState({
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