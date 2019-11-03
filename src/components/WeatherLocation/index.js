import React, {Component} from 'react';
import convert from 'convert-units';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
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



class WeatherLocation extends Component {

    constructor (){
        super();
        this.state = {
            city: 'Barquisimeto',
            data:data,
        };
    }

    getWeatherState = weather_data => {
        return SUN;
    }

    getTemp = Kelvin =>{
        return Number(convert(Kelvin).from("K").to("C").toFixed(2));
    }

    getData = weather_data => {

        const { humidity, temp } = weather_data.main;
        const { speed } = weather_data.wind;
        const weatherState = this.getWeatherState(weather_data);
        const temperature = this.getTemp(temp);

        const data = {
            humidity,
            temperature,
            weatherState,
            wind: `${speed} m/s `
        }

        return data;
    }

    handleUpdateClick = () => {

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = this.getData(data);
            console.log(newWeather);
            //debugger;
            this.setState({
                data: newWeather
            })
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