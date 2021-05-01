import React, { useState } from 'react';
import LegendGraphic from '../Molecules/LegendGraphic';
import Map from '../Pages/PandemicState/Map'

const gridProps = {
    true: {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 5,
    },
    false: {
        gridColumnStart: 1,
        gridColumnEnd: 3,
        gridRowStart: 2,
        gridRowEnd: 4,
    }
}

const Region = ({ onSwitchClick, onStateClick, countryWide }) => {
    return (
        <>
            <div className="map-graphic graphic-container graphic" style={gridProps[countryWide]}>
                <section className="graphic__region-selection region-selection">
                    <p className="region-selection__one-region">Una región</p>
                    <label className="region-selection__switch" >
                        <input type="checkbox" className="region-selection__checkbox" checked={countryWide} onChange={() => {
                            onSwitchClick(!countryWide)
                        }} />
                        <div className="region-selection__switch-c round">
                        </div>
                    </label>
                    <p className="region-selection__all-regions">Todas las regiones</p>
                </section>
                <section className="graphic__map map">
                    <Map onStateClick={onStateClick} />
                </section>
                <LegendGraphic />
            </div>
        </>
    )
}
export default Region