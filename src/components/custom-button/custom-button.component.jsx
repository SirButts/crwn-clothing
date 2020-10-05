import React from 'react';

import './custom-button.styles.scss';
//noes about inverting custom button styling
//we add inverted as a prop
const CustomButton = ({ children, isGoogleSignIn, inverted, ...otherProps }) => (
    <button
        //add conditional similar to our if inverted is true add the inverted class 
        className={`${inverted ? 'inverted' : ''} ${isGoogleSignIn ? 'google-sign-in' : ''} custom-button`}
        {...otherProps}
    >
        {children}
    </button>
);

export default CustomButton;







