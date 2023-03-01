import React from 'react';

import {
    CurrentWeather as Wrapper,
    CurrentDay,
    WeatherTitle,
    WeatherText
} from '../../styles/weather';
import WeatherIcon from './WeatherIcon';

interface IProps {
    condition: string;
    conditionName: string;
    title: string;
}

const CurrentWeather = ({ condition, conditionName, title }: IProps) => {
    return (
        <Wrapper>
            <WeatherIcon
                alt={`${conditionName} icon`}
                condition={condition}
                size={90}
            />
            <CurrentDay>
                <WeatherTitle>{title}</WeatherTitle>
                <WeatherText>{conditionName}</WeatherText>
            </CurrentDay>
        </Wrapper>
    );
};

export default CurrentWeather;
