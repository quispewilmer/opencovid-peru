import React from 'react';
import Input from '../Atoms/Input';

const MembershipForm = ({theme}) => {
    return (
        <form action="" className={`membership-form ${theme}`}>
            <label htmlFor="membership-email" className="membership-form__label" style={{display: "block"}}>Mantente informado, deja tu email:</label>
            <Input typeOf="email" idCustomed="membership-email" theme="membership-form__input membership-form__input--left py-2 px-1" placeholderCustomed="Escribe tu email" />
            <Input typeOf="submit" theme="membership-form__submit membership-form__submit--right py-2 px-3" text="Enviar        " />
        </form>
    )
}

export default MembershipForm;
