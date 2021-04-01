import React from 'react';

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
            type={props.typeOf} 
            id={props.idCustomed}
            name={props.idCustomed}
            value={props.text}
            className={`${props.classCustomed} input input--submit`}
        />
    );
}

export default Input;