const url_base_weather = "http://api.openweathermap.org/data/2.5/weather";
const location = "Barquisimeto,VE";
const api_key = "6e4ea37823111c23ec8eb9dbe1f87f1f";

export const api_weather = `${url_base_weather}?q=${location}&appid=${api_key}`;