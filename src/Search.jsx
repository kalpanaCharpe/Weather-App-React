import "./Search.css";
import {useState} from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

export default function Search({updateInfo}) {

    let [city,setCity] = useState("");
    let [error,setError] = useState(false);
    const API_URL = "https://api.openweathermap.org/data/2.5/weather";
    const API_KEY = "f30de34f0535b31cadd18cfe3444f9e1";

    let getWeatherInfo = async () => {
        try {
        let response = await fetch(`${API_URL}?q=${city}&appid=${API_KEY}&units=metric`);
        let jsonResponse = await response.json();
        // console.log(jsonResponse);

        let result = {
            city:city,
            temp : jsonResponse.main.temp,
            tempMin : jsonResponse.main.temp_min,
            tempMax : jsonResponse.main.temp_max,
            humidity : jsonResponse.main.humidity,
            feelsLike : jsonResponse.main.feels_like,
            weather : jsonResponse.weather[0].description,
        }

        console.log(result);
        return result;
        } catch (error) {
            throw error;
        }
    }

    let handleChange = (event) => {
        setCity(event.target.value);
    }

    let handleSubmit = async(event) => {
        try {
            event.preventDefault();
            console.log(city);
            setCity("");
           let newInfo = await getWeatherInfo();
           updateInfo(newInfo);
        } catch(error) {
            setError(true)
        }
    }
    return (
        <div className='Search'>
           <form onSubmit={handleSubmit}>
           <TextField id="city" label="City Name" variant="outlined" required value={city} onChange={handleChange}/>
           <br /> <br />
           <Button variant="contained" type="submit">SEARCH</Button>
           {error && <p style={{color:"red"}}>No such place found!</p>}
           </form>
        </div>
    );
}