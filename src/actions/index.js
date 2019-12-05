export const SET_CITY = 'SET_CITY';

export const setCity = payload => ({ type:'SET_CITY', payload});

const url = "http://api.openweathermap.org/data/2.5/forecast";
const  api_key= "6e4ea37823111c23ec8eb9dbe1f87f1f";

export const fetchForecast = payload => {
    
    return dispatch => {
        const url_forecast = `${url}?q=${city}&appid=${api_key}`;

        // activar en el estado un indicador un busqueda de datos
        fetch(url_forecast).then(
            data => (data.json())
        ).then(
            weather_data => {
                const forecastData = transformForecast(weather_data);
                console.log(forecastData);

                // modificar el estado en el resultado de la promesa fetch
            }
        );
    };
};