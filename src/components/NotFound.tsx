import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const NotFound = () => {
    return (
        <Wrapper>
            <Title>Page Not Found</Title>
            <Text>Uh oh, we can't seem to find the page you're looking for. Try
            going back to the previous page or visit our home page.</Text>
            <Link to="/"><Button>Visit Home Page</Button></Link>
        </Wrapper>
    );
};

const Wrapper = styled.div`
    align-items: center;
    display: flex;
    flex-direction: column;
    gap: 25px;
    justify-content: center;
    height: calc(100vh - 125px);
`;

const Title = styled.p`
    font-size: 40px;
    margin: 0;
`;

const Text = styled.p`
    font-size: 18px;
    margin: 0;
    max-width: 550px;
    text-align: center;
`;

const Button = styled.button`
    background-color: #eeeeee;
    border: 2px solid #5C99E7;
    color: #5C99E7;
    padding: 10px 14px;
    font-size: 16px;
    cursor: pointer;
`;

export default NotFound;
