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
                    <img 
                        src={opencovid} 
                        alt="Logo de Open Covid Perú" 
                        className="header__logo-img" 
                        height="50"
                    />
                </Navbar.Brand>
                <Nav className="ml-auto">
                    <Nav.Link 
                        as={Link}
                        to="/mapa-recursos" 
                        className="text-dark"
                        exact="true"
                    >
                        Mapa de recursos
                    </Nav.Link>
                    <Nav.Link 
                        as={Link}
                        to="/" 
                        className="text-dark"
                        exact="true"
                    >
                        Estado de pandemia
                    </Nav.Link>
                    <Nav.Link
                        as={Link} 
                        to="/sobre-covid" 
                        className="text-dark"
                        exact="true"
                    >
                        Sobre COVID
                    </Nav.Link>
                    <Nav.Link 
                        as={Link} 
                        to="/nosotros" 
                        className="text-dark"
                        exact="true"
                    >
                        Nosotros
                    </Nav.Link>
                </Nav>
            </Navbar>
            
    )
}

export default Header;