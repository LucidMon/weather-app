import React, {useState} from "react";

const WeatherPanel = () => {
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=ec17bfd6cca26a4a74ec5541591d68a1&lang=es&q=';
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=ec17bfd6cca26a4a74ec5541591d68a1&lang=es&q=';

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState("");

    const getLocation = async(loc) => {
        
        urlWeather = urlWeather + loc;

        await fetch(urlWeather).then((res) => {
            return res.json();
        }).then((weatherData) => {
            console.log(weatherData);
            setWeather(weatherData);
        });

        urlForecast = urlForecast + loc;

        await fetch(urlForecast).then((res) => {
            return res.json();
        }).then((forecastData) => {
            console.log(forecastData);
            setForecast(forecastData);
        });
    }

    return (
        <div className="container"></div>
    );
}

export default WeatherPanel;