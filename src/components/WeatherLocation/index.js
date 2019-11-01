import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

const WeatherLocation = (props) =>{
    return( 
        <div className="weatherLocationCont">
            <Location city={"Barquisimeto"}></Location>
            <WeatherData></WeatherData>
        </div>
    )
};

export default WeatherLocation;