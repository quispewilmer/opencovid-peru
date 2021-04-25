import React, { useState } from 'react';
import Mapa from '../../img/pandemiaState/mapa.svg';
import Calendar from '../../img/pandemiaState/calender.svg';
import LegendGraphic from '../Molecules/LegendGraphic';
import Map from '../Pages/PandemicState/Map'

const Region = ({ onSwitchClick, onStateClick }) => {
    const [checked, setChecked] = useState(false)
    return (
        <>
            <div className="map-graphic graphic-container graphic">
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
                    <label className="region-selection__switch" >
                        <input type="checkbox" className="region-selection__checkbox" checked={checked} onChange={() => {
                            setChecked(!checked)
                            onSwitchClick(!checked)
                        }} />
                        <div className="region-selection__switch-c round">
                        </div>
                    </label>
                    <p className="region-selection__all-regions">Todas las regiones</p>
                </section>
                <section className="graphic__map map">
                    <Map onStateClick={onStateClick} />
                    {/* <img src={Mapa} alt="Mapa del Perú" className="map__image" /> */}
                </section>
                <LegendGraphic />
            </div>
        </>
    )
}
export default Region