import React, { useState, useEffect } from 'react';
import QuantityCard from '../Atoms/QuantityCard';
import emergencydesktop from '../../img/home/emergency-desk.svg';
import emergencymobile from '../../img/home/emergency-mob.svg';
import graphicinformation from '../../img/home/graphic-information.svg';
import dead from '../../img/home/dead.svg';
import infected from '../../img/home/infected.svg';
import uci from '../../img/home/uci.svg';
import vaccine from '../../img/home/vaccine.svg';
import HighRule from '../Atoms/HighRule';
import Button from '../Atoms/Button';
import Banner from '../Organisms/Banner';
import metaimage from '../../img/metaimages/home.png';
import Helmet from 'react-helmet';

const title = "OpenCovid-Perú";
const description = "Reportes independientes de COVID-19 en el Perú (subregistro de muertes, camas UCIs, etc)";
const image = { metaimage };
const locale = "es_PE";

const Home = () => {
    document.title = "OpenCovid-Perú"

    const url = "https://open-covid-api-vwgk4ckqbq-uk.a.run.app/api/resume/last";
    let dateC = ""
    const [state, setState] = useState({
        information: {
            data: [],
        }
    })

    useEffect(async () => {
        fetch(url)
            .then(response => response.json())
            .then(response => setState({
                information: {
                    data: response,
                }
            }))
    }, [])

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
            </Helmet>           <Banner />
            <main className="home">
                <section className="national-situation">
                    <div className="main-container">
                        <h1 className="national-situation__title text-center">Situación a nivel nacional</h1>
                        <HighRule />
                        <div className="national-situation__articles mx-0">
                            <QuantityCard title="Casos Confirmados" link="/dashboard" image={infected} number={Math.round(state.information.data.totalInfectadosHist)} type="bad" update={state.information.data.fechaCreacion ? state.information.data.fechaCreacion.split(" ")[0] : ""} />
                            <QuantityCard title="Exceso de Fallecidos" link="/dashboard" image={dead} number={Math.round(state.information.data.totalFallecidosSinadef)} type="bad" update={state.information.data.fechaCreacion ? state.information.data.fechaCreacion.split(" ")[0] : ""} />
                            <QuantityCard title="Camas UCI disponibles" link="/dashboard" image={uci} number={Math.round(state.information.data.camasUciDisp)} type="good" update={state.information.data.fechaCreacion ? state.information.data.fechaCreacion.split(" ")[0] : ""} />
                            <QuantityCard title="Personas vacunadas" image={vaccine} link="/vacunacion" number={Math.round(state.information.data.totalvacunados1)} type="good" update={state.information.data.fechaCreacion ? state.information.data.fechaCreacion.split(" ")[0] : ""} />
                        </div>
                    </div>
                </section>
                <section className="what-find">
                    <h1 className="what-find__title font-weight-bold text-center main-title">¿Qué vas a encontrar?</h1>
                    <HighRule />
                    <div className="what-find__articles">
                        <article className="what-find__article emergency-map pt-4 main-container">
                            <div className="emergency-map__image d-flex align-items-end">
                                <picture>
                                    <source srcSet={emergencydesktop} media="(min-width: 768px)" />
                                    <img src={emergencymobile} alt="" />
                                </picture>
                            </div>
                            <div className="emergency-map__content d-flex flex-column justify-content-center">
                                <h2>Mapa de emergencia</h2>
                                <span>Encontrarás la ubicación y disponibilidad de lo siguiente:</span>
                                <ul className="mt-2 mt-lg-5">
                                    <li>Camas UCI</li>
                                    <li>Camas COVID</li>
                                    <li>Puntos de recarga de oxígeno</li>
                                </ul>
                                <p className="mt-1 mt-lg-3">También podrás identificar la ubicación de centros de salud y farmacias.</p>
                                <Button text="Ver más" theme="button--white-orange mb-4 emergency-map__see-more" link="/mapa-emergencia" />
                            </div>
                        </article>
                        <article className="what-find__article graphic-information container-fluid">
                            <div className="main-container">
                                <div className="graphic-information__content">
                                    <h2>Información en gráficos</h2>
                                    <h3>¿Cómo está afectando la pandemia al Perú?</h3>
                                    <span className="mt-3">Verás un análisis a partir de los siguientes datos:</span>
                                    <ul className="mt-2 mt-lg-4">
                                        <li>Casos totales</li>
                                        <li>Contagios nuevos</li>
                                        <li>Fallecidos</li>
                                        <li>Capacidad hospitalaria</li>
                                        <li>Capacidad UCI y más</li>
                                    </ul>
                                    <Button text="Ver más" theme="button--white-green mb-4 mt-4 graphic-information__see-more" link="/estado-pandemia" />
                                    <Button text="Dashboard" theme="button--white-green mb-4 mt-4 graphic-information__see-more" link="/dashboard" />
                                </div>
                                <div className="graphic-information__image d-flex justify-content-end">
                                    <picture className="d-flex align-items-end">
                                        <img src={graphicinformation} alt="" />
                                    </picture>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                {/*<section className="about-covid py-4 main-container">
                    <h1 className="about-covid__title font-weight-bold text-center main-title">Sobre COVID-19</h1>
                    <HighRule />
                    <div className="about-covid__articles container-fluid mx-0 px-md-2">
                        <AboutCovidCard theme="" title="¿Cuáles son los síntomas del COVID 19?" link="/" image={headache}/>
                        <AboutCovidCard theme="" title="¿Qué prueba debo hacerme para saber si tengo COVID-19?" link="/" image={swabbing}/>
                    </div>
                </section>*/}
            </main>
        </>
    )
}

export default Home;
