import React, { useState, useEffect } from 'react';
import InformationPlaceContent from '../Organisms/InformationPlaceContent';

const InformationPlaceBox = ({title, data, initialDistance, onDistanceChange, distanceLimit, distance}) => {
    const [maxKm, setMaxKm] = useState(initialDistance)

    useEffect(() => {
        setMaxKm(distance)
    }, [distance])

    return (
        <section className="information-place-box">
            <header className="information-place-box__section information-place-header">
                <span className="information-place-header__title">Kilómetros de distancia</span>
                <h6>Radio de búsqueda: {maxKm} km</h6>
                {/* <h6>Radio del Mapa: {distanceLimit} km</h6> */}
                <input
                    type="range"
                    multiple
                    value={maxKm}
                    min={0}
                    onChange={e => {
                        setMaxKm(Number(e.target.value))
                    }}
                    onMouseUp={e => {
                        onDistanceChange(Number(e.target.value))
                    }}
                    step={1}
                    max={distanceLimit}
                    data-values="1 9"
                    className="information-place-header__range information-place-header__range--2"
                />
            </header>
           
        </section>
    );
}

export default InformationPlaceBox;