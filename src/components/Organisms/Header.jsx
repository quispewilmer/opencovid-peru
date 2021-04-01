import React from 'react';
import opencovid from '../../img/opencovid-logo.svg';
import {Link, NavLink} from 'react-router-dom';

const Header = () => {
    return (
        <header className="header">
            <div className="header__logo">
                <Link to='/' exact><img src={opencovid} alt="Logo de Open Covid Perú" className="header__logo-img" /></Link>
            </div>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item"><NavLink to="/mapa-recursos" exact>Mapa de recursos</NavLink></li>
                    <li className="menu__item"><NavLink to="/estado-pandemia" exact>Estado de pandemia</NavLink></li>
                    <li className="menu__item"><NavLink to="/sobre-covid" exact>Sobre COVID</NavLink></li>
                    <li className="menu__item"><NavLink to="/nosotros" exact>Nosotros</NavLink></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;