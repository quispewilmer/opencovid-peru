import React from 'react';
import RegionStatistic from '../Molecules/RegionStatistic';
import Vector from '../../img/estadoPandemia_Filtro/vector.svg'

const Statistics = ({title}) => {
    return (
        <>
            <div className="region-statistics">
                <h1 className="region-statistics__title graphic__title"><img src={Vector} alt="" className="region-statistics__place-icon"/>{title}</h1>
                <RegionStatistic title="Casos positivos" />
                <RegionStatistic title="Casos negativos" />
            </div>
        </>
    );
}

export default Statistics