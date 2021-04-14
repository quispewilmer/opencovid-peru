import React from 'react';
import Dashboard from '../Templates/Dashboard';
import Region from '../Organisms/Region';
import PuestoRegional from '../Molecules/PuestoRegion';
import RankingRegional from '../Molecules/RankingRegion';
import SearchRegion from '../Molecules/SearchRegion';

const InformYourself = () => {
    return (
        <Dashboard type="for-graphics">
            <SearchRegion />
            <Region />
            <PuestoRegional />
            <RankingRegional type="vertical"/>
        </Dashboard>
    )
}

export default InformYourself;