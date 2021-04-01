import React from 'react';

/**
 * Inputs are simply html inputs and are associated
 * to submits, passwords, text, etc.
 * This component evaluates which type of input you want
 * to put because there is a difference with the "value"
 * property.
 */

const Input = (props) => {
    return (
        props.typeOf != "submit" ? 
        <input
            type={props.typeOf}
            id={props.idCustomed}
            name={props.idCustomed}
            placeholder={props.placeholderCustomed}
            className={`${props.classCustomed} input input--${props.typeOf}`}
        />
        :
        <input
            type="submit" 
            id={props.idCustomed}
            name={props.idCustomed}
            value={props.text}
            className={`${props.classCustomed} input input--submit`}
        />
    );
}

export default Input;