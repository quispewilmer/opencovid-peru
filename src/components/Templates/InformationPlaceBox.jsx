import React, { useState } from 'react';
import InformationPlaceContent from '../Organisms/InformationPlaceContent';

const InformationPlaceBox = ({title, data}) => {
    const [minKm, setMinKm] = useState(1)
    const [maxKm, setMaxKm] = useState(9)

    return (
        <section className="information-place-box">
            <header className="information-place-box__section information-place-header">
                <span className="information-place-header__title">Kilómetros de distancia</span>
                <h6>Min: {minKm} km</h6>
                <h6>Max: {maxKm} km</h6>
                <input type="range" multiple value={minKm} min="0" onChange={e => setMinKm(e.target.value) } step={1} max={10} data-values="1 9" defaultValue={1} className="information-place-header__range information-place-header__range--1" />
                <input type="range" multiple value={maxKm} min="0" onChange={e => setMaxKm(e.target.value) } step={1} max={10} data-values="1 9" defaultValue={9} className="information-place-header__range information-place-header__range--2" />
            </header>
            <InformationPlaceContent title={title} data={data}/>
        </section>
    );
}

export default InformationPlaceBox;