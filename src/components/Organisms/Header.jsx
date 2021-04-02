import React from 'react';
import opencovid from '../../img/opencovid-logo.svg';
import {Link, NavLink} from 'react-router-dom';
import {Navbar,Nav,NavDropdown} from 'react-bootstrap';
const Header = () => {
    return (
        <Navbar bg="white" expand="lg" className="main-header">
                <Navbar.Brand
                    as={Link}
                    to="/"
                >
                    <img 
                        src={opencovid} 
                        alt="Logo de Open Covid Perú" 
                        className="header__logo-img" 
                        height="50"
                    />
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
            </Navbar>
            
    )
}

export default Header;