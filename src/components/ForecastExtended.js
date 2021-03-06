import React from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import './styles.css';

const renderForecastItemDays = (forecastData) => {
    //return <h1>Render Items</h1>;
    return forecastData.map( forecast => 
        (<ForecastItem 
            key={`${forecast.weekDay}${forecast.hour}`}
            weekDay={forecast.weekDay}
            hour={forecast.hour}
            data={forecast.data}>
        </ForecastItem>));
}

const renderProgress = () => {
    return <h3>Cargando pronóstico extendido..</h3>;
}

const ForecastExtended = ({ city, forecastData }) => (
            <div className="forecast-title">
                <h2>Pronóstico extendido para {city}</h2>
                { forecastData ? this.renderForecastItemDays(forecastData) :
                renderProgress()}
            </div>
)

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
    forecastData: PropTypes.array.isRequired,
};

export default ForecastExtended;