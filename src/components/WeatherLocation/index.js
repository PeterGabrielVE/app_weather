import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';
import {
    SUN,
} from './../../constants/weathers';

const data = {
    temperature: 20,
    weatherState: "SUN",
    humidity: 25,
    wind: "10 m/s"

}

const WeatherLocation = () =>{
    return( 
        <div className="weatherLocationCont">
            <Location city={"Barquisimeto"}></Location>
            <WeatherData data={data}></WeatherData>
        </div>
    )
};

export default WeatherLocation;