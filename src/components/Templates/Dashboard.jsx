import React, {useState} from 'react';

const Dashboard = ({ type, children }) => {

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
                    {children}
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

export default Dashboard;