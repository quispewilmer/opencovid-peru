import React from 'react';

const InformationPlaceContentItem = ({title, icon, quantity}) => {
    return (
        <li className="information-place-content__item">
            <span>{title}</span>
            <span><img src={icon} />{quantity}</span>
        </li>
    );
}

export default InformationPlaceContentItem;