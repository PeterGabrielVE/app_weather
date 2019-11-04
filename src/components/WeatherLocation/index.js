import React, {Component} from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import PropTypes from 'prop-types';
import getUrlWeatherByCity from './../../services/getUrlWeatherByCity'
import transformWeather from './../../services/transformWeather';
import Location from './Location';
import WeatherData from './WeatherData';
import './styles.css';

class WeatherLocation extends Component {

    constructor (props){
        super(props);

        const { city } = props;

        this.state = {
            city,
            data:null,
        };
        console.log("constructor");
    }

    componentDidMount(prevProps, preState){
        console.log(" componentDidMount");
        this.handleUpdateClick();
    }
    
    componentDidUpdate(){
        console.log("componentDidUpdate");

    }

    
    handleUpdateClick = () => {

        const api_weather = getUrlWeatherByCity(this.state.city);

        fetch(api_weather).then(resolve => {
            return resolve.json();
        }).then(data => {
            const newWeather = transformWeather(data);
            console.log(newWeather);
            //debugger;
            this.setState({
                data: newWeather
            })
        });

    }

    render(){
        const { city , data } = this.state;
        console.log("render");
        return( 
            <div className="weatherLocationCont">
                <Location city={city}></Location>
                {data ?
                    <WeatherData data={data}></WeatherData> :
                    <CircularProgress size={50}/> }
            </div>
        )
    }
};

WeatherLocation.propTypes = {
    city:PropTypes.string.isRequired,
}

export default WeatherLocation;