import React, { useState } from "react";
import opencovid from "../../img/opencovid-logo.svg";
import camascovid from "../../img/header/camas-covid.svg";
import camasuci from "../../img/header/camas-uci.svg";
import contagiodistrital from "../../img/header/contagio-distrital.svg";
import peru from "../../img/header/peru.svg";
import puntosoxigeno from "../../img/header/puntos-oxigeno.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

const Header = ({ setCoverActive }) => {
	const [isActive, setActive] = useState("false");

	const handleToggle = () => {
		setActive(!isActive);
		setCoverActive();
	};
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
            <span className={`navtoggle ${isActive ? null : "active"}`}
                onClick={() => {
                    handleToggle();
                }
                }
            >
                <i></i>
                <i></i>
                <i></i>
            </span>
            <Nav className={`ml-auto ${isActive ? null : "active"}`} id="sidebar">
                <NavDropdown
                    title="Mapa de recursos"
                >
                    <div className="container-fluid mx-auto text-center  row">
                        <div className="col">
                            <Link to="/mapa-emergencia">
                                <img
                                    src={camasuci}
                                    alt=""
                                />
                                Camas UCI
                                </Link>
                        </div>
                        <div className="col">
                            <Link to="/mapa-emergencia">
                                <img
                                    src={camascovid}
                                    alt=""
                                />
                                Camas COVID
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="/mapa-emergencia">
                                <img
                                    src={puntosoxigeno}
                                    alt=""
                                />
                                Puntos de Oxígeno
                                </Link>
                        </div>
                    </div>
                </NavDropdown>
                <NavDropdown
                    title="Estado de pandemia"
                >
                    <div className="triangulo-equilatero-bottom"></div>
                    <div className="container-fluid mx-auto text-center  row">
                        <div className="col">
                            <Link to="estado-pandemia">
                                <img
                                    src={peru}
                                    alt=""
                                />
                                Situacion regional
                            </Link>
                        </div>
                        <div className="col">
                            <Link to="situacion-distrital-pandemia">
                                <img
                                    src={contagiodistrital}
                                    alt=""
                                />
                                Contagios distritales
                                </Link>
                        </div>
                    </div>
                </NavDropdown>
                <Nav.Link
                    as={Link}
                    to="/vacunacion"
                    exact="true"
                >
                    Vacunación
                    </Nav.Link>
                {/*<Nav.Link
                    as={Link}
                    to="/sobre-covid"
                    exact="true"
                >
                    Sobre COVID
                </Nav.Link>*/}
                <Nav.Link
                    as={Link}
                    to="/nosotros"
                    exact="true"
                >
                    Nosotros
                    </Nav.Link>
            </Nav>
        </Navbar>

    )
}

export default Header;
