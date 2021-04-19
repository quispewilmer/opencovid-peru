import React from 'react';
import Region from '../Organisms/Region';
import PuestoRegional from '../Molecules/PuestoRegion';
import RankingRegional from '../Molecules/RankingRegion';
import SearchRegion from '../Molecules/SearchRegion';
import TemplateDashboard from '../Templates/TemplateDashboard';

const InformYourself = () => {
    return (
        <TemplateDashboard type="for-graphics">
            <SearchRegion text="Busca tu región"/>
            <Region />
            <PuestoRegional />
            <RankingRegional type="vertical"/>
        </TemplateDashboard>
    )
}

export default InformYourself;