import React from 'react';
import styled from 'styled-components';

interface IProps {
    options: IImage;
}

interface IImage {
    src: string;
    alt: string;
}

const Image = ({ options }: IProps) => {
    const { alt, src } = options;

    return (
        <Wrapper className="ComponentWrapper" src={src} alt={alt} />
    );
};

const Wrapper = styled.div<IImage>`
    background: url(${({src}) => src}) center/100% 100% no-repeat #2e71f0;
`;

export default Image;
