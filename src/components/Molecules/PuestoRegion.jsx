import React, { Fragment } from 'react';
import Lima from '../../img/pandemiaState/lima.svg';

const PuestoRegional = () =>{
    return(
          <>
              <div className="place-graphic graphic-container graphic">
                        <h1 className="graphic__title">Puesto de la región:</h1>
                        <div className="graphic__region-information region-information">
                            <h2 className="region-information__title text-center">Lima Metropolitana</h2>
                            <img src={Lima} alt="" className="region-information__image"/>
                            <p className="region-information__place text-center">puesto 1 de 21</p>
                        </div>
                </div>
          </>
    )
}
export default PuestoRegional