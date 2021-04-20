import React, { Fragment } from 'react';
import Region from '../Organisms/Region';
import Dashboard from '../Templates/Dashboard';
import RankingRegional from '../Molecules/RankingRegion';
import SearchRegion from '../Molecules/SearchRegion';
import Statistics from '../Organisms/Statistics';
import PuestoRegion from '../Molecules/PuestoRegion';

const PandemicStateFilter = () =>{
    return(
        <Dashboard type="for-graphics">
            <SearchRegion />
            <Region />
            <Statistics title="Lima Región" />
            <PuestoRegion />
            <RankingRegional type="horizontal" />
        </Dashboard>
    )
}
export default PandemicStateFilter;