import React from "react";
import Loading from './Loading';

const Card = ({showData, loadingData, weatherData, forecastData}) => {
    if(loadingData){
        return <Loading/>;
    }

    let today = new Date();
    let year = today.getFullYear();
    let month = today.getMonth() + 1; // Sumamos 1 ya que los meses se representan del 0 al 11
    let day = today.getDate();

    let date = `${day}/${month}/${year}`;

    const celcius = (temp) =>{
        return (temp - 273.15).toFixed();
    }

    let url = "";
    let iconUrl = "";

    if(showData){
        url = " https://openweathermap.org/img/wn/"
        iconUrl = url + weatherData.weather[0].icon + '.png'
    }

    return(
        <div className="mt-5">
            {
                showData === true ? (
                    <div className="container">
                        <div className="card mb-3 mx-auto bg-secondary text-light">
                            <div className="row g-0">
                                <div className="col-md-4">
                                    <img src="https://images.pexels.com/photos/746148/pexels-photo-746148.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" className="img-fluid rounded-start" alt="..."></img>
                                </div>
                                <div className="col-md-8">
                                    <div className="row g-0">
                                        <h3 className="card-title">{weatherData.name}</h3>
                                        <p className="card-date" >{date}</p>
                                        <h3 className="card-temp">{celcius(weatherData.main.temp)+' °C'}<img src={iconUrl} alt="icon"></img>{weatherData.weather[0].description}</h3>
                                        
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                    </div>

                ):(
                    <h2 className="text-dark">Sin Datos</h2>
                )
            }
        </div>
    )
}

export default Card;