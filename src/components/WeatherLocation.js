import React from 'react';
import Location from './Location';
import WeatherData from './WeatherData';

const WeatherLocation = (props) =>{
    return( 
        <div>
            <Location city={"Barquisimeto"}></Location>
            <WeatherData></WeatherData>
        </div>
    )
};

export default WeatherLocation;