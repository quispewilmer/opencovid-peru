import React from 'react';
import Mapa from '../../img/pandemiaState/mapa.svg';
import Calendar from '../../img/pandemiaState/calender.svg';
const Region = () => {
    return (
        <>
            <div className="map-graphic graphic-container graphic">
                <h1 className="graphic__title">Situación regional</h1>
                <section className="graphic__date date-for-graphic">
                    <div className="date-for-graphic__calendar calendar">
                        <img src={Calendar} alt="Calendario" className="calendar__image" />
                    </div>
                    <div className="date-for-graphic__update date-update">
                        <span className="date-update__description">Fecha de actualización:</span>
                        <span className="date-update__date-format">24/03/21 - 31/03/21</span>
                    </div>
                </section>
                <section className="graphic__region-selection region-selection">
                    <p className="region-selection__one-region">Una región</p>
                    <label className="region-selection__switch">
                        <input type="checkbox" className="region-selection__checkbox" />
                        <div className="region-selection__switch-c round">
                        </div>
                    </label>
                    <p className="region-selection__all-regions">Todas las regiones</p>
                </section>
                <section className="graphic__map map">
                    <img src={Mapa} alt="Mapa del Perú" className="map__image" />
                </section>
                <section className="graphic__legend legend">
                    <h2 className="legend__title">Leyenda</h2>
                    <ul className="legend__list">
                        <li className="legend__item"><span className="extreme legend__level"></span>Riesgo Extremo</li>
                        <li className="legend__item"><span className="high legend__level"></span>Riesgo Alto</li>
                        <li className="legend__item"><span className="moderated legend__level"></span>Riesgo Moderado</li>
                        <li className="legend__item"><span className="low legend__level"></span>Riesgo Bajo</li>
                    </ul>
                </section>
            </div>
        </>
    )
}
export default Region