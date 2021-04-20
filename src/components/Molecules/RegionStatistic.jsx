import React, { Fragment } from 'react';
import LegendItem from '../Atoms/LegendItem';
import Info from '../../img/estadoPandemia_Filtro/info.svg';
import ColumnPositiva from '../../img/estadoPandemia_Filtro/columnTasa_positiva.svg';

const RegionStatistic = ({ title }) => {
    return (
        <>
            <section className={`graphic-container graphic statistic-container`}>
                <header className="statistic-container__options">
                    <select name="" id="">
                        <option value="tasa-positividad">Tasa de Positividad</option>
                        <option value="tasa-incidencia">Tasa de Incidencia</option>
                        <option value="media-tests-diarios">Media de Test Diarios</option>
                    </select>
                    <img className="statistic-container__ask" src={Info} alt="" />
                </header>
                <div className="statistic-container__content">
                    <ul className="legend border-0 d-flex justify-content-between w-100 mw-100 p-0 mb-0 flex-wrap">
                        <LegendItem legendClass="low" legendDescription="Casos Positivos" />
                        <LegendItem legendClass="extreme" legendDescription="Casos Negativos" />
                    </ul>
                    <div className="statistic-container__graphics-area statistic-graphics-container">
                        <article className="statistic-graphics-container__item">
                            <img src={ColumnPositiva} alt="" className="statistic-graphics-container__image"/>
                            <p className="statistic-graphics-container__week">Semana 1</p>
                            <p className="statistic-graphics-container__date">15 al 21 de marzo del 2021</p>
                        </article>
                        <article className="statistic-graphics-container__item">
                            <img src={ColumnPositiva} alt="" className="statistic-graphics-container__image"/>
                            <p className="statistic-graphics-container__week">Semana 1</p>
                            <p className="statistic-graphics-container__date">15 al 21 de marzo del 2021</p>
                        </article>
                        <article className="statistic-graphics-container__item">
                            <img src={ColumnPositiva} alt="" className="statistic-graphics-container__image"/>
                            <p className="statistic-graphics-container__week">Semana 1</p>
                            <p className="statistic-graphics-container__date">15 al 21 de marzo del 2021</p>
                        </article>
                    </div>
                </div>
            </section>
        </>
    );
}

export default RegionStatistic;