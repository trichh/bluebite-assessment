import React from 'react';

import { IUpcomming } from '../../interfaces';
import {
    UpcomingWeather as Wrapper,
    UpcomingDay,
    WeatherText,
} from '../../styles/weather';
import WeatherIcon from './WeatherIcon';

interface IProps {
    days: Array<IUpcomming>;
}

const UpcomingWeather = ({ days }: IProps) => {
    return (
        <Wrapper>
            {days.map((day, i) => (
                <UpcomingDay key={i}>
                    <WeatherIcon
                        alt={`${day.conditionName} icon`}
                        condition={day.condition}
                        size={45}
                    />
                    <WeatherText>{day.day}</WeatherText>
                </UpcomingDay>
            ))}
        </Wrapper>
    );
};

export default UpcomingWeather;
