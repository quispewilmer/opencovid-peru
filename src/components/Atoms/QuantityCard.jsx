import React from 'react';

const QuantityCard = ({title, image, number, type, cardMedidPerson}) => {
    return (
        <article className={`quantity-card ${cardMedidPerson} d-flex align-items-center`}>
                <div className="d-flex align-items-center px-0 w-100">
                    <div className="quantity-card__image px-0 col-3">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="quantity-card__content px-1 text-center col-9">
                        <p className={`quantity-card__title quantity-${type} mb-0`}>{title}</p>
                        <p className="quantity-card__number text-danger mt-0 font-weight-bold">{number}</p>
                    </div>
                </div>
        </article>
    )
}

export default QuantityCard;