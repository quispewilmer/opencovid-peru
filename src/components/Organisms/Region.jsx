import React, { Fragment } from 'react'
import Mapa from '../../img/pandemiaState/mapa.svg'
import Calendar from '../../img/pandemiaState/calender.svg'
const Region = () =>{
    return(
          <Fragment>
              <div className="region">
                    <div className="titulo">
                        <h2>Situación regional</h2>
                    </div>
                    <div className="fecha">
                        <div className="calendar">
                            <img src={Calendar} alt=""/>
                        </div>
                        <div className="fecha-c">
                            <p>Fecha de actualización:</p>
                            <p>24/03/21 - 31/03/21</p>
                        </div>
                        
                    </div>
                    <div className="selecion">
                        <p>Una región</p>
                        <label className="switch">
                            <input type="checkbox"/>
                            <div className="switch-c round">
                            </div>
                        </label>
                        <p>Todas las regiones</p> 
                    </div>
                    <div className="mapa">
                        <img src={Mapa} alt=""/>
                    </div>
                    <div className="leyenda">
                            <h2>Leyenda</h2>
                            <ul>
                                <li><span className="extremo"></span>Riesgo Extremo</li>
                                <li><span className="alto"></span>Riesgo Alto</li>
                                <li><span className="moderado"></span>Riesgo Moderado</li>
                                <li><span className="bajo"></span>Riesgo Bajo</li>
                            </ul>
                        </div> 
                </div>
          </Fragment>
    )
}
export default Region