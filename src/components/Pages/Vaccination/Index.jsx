import React,{ useState, useEffect } from 'react';
import mapaPeru from '../../../img/vaccination/mapa-peru.svg';
import primeraLinea from '../../../img/vaccination/primera-linea.svg';
import CardTop from '../../Atoms/CardTopVaccination';
import CardBodyVaccination from '../../Atoms/CardBodyVaccination';
import SyringeGraphic from "../../Molecules/SyringeGraphic";
import VaccinesGraphic from "../../Molecules/VaccinesGraphic";

import axios from 'axios';

var moment = require('moment/min/moment-with-locales');
moment.locale('es');

const Vaccination=()=>{

    const [loaded, setLoaded] = useState(false);
    const[isResumevaccinate,setResumeVaccinate]=useState(null);
    const [vaccineData, setVaccineData] = useState(null);
    const [graphData, setGraphData] = useState([]);
    const api = axios.create({
        baseURL: 'https://open-covid-2-api-6b3whmne6q-uk.a.run.app/api',
    });
    const graphUrl = 'https://open-covid-2-api-6b3whmne6q-uk.a.run.app/api/vaccine/histogram?fechaGt=01-01-2021&fechaLt=' + moment().format('DD-MM-YYYY');
    const vaccinationEndUrl = 'https://open-covid-2-api-6b3whmne6q-uk.a.run.app/api/vaccine/resume';
    useEffect(async()=>{
        if(isResumevaccinate==null){
            api.get('/vaccine/resume').then(response=>{ 
                setResumeVaccinate(response.data); 
                
            }).catch(e=>{
                console.log("error"+e);
            });
        }
        if (!loaded) {
            setLoaded(true);
            setGraphData(await axios.get(graphUrl));
            setVaccineData(await axios.get(vaccinationEndUrl));
        }
    });

    if(isResumevaccinate!=null){
        const poblationMil=Intl.NumberFormat().format(isResumevaccinate.poblacion).split('.')[0];
        const poblation=Intl.NumberFormat().format(isResumevaccinate.poblacion).replace('.',' ');
        
        return(
        
            <div className="container-vaccination">
                <h2>¿En cuanto tiempo estaremos vacunados?</h2>
                <div className="mx-auto row">
                    <CardTop 
                        theme="col-lg-4" 
                        isTopTextHighlights={true}                    
                        sText="En el Perú, somos " 
                        highlight={`${poblation.replace('.',' ')} Millones`}
                        eText=" de personas elegibles para recibir la vacuna. "
                        textLeft="Peruanos y extranjeros residentes mayores de 18 años" 
                        src_image={primeraLinea} 
                        image_style="img-society" 
                        text_footer="Fuente: INEI 2020. Estimaciones población 2050"/>
                    <CardTop 
                        theme="col-lg-8" 
                        isTopLeftTextHighlights={true}
                        sText="Actualmente tenemos "
                        highlight={`${poblationMil} Millones`} 
                        eText=" de dosis de vacunas compradas"
                        textLeft="A la fecha,  han llegado a Perú:" 
                        src_image={mapaPeru} 
                        image_style="img-map" 
                        text_footer="Fuente: Gobierno del Perú 2021. Coronavirus: vacunas contra la COVID-19 en el Perú"
                        dataTypeDoses={isResumevaccinate}
                    />
                </div>
                <CardBodyVaccination data={isResumevaccinate}/>
                <div className="p-3">
                {vaccineData !== null && (
                    <SyringeGraphic data={vaccineData} />
                    )}
                </div>
                <div className="p-3">
                    {graphData !== [] && (
                        <VaccinesGraphic data={graphData} />
                    )}
                </div>
            </div>
        )
    }else{
        return (
            <div>
                Cargando...
            </div>
        )
    }
    
}

export default Vaccination;