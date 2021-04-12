import React from 'react';
import Input from '../Atoms/Input';

const SearchRegion = ({theme}) => {
    return (
        <form action="" className={`membership-form searchregion-form`}>
            <Input typeOf="submit" theme="membership-form__submit membership-form__submit--left searchregion-form__submit py-2 px-3" text="      " />
            <Input typeOf="email" idCustomed="searchregion-form__input" theme="searchregion-form__input py-2 px-1  membership-form__input--right" placeholderCustomed="Busca tu región" />
        </form>
    )
}

export default SearchRegion;
