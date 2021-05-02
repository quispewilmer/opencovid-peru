import React from 'react';
import Region from '../Organisms/Region';
import RankingRegional from '../Molecules/RankingRegion';
import SearchRegion from '../Molecules/SearchRegion';
import Statistics from '../Organisms/Statistics';
import PuestoRegion from '../Molecules/PuestoRegion';
import TemplateDashboard from '../Templates/TemplateDashboard';

const PandemicStateFilter = () =>{
    return(
        <TemplateDashboard type="for-graphics">
            <SearchRegion text="Busca tu región"/>
            <Region />
            <Statistics title="Lima Región" />
            <PuestoRegion />
            <RankingRegional type="horizontal" />
        </TemplateDashboard>
    )
}
export default PandemicStateFilter;