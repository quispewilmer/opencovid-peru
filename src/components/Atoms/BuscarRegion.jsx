import React, { Fragment } from 'react'
import Glass from '../../img/pandemiaState/glass.svg'
const BuscarRegion = () =>{
    return(
        <div className="buscar">
            <img src={Glass} alt=""/>
            <input type="text" placeholder="Busca tu región"/>
        </div>
    )
}
export default BuscarRegion
