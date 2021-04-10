import React, {useState, useEffect} from 'react';
import axios from 'axios';
import QuantityCard from '../Atoms/QuantityCard';
import emergencydesktop from '../../img/home/emergency-desk.svg';
import emergencymobile from '../../img/home/emergency-mob.svg';
import graphicinformation from '../../img/home/graphic-information.svg';
import headache from '../../img/home/headache.svg';
import swabbing from '../../img/home/swabbing.svg';
import dead from '../../img/home/dead.svg';
import infected from '../../img/home/infected.svg';
import uci from '../../img/home/uci.svg';
import vaccine from '../../img/home/vaccine.svg';
import AboutCovidCard from '../Atoms/AboutCovidCard';
import HighRule from '../Atoms/HighRule'; 
import Button from '../Atoms/Button';
import Banner from '../Organisms/Banner';
import Lupa from '../../img/pandemiaState/lupa.svg';

const Home = () => {

    let information;
    let url = "https://open-covid-2-api-szz4htueua-uk.a.run.app/api/resume/last";

    let [state, setState] = useState({
        information: "",
        date: "",
    })

    useEffect(async () => {
        setState({
            information: await axios.get(url),
            date: state.information.data.fechaCreacion.split(" ")[0],
        })
    });

    return (
        <>
            <Banner />
            <main className="home">
                <section className="national-situation container-fluid py-4">
                    <div className="main-container">
                        <h1 className="national-situation__title text-center font-weight-bold main-title">Situación a nivel nacional</h1>
                        <HighRule />
                        <div className="national-situation__articles mx-0">
                            <QuantityCard title="Nuevos infectados" image={infected} number={state.information ? parseInt(state.information.data.activeCases, 10) : ""} type="bad" update={state.date}/>
                            <QuantityCard title="Nuevas muertes" image={dead} number={state.information ? parseInt(state.information.data.fallecidosSinadef, 10) : ""} type="bad" update={state.date}/>
                            <QuantityCard title="Camas UCI disponibles" image={uci} number={state.information ? parseInt(state.information.data.camasUciDisp, 10) : ""} type="good" update={state.date}/>
                            <QuantityCard title="Personas vacunadas" image={vaccine} number={state.information ? parseInt(state.information.data.vacunados, 10) : ""} type="good" update={state.date}/>
                        </div>
                    </div>
                </section>
                <section className="what-find py-4">
                    <h1 className="what-find__title font-weight-bold text-center main-title">¿Qué vas a encontrar?</h1>
                    <HighRule />
                    <div className="what-find__articles">
                        <article className="what-find__article emergency-map pt-4 main-container">
                                <div className="emergency-map__image d-flex align-items-end">
                                    <picture>
                                        <source srcSet={emergencydesktop} media="(min-width: 768px)" />
                                        <img src={emergencymobile} alt=""/>
                                    </picture>
                                </div>
                                <div className="emergency-map__content d-flex flex-column">
                                    <h2>Mapa de emergencia</h2>
                                    <span>Encontrarás la ubicación y disponibilidad de lo siguiente:</span>
                                    <ul>
                                        <li>Camas UCI</li>
                                        <li>Camas COVID</li>
                                        <li>Puntos de recarga de oxígeno</li>
                                    </ul>
                                    <p>También podrás identificar la ubicación de centros de salud y farmacias.</p>
                                    <Button text="Emergencia" theme="button--red align-self-center mb-4" link="/mapa-recursos"/>
                                </div>       
                        </article>
                        <article className="what-find__article graphic-information container-fluid pt-4">
                            <div className="main-container">
                                <div className="graphic-information__content">
                                    <h2>Información en gráficos</h2>
                                    <h3>¿Cómo está afectando la pandemia al Perú?</h3>
                                    <span>Verás un análisis a partir de los siguientes datos:</span>
                                    <ul>
                                        <li>Casos totales</li>
                                        <li>Contagios nuevos</li>
                                        <li>Fallecidos</li>
                                        <li>Capacidad hospitalaria</li>
                                        <li>Capacidad UCI y más</li>
                                    </ul>
                                    <Button text="Infórmate" theme="button--white-green mb-3" link="/estado-pandemia"/>
                                </div>
                                <div className="graphic-information__image d-flex justify-content-end">
                                    <picture>
                                        <img src={graphicinformation} alt=""/>
                                    </picture>
                                </div>
                            </div>
                        </article>
                    </div>
                </section>
                <section className="about-covid py-4 main-container">
                    <h1 className="about-covid__title font-weight-bold text-center main-title">Sobre COVID-19</h1>
                    <HighRule />
                    <div className="about-covid__articles container-fluid mx-0 px-md-2">
                        <AboutCovidCard theme="" title="¿Cuáles son los síntomas del COVID 19?" link="/" image={headache}/>
                        <AboutCovidCard theme="" title="¿Qué prueba debo hacerme para saber si tengo COVID-19?" link="/" image={swabbing}/>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Home;
