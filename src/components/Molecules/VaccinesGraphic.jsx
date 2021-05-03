import React from 'react';
import { Chart, Bar } from 'react-chartjs-2';
import SyringeIcon from '../../img/vaccination/syringe.svg';
import CounterIcon from '../../img/vaccination/counter.svg';
import DailyIcon from '../../img/vaccination/daily.svg';
var moment = require('moment/min/moment-with-locales');
moment.locale('es');

const VaccinesGraphic = (props) => {

    let graphData = [];
    graphData = props.data.data || [];

    const data = {
        labels: graphData.map((item) => {
            return moment(item.fecha, 'DD-MM-YYYY HH:mm:ss').format('D MMM');
        }),
        datasets: [
            {
                label: 'Primeras dosis aplicadas',
                data: graphData.map((item) => {
                     return item.diario;
                    }),
                backgroundColor: [
                    '#01ABF6'
                ],
                borderColor: [
                    'rgba(54, 162, 235, 1)'
                ],
                borderWidth: 1,
            },
            {
                label: 'Número de vacunas diarias a aplicar para llegar a la meta',
                data: graphData.map((item) => {
                    return item.meta;
                }),
                backgroundColor: [
                    '#00599D'
                ],
                borderColor: [
                    '#00599D',
                ],
                type: 'line',
                borderWidth: 3,
            },
        ],
    };

    Chart.defaults.font.size = 16;

    const options = {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
            xAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    };

    return (
        <section className="graph-block">
            {graphData.length > 0 && (
                <h4 className={'text-center'}>
                    Al 31 de diciembre, se deben vacunar a <i className="graph-block__amount">{(graphData[0].resta / 1000000).toFixed(2)}</i> millones de personas en el Perú.
                </h4>
            )}
            <div className="row">
                <div className="col-4">
                    <div className="row justify-content-center align-items-center flex-column">
                        <div className="text-center d-block h-100px">
                            <img src={SyringeIcon}  className="img-fluid d-inline-block" />
                        </div>
                        {graphData.length > 0 && (
                            <div className="graph-block__textbox pt-1 pb-1 pl-3 pr-3 mt-3 mb-3 fs-20">
                                {graphData[graphData.length - 1].resta.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            </div>
                        )}
                        <div className="d-block text-center">
                            <p className="graph-block__boxlabel p-0 m-0">Total vacunas que<br/>faltan aplicar</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row justify-content-center align-items-center flex-column">
                        <div className="text-center h-100px align-items-center pt-3">
                            <img src={CounterIcon}  className="img-fluid d-inline-block" />
                        </div>
                        <div className="graph-block__textbox pt- pb-1 pl-3 pr-3 mt-3 mb-3 fs-20">
                            {moment('2021-12-31').diff(moment(),'days')}
                        </div>
                        <div className="d-block text-center">
                            <p className="graph-block__boxlabel p-0 m-0">Días para el 31<br/>de diciembre</p>
                        </div>
                    </div>
                </div>
                <div className="col-4">
                    <div className="row justify-content-center align-items-center flex-column">
                        <div className="text-center d-block h-100px">
                            <img src={DailyIcon}  className="img-fluid d-inline-block" />
                        </div>
                        {graphData.length > 0 && (
                            <div className="graph-block__textbox pt-1 pb-1 pl-3 pr-3 mt-3 mb-3 fs-20">
                                {Math.round(graphData[graphData.length - 1].meta).toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")}
                            </div>
                        )}
                        <div className="d-block text-center">
                            <p className="graph-block__boxlabel p-0 m-0">Vacunas se deben<br/>aplicar por día</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-3">
                <Bar data={data} options={options} width={'100%'}
                     height={550}
                     options={{ maintainAspectRatio: false }} />
            </div>

            <p className="graph-block__source">Fuente: Gobierno del Perú 2021. Coronavirus: vacunas contra la COVID-19 en el Perú</p>
        </section>
    );
}

export default VaccinesGraphic;
