import styled, { css } from 'styled-components';
import { Link } from 'react-router-dom';

const OptionContainerStyles = css`
    padding: 10px 15px;
    cursor: pointer;
`;

export const HeaderContainer = styled.div`
    height: 70px;
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 25px;
    @media screen and (max-width: 800px) {
        height: 60px;
        padding: 10px;
        margin-bottom: 20px;
    }
`;

export const LogoContainer = styled(Link)`
    width: 570px;
    height: 70px;
    padding: px;
    display: flex;
    align-items: center;
    justify-content: flex-start;

    @media screen and (max-width: 800px) {
       display: absolute;
       margin-top: -2.2vh;
    }
`;

export const LogoImg = styled.img`
width: 100px;
height: 100px;

@media screen and (max-width: 800px) {
    align-items: top;
}
`;

export const TextLogo = styled.img`
    height: 75px;
    width: 200vh;
    

@media screen and (max-width: 800px) {
    display: none;
}
`;

export const NameContainer = styled.h1`\
    color: darkgreen;
    display: flex;
    align-items: left;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;

export const OptionsContainer = styled.div`
    width: 50%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    cursor: pointer;

    @media screen and (max-width: 800px) {
        width: 80%;
    }
`;

export const OptionLink = styled(Link)`
    ${OptionContainerStyles}
`;

export const OptionDiv = styled.div`
    ${OptionContainerStyles}
`;

export const LetterLogoSvg = styled.path`
    stroke-dasharray: 30;
    stroke-dashoffset: 50;
    fill-opacity: 0;

    @media screen and (max-width: 800px) {
        display: none;
    }
`;
