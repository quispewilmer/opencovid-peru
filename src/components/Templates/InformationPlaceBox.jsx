import React from 'react';
import InformationPlaceContent from '../Organisms/InformationPlaceContent';

const InformationPlaceBox = ({title, data}) => {
    return (
        <section className="information-place-box">
            <header className="information-place-box__section information-place-header">
                <span className="information-place-header__title">Kilómetros de distancia</span>
                <input type="range" multiple min="0" step="1" max="10" data-values="1 9" defaultValue="1" className="information-place-header__range information-place-header__range--1" />
                <input type="range" multiple min="0" step="1" max="10" data-values="1 9" defaultValue="9" className="information-place-header__range information-place-header__range--2" />
            </header>
            <InformationPlaceContent title={title} data={data}/>
        </section>
    );
}

export default InformationPlaceBox;