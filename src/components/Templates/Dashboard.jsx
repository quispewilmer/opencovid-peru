import React, {useState} from 'react';
import BuscarRegion from '../Atoms/BuscarRegion'
import Region from '../Organisms/Region'
import PuestoRegional from '../Molecules/PuestoRegion'
import RankingRegional from '../Molecules/RankingRegion'
import SearchRegion from '../Molecules/SearchRegion';

const Dashboard = ({ type }) => {

    return (
        type == "for-graphics" ?
            <main className="dashboard">
                <section className="dashboard__sidebar dashboard-sidebar">
                    <div className="dashboard-sidebar__section">
                        <span className="dashboard-sidebar__item">Resumen</span>
                        <ul className="dashboard-sidebar__list">
                            <li className="dashboard-sidebar__item dashboard-sidebar__subitem">
                                <a className="dashboard-sidebar__link">
                                    Situación Regional
                                </a>
                            </li>
                            <li className="dashboard-sidebar__item dashboard-sidebar__subitem">
                                <a className="dashboard-sidebar__link">
                                    Contagios Distritales
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div className="dashboard-sidebar__section">
                        <span className="dashboard-sidebar__item">Detalle</span>
                    </div>
                    <div className="dashboard-sidebar__section">
                        <span className="dashboard-sidebar__item">Vacunas</span>
                    </div>
                </section>
                <section className="dashboard__content dashboard--for-graphics">
                        <SearchRegion />
                        <Region />
                        <PuestoRegional />
                        <RankingRegional />
                </section>
            </main>
            :
            <main className="dashboard">
                <section className="dashboard__dashboard-sidebar">

                </section>
                <section className="dashboard__content dashboard--for-map">

                </section>
            </main>
    );
}
/*
                    <section className="dashboard__map">

                    </section>
                    <section className="dashboard__graphics">

                    </section>
*/
export default Dashboard;