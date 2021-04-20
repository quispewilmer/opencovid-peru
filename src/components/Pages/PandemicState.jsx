import React, { Fragment } from 'react';
import Region from '../Organisms/Region';
import PuestoRegional from '../Molecules/PuestoRegion';
import RankingRegional from '../Molecules/RankingRegion';
import SearchRegion from '../Molecules/SearchRegion';
import Dashboard from '../Templates/Dashboard';


const PandemicState = () => {
    return (
        <Dashboard type="for-graphics">
            <SearchRegion />
            <Region />
            <PuestoRegional />
            <RankingRegional type="vertical"/>
        </Dashboard>
    )
}

export default PandemicState;