import React, { Fragment } from 'react';
import BuscarRegion from '../Atoms/BuscarRegion';
import Region from '../Organisms/Region';
import PuestoRegional from '../Molecules/PuestoRegion';
import RankingRegional from '../Molecules/RankingRegion';
import SearchRegion from '../Molecules/SearchRegion';
import Dashboard from '../Templates/Dashboard';


const PandemicState = () => {
    return (
        <Dashboard 
            type="for-graphics"
        />
    )
}
/*
            <div className="contenedor">
                <div className="resumen">
                    <h1>Resumen</h1>
                </div>
                <SearchRegion />                
                <BuscarRegion />
                <Region/>
                <PuestoRegional/>
                <RankingRegional/>
            </div>

*/
export default PandemicState;