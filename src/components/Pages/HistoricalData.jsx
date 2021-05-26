import React from 'react';
import metaimage from '../../img/metaimages/historicdata.png';
import Helmet from 'react-helmet';

const title = "OpenCovid-Perú - Datos Históricos";
const image = { metaimage };
const description = "Progreso de vacunación nacional, Fallecidos reportados por el SINADEF, Movilidad de la población, Fallecidos reportados por el MINSA.";
const locale = "es_PE";

const HistoricalData = () => {
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
            <iframe
                width="100%"
                src="https://datastudio.google.com/embed/reporting/0c5059be-0dbd-4a90-a04e-83b9a460b928/page/9xzBC"
                frameborder="0"
                style={{ border: 0, height: '100vh' }}
                allowfullscreen>
            </iframe>
        </>
    )
}

export default HistoricalData;