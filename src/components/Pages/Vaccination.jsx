import React, {useEffect, useState} from 'react';
import axios from 'axios';
import VaccinesGraphic from "../Molecules/VaccinesGraphic";
import SyringeGraphic from "../Molecules/SyringeGraphic";
import mapaPeru from '../../img/vaccination/mapa-peru.svg';
import primeraLinea from '../../img/vaccination/primera-linea.svg';
import CardBodyVaccination from '../Atoms/CardBodyVaccination';
import CardTop from '../Atoms/CardTopVaccination';

var moment = require('moment/min/moment-with-locales');
moment.locale('es');

const Vaccination=()=>{

    const [loaded, setLoaded] = useState(false);
    const [graphData, setGraphData] = useState([]);
    const [vaccineData, setVaccineData] = useState(null);

    const graphUrl = 'https://open-covid-2-api-6b3whmne6q-uk.a.run.app/api/vaccine/histogram?fechaGt=01-01-2021&fechaLt=' + moment().format('DD-MM-YYYY');
    const vaccinationEndUrl = 'https://open-covid-2-api-6b3whmne6q-uk.a.run.app/api/vaccine/resume';

    useEffect(async () => {
        if (!loaded) {
            setLoaded(true);
            setGraphData(await axios.get(graphUrl));
            setVaccineData(await axios.get(vaccinationEndUrl));
        }
        /*
        setState({
            information: await axios.get(url),
            date: state.information.data.fechaCreacion.split(" ")[0],
        })

         */
    });

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
}

export default Vaccination;
