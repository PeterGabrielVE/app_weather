import React, {Component} from 'react';
import PropTypes from 'prop-types';
import ForecastItem from './ForecastItem';
import transformForecast from './../services/transformForecast';
import './styles.css';

/*const days = [
    'Lunes',
    'Martes',
    'Miercoles',
    'Jueves',
    'Viernes',
];*/

const url = "http://api.openweathermap.org/data/2.5/forecast";
const  api_key= "6e4ea37823111c23ec8eb9dbe1f87f1f";

class ForecastExtended extends Component {

    constructor(){
        super();
        this.state = { forecastData: null }
    }

    componentDidMount(){
        const url_forecast = `${url}?q=${this.props.city}&appid=${api_key}`;

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                console.log(weather_data);
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);
                this.setState({ forecastData });
            }
        );
    }

    renderForecastItemDays(forecastData){
        //return <h1>Render Items</h1>;
        return forecastData.map( forecast => 
            (<ForecastItem 
                key={`${forecast.weekDay}${forecast.hour}`}
                weekDay={forecast.weekDay}
                hour={forecast.hour}
                data={forecast.data}>
            </ForecastItem>));
    }

    renderProgress = ()=>{
        return <h3>Cargando pronóstico extendido..</h3>;
    }


    render(){
        const { city } = this.props;
        const { forecastData } = this.state;

        return(
            <div className="forecast-title">
                <h2>Pronóstico extendido para {city}</h2>
                { forecastData ? this.renderForecastItemDays(forecastData) :
                this.renderProgress()}
            </div>
        );
    }
}

ForecastExtended.propTypes = {
    city: PropTypes.string.isRequired,
};

export default ForecastExtended;