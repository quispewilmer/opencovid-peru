import React from 'react';
import Input from '../Atoms/MembershipFormInput';

const MembershipForm = () => {
    return (
        <form action="" className="membership-form">
            <label htmlFor="membership-email" className="membership-form__label">Mantente informado, deja tu email:</label>
            <Input typeOf="email" idCustomed="membership-email" classCustomed="membership-form__input" placeholderCustomed="Escribe tu email" />
            <Input typeOf="submit" classCustomed="membership-form__submit" text="Enviar" />
        </form>
    )
}

export default MembershipForm;