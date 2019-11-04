import React from 'react';
import WheaterLocation from './WeatherLocation';

const LocationList = () => (
    <div>
        <WheaterLocation city="Barquisimeto,VE"></WheaterLocation>
        <WheaterLocation city="Caracas,ve"></WheaterLocation>
        <WheaterLocation city="Washington,us"></WheaterLocation>
        <WheaterLocation city="Barcelona,es"></WheaterLocation>
    </div>
)

export default LocationList;