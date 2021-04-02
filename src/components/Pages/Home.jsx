import React from 'react';
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
import Button from '../Atoms/Button';
import Banner from '../Organisms/Banner';

const Home = () => {
    return (
        <>
            <Banner />
            <section className="national-situation">
                <h1 className="national-situation__title">Situación a nivel nacional</h1>
                <hr className="title-rule"/>
                <div className="national-situation__articles">
                    <QuantityCard title="Nuevos infectados" image={infected} number="3000" type="bad" />
                    <QuantityCard title="Nuevas muertes" image={dead} number="1000" type="bad" />
                    <QuantityCard title="Camas UCI disponibles" image={uci} number="1000" type="good" />
                    <QuantityCard title="Personas vacunadas" image={vaccine} number="1000" type="good" />
                </div>
            </section>
            <section className="what-find">
                <h1 className="what-find__title">¿Qué vas a encontrar?</h1>
                <hr className="title-rule"/>
                <div className="what-find__articles">
                    <article className="what-find__article emergency-map">
                        <div className="emergency-map__image">
                            <picture>
                                <source srcset={emergencydesktop} media="(min-width: 768px)"/>
                                <img src={emergencymobile} alt=""/>
                            </picture>
                        </div>
                        <div className="emergency-map__content">
                            <h2>Mapa de emergencia</h2>
                            <span>Encontrarás la ubicación y disponibilidad de lo siguiente:</span>
                            <ul>
                                <li>Camas UCI</li>
                                <li>Camas COVID</li>
                                <li>Puntos de recarga de oxígeno</li>
                            </ul>
                            <p>También podrás identificar la ubicación de centros de salud y farmacias.</p>
                            <Button text="Emergencia" theme="red" link="/mapa-recursos"/>
                        </div>
                    </article>
                    <article className="what-find__article graphic-information">
                        <div className="graphic-information__content">
                            <h2>Información en gráficos</h2>
                            <span>¿Cómo está afectando la pandemia al Perú?</span>
                            <span>Verás un análisis a partir de los siguientes datos:</span>
                            <ul>
                                <li>Casos totales</li>
                                <li>Contagios nuevos</li>
                                <li>Fallecidos</li>
                                <li>Capacidad hospitalaria</li>
                                <li>Capacidad UCI y más</li>
                            </ul>
                            <Button text="Infórmate" theme="white-green" link="/estado-pandemia"/>
                        </div>
                        <div className="graphic-information__image">
                            <picture>
                                <img src={graphicinformation} alt=""/>
                            </picture>
                        </div>
                    </article>
                </div>
            </section>
            <section className="about-covid">
                <h1 className="about-covid__title">¿Qué vas a encontrar?</h1>
                <hr className="title-rule"/>
                <div className="about-covid__articles">
                    <AboutCovidCard title="¿Cuáles son los síntomas del COVID 19?" link="/" image={headache}/>
                    <AboutCovidCard title="¿Qué prueba debo hacerme para saber si tengo COVID-19?" link="/" image={swabbing}/>
                </div>
            </section>
        </>
    )
}

export default Home;