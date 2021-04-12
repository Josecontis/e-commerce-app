import React from 'react';
import '../custom-button/custom-button.styles.scss';

//qui si controlla che tipo di bottone è per applicare lo sile css corrispondente, children è la label del bottone
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`} {...otherProps}>
        {children}
    </button>
);

export default CustomButton;