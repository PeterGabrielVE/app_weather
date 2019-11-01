import React from 'react';
import WeatherExtraInfo from './WeatherExtraInfo';
import WeatherTemperature from './WeatherTemperature';
import './styles.css';
import {
    SUN,
} from './../../../constants/weathers';


const WeatherData = () =>(
    
    <div className="weatherDataCont">
        <WeatherTemperature 
        temperature={20} 
        weatherState={SUN}
        />
        <WeatherExtraInfo humidity={80} wind={"10 m/s"}></WeatherExtraInfo>
    </div>
   
);

export default WeatherData;