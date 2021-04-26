import React, { useState, useEffect } from 'react';
import axios from "axios";

const API = "http://api.weatherstack.com/current";

const params = {
    access_key: process.env.REACT_APP_WEATHER_API_KEY,
    query: "Helsinki",
};

const Weather = () => {
    const [weather, setWeather] = useState({
        request: {},

    });
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        setIsLoading(true);
        axios.get(API, { params })
            .then(res => setWeather(res.data));

    }, []);

    return (
        <div>
            <p>
                {/* {weather.current.temperature} */}
            </p>
        </div>
    );
};

export default Weather;