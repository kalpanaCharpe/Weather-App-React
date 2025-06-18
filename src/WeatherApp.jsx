import Search from "./Search";
import InfoBox from "./InfoBox";
import {useState} from 'react';

export default function WeatherApp() {

    const [weatherInfo,setWeatherInfo] = useState({
        city:"Indore",
        feelsLike: 12.22,
        humidity:67,
        temp:13.1,
        tempMax:13.1,
        tempMin:13.1,
        weather:"haze"
    });

    let updateInfo = (newInfo) => {
        setWeatherInfo(newInfo);
    }

    return (
        <div style={{textAlign:'center'}}>
            <h1>Weather App by Kalpana</h1>
            <Search updateInfo={updateInfo}/>
            <InfoBox info={weatherInfo}/>
        </div>
    );
}