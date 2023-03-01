import React from 'react';

import clearDay from '../../icons/clear-day.svg';
import cloudy from '../../icons/cloudy.svg';
import rain from '../../icons/rain.svg';

interface IProps {
    alt: string;
    condition: string;
    size: number;
}

const WeatherIcon = ({ alt, condition, size }: IProps) => {
    const icons: { [key: string]: string } = {
        'clear-day': clearDay,
        cloudy,
        rain ,
    };

    return (
        <img
            src={icons[condition]}
            alt={alt}
            width={size}
            height={size}
        />
    );
};

export default WeatherIcon;
