import React from 'react';

const QuantityCard = ({title, image, number, type,cardMedidPerson}) => {
    return (
        <article className={`${cardMedidPerson} p-2`}>
            <div className="quantity-card card-body ">
                <div className="row">
                    <div className="quantity-card__image col-md-3 text-center">
                        <img src={image} alt={title}/>
                    </div>
                    <div className="quantity-card__content col-md-9 text-center">
                        <p className={`quantity-card__title quantity-${type} mb-0`}>{title}</p>
                        <p className="quantity-card__number text-danger mt-0 font-weight-bold">{number}</p>
                    </div>
                </div>
            </div>
        </article>
    )
}

export default QuantityCard;