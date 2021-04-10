import React, { Fragment } from 'react'
import Lupa from '../../img/pandemiaState/lupa.svg'
const BuscarRegion = () =>{
    return(
          <Fragment>
               <div className="buscar">
                   <img src={Lupa} alt=""/>
                    <input type="text" placeholder="Busca tu región"/>
                </div>
          </Fragment>
    )
}
export default BuscarRegion
