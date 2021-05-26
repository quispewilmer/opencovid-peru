import React, { useState, useEffect } from 'react';
import mapaPeru from '../../../img/vaccination/mapa-peru.svg';
import primeraLinea from '../../../img/vaccination/primera-linea.svg';
import CardTop from '../../Atoms/CardTopVaccination';
import CardBodyVaccination from '../../Atoms/CardBodyVaccination';
import SyringeGraphic from "../../Molecules/SyringeGraphic";
import VaccinesGraphic from "../../Molecules/VaccinesGraphic";
import metaimage from '../../../img/metaimages/vacination.png';
import axios from 'axios';
import Helmet from 'react-helmet';

const title = "OpenCovid-Perú - Datos Históricos";
const image = { metaimage };
const description = "Progreso de vacunación nacional, Fallecidos reportados por el SINADEF, Movilidad de la población, Fallecidos reportados por el MINSA.";
const locale = "es_PE";

var moment = require('moment/min/moment-with-locales');
moment.locale('es');

const Vaccination = () => {
    document.title = "OpenCovid-Perú - Vacunación"
    const [loaded, setLoaded] = useState(false);
    const [isResumevaccinate, setResumeVaccinate] = useState(null);
    const [vaccineData, setVaccineData] = useState(null);
    const [graphData, setGraphData] = useState([]);
    const api = axios.create({
        baseURL: 'https://open-covid-api-vwgk4ckqbq-uk.a.run.app/api',
    });
    const graphUrl = 'https://open-covid-api-vwgk4ckqbq-uk.a.run.app/api/vaccine/histogram?fechaGt=01-01-2021&fechaLt=' + moment().format('DD-MM-YYYY');
    const vaccinationEndUrl = 'https://open-covid-api-vwgk4ckqbq-uk.a.run.app/api/vaccine/resume';
    useEffect(async () => {
        if (isResumevaccinate == null) {

            api.get('/vaccine/resume').then(response => {
                setResumeVaccinate(response.data);

            }).catch(e => {
                console.log("error" + e);
            });
        }
        if (!loaded) {
            setLoaded(true);
            setGraphData(await axios.get(graphUrl));
            setVaccineData(await axios.get(vaccinationEndUrl));
        }
    });

    if (isResumevaccinate != null) {
        const poblationMil = Intl.NumberFormat().format(isResumevaccinate.poblacion).split('.')[0];
        const poblation = Intl.NumberFormat().format(isResumevaccinate.poblacion).replace('.', ' ');

        return (
            <>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />

                    <meta property="og:site_name" content={title} />
                    <meta property="og:title" content={title} />
                    <meta property="og:image" content={image} />
                    <meta property="og:description" content={description} />
                    <meta property="og:locale" content={locale} />
                    <meta property="og:type" content="website" data-react-helmet="true" />

                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
                    <meta name="twitter:title" content={title} data-react-helmet="true" />
                    <meta name="twitter:site" content="@opencovidperu" data-react-helmet="true" />
                </Helmet>
                <div className="container-vaccination">
                    <h2>¿En cuánto tiempo estaremos vacunados?</h2>
                    <div className="mx-auto row">
                        <CardTop
                            theme="col-lg-4"
                            isTopTextHighlights={true}
                            sText="En el Perú, somos "
                            highlight="24.07 millones"/*{`${poblation.replace('.',' ')} Millones`}*/
                            eText=" de personas elegibles para recibir la vacuna. "
                            textLeft="Peruanos y extranjeros residentes mayores de 18 años"
                            src_image={primeraLinea}
                            image_style="img-society"
                            text_footer="Fuente: MINSA - RENIEC. Padrón 2020" />
                        <CardTop
                            theme="col-lg-8"
                            isTopLeftTextHighlights={true}
                            sText="Actualmente tenemos "
                            highlight={`60 millones`}
                            eText=" de dosis de vacunas compradas"
                            textLeft="A la fecha,  han llegado a Perú:"
                            src_image={mapaPeru}
                            image_style="img-map"
                            text_footer="Fuente: Gobierno del Perú 2021. Coronavirus: vacunas contra la COVID-19 en el Perú"
                            dataTypeDoses={isResumevaccinate}
                        />
                    </div>
                    <CardBodyVaccination data={isResumevaccinate} />
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
            </>
        )
    } else {
        return (
            <>
                <Helmet>
                    <title>{title}</title>
                    <meta name="description" content={description} />

                    <meta property="og:site_name" content={title} />
                    <meta property="og:title" content={title} />
                    <meta property="og:image" content={image} />
                    <meta property="og:description" content={description} />
                    <meta property="og:locale" content={locale} />
                    <meta property="og:type" content="website" data-react-helmet="true" />

                    <meta name="twitter:description" content={description} />
                    <meta name="twitter:card" content="summary_large_image" data-react-helmet="true" />
                    <meta name="twitter:title" content={title} data-react-helmet="true" />
                    <meta name="twitter:site" content="@opencovidperu" data-react-helmet="true" />
                </Helmet>
                <div>
                    Cargando...
            </div>
            </>
        )
    }

}

export default Vaccination;
