import transformForecast from './../services/transformForecast';

export const SET_CITY = 'SET_CITY';
export const SET_FORECAST_DATA = 'SET_FORECAST_DATA';

const setCity = payload => ({ type:'SET_CITY', payload});
const setForecastData = payload => ({ type:'SET_FORECAST_DATA', payload});

const url = "http://api.openweathermap.org/data/2.5/forecast";
const  api_key= "6e4ea37823111c23ec8eb9dbe1f87f1f";

export const setSelectedCity = payload => {
    
    return dispatch => {
        const url_forecast = `${url}?q=${payload}&appid=${api_key}`;

        // activar en el estado un indicador un busqueda de datos
        dispatch(setCity(payload));

        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el estado en el resultado de la promesa fetch
                dispatch(setForecastData({city: payload, forecastData }));
            }
        );
    };
};