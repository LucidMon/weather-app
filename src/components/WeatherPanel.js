import React, {useState} from "react";
import SearchBar from './SearchBar';

const WeatherPanel = () => {
    let urlWeather = 'https://api.openweathermap.org/data/2.5/weather?appid=ec17bfd6cca26a4a74ec5541591d68a1&lang=es&q=';
    let urlForecast = 'https://api.openweathermap.org/data/2.5/forecast?appid=ec17bfd6cca26a4a74ec5541591d68a1&lang=es&q=';

    const [weather, setWeather] = useState([]);
    const [forecast, setForecast] = useState([]);
    const [location, setLocation] = useState("");
    const [loading, setLoading] = useState(false);
    const [show, setShow] = useState(false);

    const getLocation = async(loc) => {
        setLoading(true);
        setLocation(loc);
        
        urlWeather = urlWeather + loc;

        await fetch(urlWeather).then((res) => {
            if(!res.ok) throw {res}
            return res.json();
        }).then((weatherData) => {
            console.log("console log: weatherData", weatherData);
            setWeather(weatherData);
        }).catch(error => {
            console.log("console log: weatherData error", error);
            setLoading(false);
            setShow(false);
        });

        urlForecast = urlForecast + loc;

        await fetch(urlForecast).then((res) => {
            if(!res.ok) throw {res}
            return res.json();
        }).then((forecastData) => {
            console.log("console log: forecastData", forecastData);
            setForecast(forecastData);
        }).catch(error => {
            console.log("console log: forecastData error", error);
            setLoading(false);
            setShow(false);
        });
    }

    return (
        <React.Fragment>
            <SearchBar
                newLocation = {getLocation}
            />
        </React.Fragment>
    );
}

export default WeatherPanel;