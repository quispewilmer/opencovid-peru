import React, {useEffect, useRef} from 'react';

const QuantityCard = ({ title, image, number, type, cardMedidPerson, update }) => {

    const numberRef = useRef(null);

    useEffect(() => {
        let quantity = numberRef.current;
        let quantityArr = Array.from(quantity.textContent);
        let quantitySpaces = Math.floor(quantityArr.length / 3);
        let quantityLength = quantityArr.length;
        for(let i = 0; i <= quantitySpaces - 1; i++) {
            quantityLength -= 3;
            quantityArr.splice(quantityLength, 0, " ");
        }
        quantity.textContent = quantityArr.join("");
    })

    return (
        <article className={`quantity-card ${cardMedidPerson} d-flex align-items-center`}>
            <div className="d-flex align-items-center px-0 w-100">
                <div className="quantity-card__image px-0 col-3">
                    <img src={image} alt={title} />
                </div>
                <div className="quantity-card__content px-1 text-center col-9">
                    <p className={`quantity-card__title mb-0 d-flex justify-content-center`}>{title}</p>
                    <p className={`quantity-card__number quantity-${type} mt-0 font-weight-bold`} ref={numberRef}>{number}</p>
                    <p className="quantity-card__update">{`Actualizado: ${update}`}</p>
                </div>
            </div>
        </article>
    )
}

export default QuantityCard;
