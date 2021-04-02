import React from 'react';
import opencovid from '../../img/opencovid-logo.svg';
import {Link, NavLink} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="white" expand="lg" className="shadow">
                <Navbar.Brand
                    as={Link}
                    to="/"
                >
                    <img src={opencovid} alt="Logo de Open Covid Perú" className="header__logo-img" />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link 
                        to="/mapa-recursos" 
                        className="text-dark"
                        exact
                    >
                        Mapa de recursos
                    </Nav.Link>
                    <Nav.Link 
                        to="/" 
                        className="text-dark"
                        exact
                    >
                        Estado de pandemia
                    </Nav.Link>
                    <Nav.Link 
                        to="/sobre-covid" 
                        className="text-dark"
                        exact
                    >
                        Sobre COVID
                    </Nav.Link>
                    <Nav.Link 
                        to="/nosotros" 
                        className="text-dark"
                        exact
                    >
                        Nosotros
                    </Nav.Link>
                </Nav>
                
                {/* <header className="header">
            <div className="header__logo">
                <Link to='/' exact><img src={opencovid} alt="Logo de Open Covid Perú" className="header__logo-img" /></Link>
            </div>
            <nav className="header__menu menu">
                <ul className="menu__list">
                    <li className="menu__item">
                        <NavLink to="/mapa-recursos" exact>Mapa de recursos</NavLink>
                        </li>
                    <li className="menu__item"><NavLink to="/estado-pandemia" exact>Estado de pandemia</NavLink></li>
                    <li className="menu__item"><NavLink to="/sobre-covid" exact>Sobre COVID</NavLink></li>
                    <li className="menu__item"><NavLink to="/nosotros" exact>Nosotros</NavLink></li>
                </ul>
            </nav>
        </header> */}
            </Navbar>
            
    )
}

export default Header;