import React from 'react';
import mapaPeru from '../../img/vaccination/mapa-peru.svg';
import primeraLinea from '../../img/vaccination/primera-linea.svg';
import CardBodyVaccination from '../Atoms/CardBodyVaccination';
import CardTop from '../Atoms/CardTopVaccination';

const Vaccination=()=>{
    return(
        <div className="container-vaccination">
            <h2>¿En cuanto tiempo estaremos vacunados?</h2>
            <div className="mx-auto row">
                <CardTop 
                    theme="col-lg-4" 
                    isTopTextHighlights={true}                    
                    sText="En el Perú, somos " 
                    highlight="XX millones"
                    eText=" de personas elegibles para recibir la vacuna. "
                    textLeft="Peruanos y extranjeros residentes mayores de 18 años" 
                    src_image={primeraLinea} 
                    image_style="img-society" 
                    text_footer="Fuente: INEI 2020. Estimaciones población 2050"/>
                <CardTop 
                    theme="col-lg-8" 
                    isTopLeftTextHighlights={true}
                    sText="Actualmente tenemos " 
                    highlight="48 millones"
                    eText=" de dosis de vacunas compradas"
                    textLeft="A la fecha,  han llegado a Perú:" 
                    src_image={mapaPeru} 
                    image_style="img-map" 
                    text_footer="Fuente: Gobierno del Perú 2021. Coronavirus: vacunas contra la COVID-19 en el Perú"/>
            </div>
            <CardBodyVaccination/>
        </div>
    )
}

export default Vaccination;