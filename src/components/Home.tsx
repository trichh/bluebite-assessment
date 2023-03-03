import React from 'react';
import { Link } from "react-router-dom";
import styled from 'styled-components';

const Home = () => {
    return (
        <Header>
            <StyledLink to="/page-one">Page One</StyledLink>
            <StyledLink to="/page-two">Page Two</StyledLink>
            <StyledLink to="/page-three">Page Three</StyledLink>
        </Header>
    );
};

const Header = styled.div`
    background-color: #2e71f0;
    display: flex;
`;

const StyledLink = styled(Link)`
    color: #ffffff;
    display: block;
    padding: 20px 30px;
    text-decoration: none;

    &:hover {
        background-color: #5C99E7;
    }
`;

export default Home;
