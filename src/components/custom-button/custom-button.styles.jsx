import styled, { css } from 'styled-components';

//css rende portabile queste proprietà (serve a condividere un determinato stile)
const isGoogleSignInStyles = css`
    background-color: #4285f4;
    color: white;

    &:hover {
    background-color: #357ae8;
    border: none;
    }
`;

const invertedButtonStyles = css`
    background-color: white;
    color: black;
    border: 1px solid black;

    &:hover{
    background-color: black;
    color: white;
    border: none;
    }
`;

//controllo sulla proprietà del pulsante per gestire 3 casi separatamente
const getButtonStyles = (props) => {
    if (props.isGoogleSignIn) {
        return isGoogleSignInStyles;
    }
    return props.inverted ? invertedButtonStyles : CustomButtonContainer;
};

export const CustomButtonContainer = styled.button`
    min-width: 165px;
    width: auto;
    height: 50px;
    letter-spacing: 0.5px;
    line-height: 50px;
    padding: 0 35px 0 35px;
    font-size: 15px;
    background-color: black;
    color: white;
    text-transform: uppercase;
    font-family: 'Open Sans Condensed';
    font-weight: bolder;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;

    &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
    }
    ${getButtonStyles}
`;

