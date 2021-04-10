import React, { Fragment } from 'react';
import BuscarRegion from '../Atoms/BuscarRegion'
import Region from '../Organisms/Region'
import PuestoRegional from '../Molecules/PuestoRegion'
import RankingRegional from '../Molecules/RankingRegion'
const PandemicState = () => {
    return (
        <Fragment>
            <div className="contenedor">
                <div className="resumen">
                    <h1>Resumen</h1>
                </div>
               <BuscarRegion />
               <Region/>
               <PuestoRegional/>
               <RankingRegional/>
                
                
            </div>
        </Fragment>
    )
}

export default PandemicState;