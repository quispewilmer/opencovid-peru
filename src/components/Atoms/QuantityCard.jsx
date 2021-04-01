import React from 'react';

const QuantityCard = ({title, image, number, type}) => {
    return (
        <article className="quantity-card">
            <div className="quantity-card__image">
                <img src={image} alt={title}/>
            </div>
            <div className="quantity-card__content">
                <span className={`quantity-card__title quantity-${type}`}>{title}</span>
                <span className="quantity-card__number">{number}</span>
            </div>
        </article>
    )
}

export default QuantityCard;