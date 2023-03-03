import React from 'react';
import styled from 'styled-components';

import { IPageSettings, IVariables } from '../interfaces';
import hide from '../icons/hide.svg';
import show from '../icons/show.svg';
import location from '../icons/location.svg';

interface IProps {
    options: {
        text: string;
        variable: string;
        value: string;
    };
    pageSettings: IPageSettings;
    variables: { [key: string]: any };
    updatePageSettings: any;
}

const Button = ({ options, pageSettings, variables, updatePageSettings }: IProps) => {
    const { text, value, variable } = options;
    const icons: { [key: string]: string } = { hide, show, location };

    // Updates variable state
    const updateVariable = () => {
        const newSettings = structuredClone(pageSettings);
        const newVariable = newSettings.variables.find((v: IVariables) => v.name === variable);

        newVariable.initialValue = value;
        updatePageSettings(newSettings);
    };

    return (
        <>
            {variables[variable] !== value && (
                <Wrapper className="ComponentWrapper" onClick={updateVariable}>
                    <Text>{text}</Text>
                    <Icon
                        src={icons[value] || icons['location']}
                        alt={`${text} icon`}
                        width={45}
                        height={45}
                    />
                </Wrapper>
            )}
        </>
    );
};

const Wrapper = styled.div`
    background-color: #2e71f0;
    cursor: pointer;
    display: flex;
    flex-direction: column;
    height: calc(200px - 30px);
    justify-content: space-evenly;
    max-width: calc(700px - 60px);
    padding: 15px 30px;
    width: calc(90% - 60px);
`;

const Text = styled.p`
    color: #ffffff;
    font-size: 25px;
    margin-top: 0;
`;

const Icon = styled.img`
    align-self: flex-end;
`;

export default Button;
