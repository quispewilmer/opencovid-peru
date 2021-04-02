import React from 'react';
import {NavLink} from 'react-router-dom';

/**
 * Creating buttons, each button has a {theme} prop.
 * Themes will come from css styles and redirect to a link.
 * These will be: 
 *      button--red
 *      button--white-red
 *      button--green
 *      button--white-green
 * Consider them as css classes.
*/

const Button = ({text, theme, link}) => {
    return (
        <NavLink
            to={link}
            className={`${theme} button mr-3`}>
            {text}
        </NavLink>
    );
}

export default Button;