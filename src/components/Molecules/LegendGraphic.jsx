import React from 'react';
import LegendItem from '../Atoms/LegendItem';

const LegendGraphic = () => {
    return (
        <section className="graphic__legend legend">
            <h2 className="legend__title">Leyenda</h2>
            <ul className="legend__list">
                <LegendItem legendClass="extreme" legendDescription="Riesgo Extremo"/>
                <LegendItem legendClass="high" legendDescription="Riesgo Alto"/>
                <LegendItem legendClass="moderated" legendDescription="Riesgo Moderado"/>
                <LegendItem legendClass="low" legendDescription="Riesgo Bajo"/>
            </ul>
        </section>
    );
}

export default LegendGraphic;