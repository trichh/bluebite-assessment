import React, { useEffect, useState } from 'react';
import axios from 'axios';

import { IUpcomming } from '../../interfaces';
import { Wrapper, Location } from '../../styles/weather';
import CurrentWeather from './CurrentWeather';
import UpcomingWeather from './UpcomingWeather';

interface IProps {
    options: {
        lon: string;
        lat: string;
    };
}

interface IWeatherData {
    condition: string;
    conditionName: string;
    location: string;
    temperature: number;
    unit: string;
    upcomming: Array<IUpcomming>;
}

const Weather = ({ options }: IProps) => {
    const { lat, lon } = options;
    const [weatherData, setWeatherData] = useState<IWeatherData>({
        condition: '',
        conditionName: '',
        location: '',
        temperature: 0,
        unit: '',
        upcomming: [],
    });

    useEffect(() => {
        // Set `Weather` component data
        const fetchWeatherData = async () => {
            const res = await axios(`${process.env.REACT_APP_API_URL}/integration/weather?lat=${lat}&lon=${lon}`);
            const data = res.data.data;
            setWeatherData(data);
        };

        fetchWeatherData()
            .catch(console.error);

        // Unmount `Weather` component logic
        return () => {
            setWeatherData({
                condition: '',
                conditionName: '',
                location: '',
                temperature: 0,
                unit: '',
                upcomming: [],
            });
        };
    }, [lat, lon]);

    return (
        <Wrapper className="ComponentWrapper">
            <Location>{weatherData.location}</Location>
            <CurrentWeather
                condition={weatherData.condition}
                conditionName={weatherData.conditionName}
                title={`${weatherData.temperature} ${'\u00b0'} ${weatherData.unit.toUpperCase()}`}
            />
            <UpcomingWeather days={weatherData.upcomming} />
        </Wrapper>
    );
};

export default Weather;
