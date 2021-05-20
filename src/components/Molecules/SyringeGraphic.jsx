import React from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import SyringeIcon from '../../img/vaccination/syringe.svg';
import CounterIcon from '../../img/vaccination/counter.svg';
import CalendarIcon from '../../img/vaccination/calendar.svg';
import SyringeBg from '../../img/vaccination/syringe-bg.svg';
var moment = require('moment/min/moment-with-locales');
moment.locale('es');

const SyringeGraphic = (props) => {

    let graphData = [];
    graphData = (props.data !== null ) ? props.data.data || []  : null;

    //console.log(graphData, 'holis babe')


    return (
        <section className="graph-block">
            <h4 className={'text-justify'}>
                Entonces, a este ritmo, ¿en cuánto tiempo se vacunarían todas las personas mayores de edad en el Perú?
            </h4>
            <div className="row">
                <div className="col-12">
                    <div className="row">
                        <div className="col-9 align-items-center justify-content-center d-flex">
                            <div className={'vaccine-progress'}>

                                <div style={{ marginTop: '5%', marginLeft: '13%', width: '65%', height: '46%'}} className={'align-items-end justify-content-end d-flex'}>

                                    <div style={{ width: Math.round(graphData.vaccProgress) + '%', height: '100%', backgroundColor: 'rgba(1,171,246,0.5)'}}>
                                        <span style={{ position: 'relative', top: '-70%', left: 0 }}>{graphData.vaccProgress}%</span>
                                    </div>
                                </div>


                            </div>
                            <img src={SyringeBg}  className="img-fluid d-inline-block" />
                        </div>
                        <div className="col-3">
                            <img src={CalendarIcon}  className="img-fluid d-inline-block" />
                            <div className={'vaccine-calendar align-items-center justify-content-center d-flex'}>
                                El {moment(graphData.vaccEnds, 'DD-MM-YYYY HH:mm:ss').format('DD/MM/YYYY')}<br/>
                                {moment(graphData.vaccEnds, 'DD-MM-YYYY HH:mm:ss').diff(moment(),'months')} meses
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <p className="graph-block__source">Fuente: Gobierno del Perú 2021. Coronavirus: vacunas contra la COVID-19 en el Perú</p>
        </section>
    );
}

export default SyringeGraphic;
