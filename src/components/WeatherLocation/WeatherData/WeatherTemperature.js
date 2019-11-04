import React from 'react';
import WeatherIcons from 'react-weathericons';
import PropTypes from 'prop-types';

import {
    CLOUD,
    DRIZZLE,
    SUN,
    RAIN,
    SNOW,
    THUNDER,

} from './../../../constants/weathers';

const icons = {
    [CLOUD]:"cloud",
    [DRIZZLE]:"day-showers",
    [SUN]:"day-sunny",
    [RAIN]:"rain",
    [SNOW]:"snow",
    [THUNDER]:"day-thunderstore",

};

const getWeatherIcon = weatherState =>{

    const icon = icons[weatherState];
    const sizeIcon = "4x";

    if(icon)
        return  <WeatherIcons className="wicon" name={icon} size={sizeIcon} />;
    else
        return <WeatherIcons className="wicon" name={"rain"} size={sizeIcon} />;

};

const WeatherTemperature = ({ temperature, weatherState }) =>(
    <div className="weatherTemperatureCont">
       {
           getWeatherIcon(weatherState)
       }
        <span className="temperature">{`${temperature} `}</span>
        <span className="temperatureType">{` C° `}</span>
    </div>
   
);

WeatherTemperature.propTypes = {
    temperature: PropTypes.number,
    weatherState: PropTypes.string,
};

export default WeatherTemperature;