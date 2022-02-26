//Making a functiing button that can be referenced throughout the whole code

import React from "react";
import'./Button.css';
import { Link } from 'react-router-dom';

const STYLES = ['btn--primary', 'btn--outline']; //Style types

const SIZES = ['btn--medium', 'btn--large']; //Button sizes

export const Button = ({children, type, onClick, buttonStyle,
buttonSize}) => {
    const checkButtonStyle = STYLES.includes(buttonStyle)
     ? buttonStyle 
     : STYLES[0]; //if true = buttonstyle if faulse = first style is array (defult)

     const checkButtonSize = SIZES.includes(buttonSize) ? buttonSize : SIZES[0] //Same for sizes
     return (
         <Link to='/aboutMe' className='btn-mobile'>
            <button
            className={'btn ${checkButtonStyle} ${checkButtonStyle}'}
            onClick={onClick}
            type={type}
            >
                {children}
            </button>
         </Link>
     )

};