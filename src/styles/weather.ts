import styled from 'styled-components';

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    height: calc(200px - 60px);
    max-width: calc(700px - 40px);
    padding: 30px 30px 30px 10px;
    width: calc(90% - 40px);
`;

export const CurrentWeather = styled.div`
    align-self: flex-start;
    display: flex;
    height: 65px;
`;

export const UpcomingWeather = styled.div`
    align-self: flex-end;
    display: flex;
`;

export const CurrentDay = styled.div``;

export const UpcomingDay = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const WeatherText = styled.p`
    margin: 0;
`;

export const Location = styled(WeatherText)`
    align-self: flex-end;
`;

export const WeatherTitle = styled.p`
    font-size: 40px;
    margin: 0;
`;
