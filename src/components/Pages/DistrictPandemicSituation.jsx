import React from 'react';
import metaimage from '../../img/metaimages/districtsituation.png';
import Helmet from 'react-helmet';

const title = "OpenCovid-Perú - Situación Distrital";
const description = "El mapa mide el impacto de la pandemia teniendo en cuenta la población de esos distritos.";
const image = {metaimage};
const locale = "es_PE";

const DistricPandemicSituation = () => {
    document.title = "OpenCovid-Perú - Contagios distritales"
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
                <meta property="og:type" content="website" data-react-helmet="true"/>

                <meta name="twitter:description" content={description} />
                <meta name="twitter:card" content="summary_large_image" data-react-helmet="true"/>
                <meta name="twitter:title" content={title} data-react-helmet="true" />
                <meta name="twitter:site" content="@opencovidperu" data-react-helmet="true"/>
            </Helmet>
        <main className="district-pandemic-situation">
            <iframe src="https://maps.amigocloud.com/api/v1/maps/1174/view" width="100%" height="600px"></iframe>
        </main>
        </>
    )
}

export default DistricPandemicSituation;