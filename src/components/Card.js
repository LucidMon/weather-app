import React from "react";
import Loading from './Loading';

const Card = ({showData, loadingData, weatherData, forecastData}) => {
    if(loadingData){
        return <Loading/>
    }

    return(
        <div></div>
    )
}

export default Card;