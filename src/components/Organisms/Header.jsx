import React, { useState } from "react";
import opencovid from "../../img/opencovid-logo.svg";
import camascovid from "../../img/header/camas-covid.svg";
import camasuci from "../../img/header/camas-uci.svg";
import contagiodistrital from "../../img/header/contagio-distrital.svg";
import peru from "../../img/header/peru.svg";
import analysis from "../../img/header/analysis.svg";
import puntosoxigeno from "../../img/header/puntos-oxigeno.svg";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import * as ReactBootStrap from 'react-bootstrap';
import usePageTracking from "../../hooks/usePageTracking";


const Header = () => {
	
	usePageTracking();

	const [isActive, setActive] = useState("false");
	const [isOpenMapDropdown, setOpenMapDropdown] = useState(false);
	const [isOpenPandemicState, setOpenPandemicState] = useState(false);

	const handleMapDropdownToggle = () => {
		setOpenPandemicState(false);
		setOpenMapDropdown((prev)=>!prev);
	};

	const handlePandemicDropdownToggle = () => {
		setOpenMapDropdown(false);
		setOpenPandemicState((prev)=>!prev);
	};

	return (
		<ReactBootStrap.Navbar bg="white" expand="lg" className="main-header">
			<ReactBootStrap.Navbar.Brand as={Link} to="/">
				<img
					src={opencovid}
					alt="Logo de Open Covid Perú"
					className="header__logo-img"
					height="50"
				/>
			</ReactBootStrap.Navbar.Brand>
			<ReactBootStrap.Navbar.Toggle aria-controls="responsive-navbar-nav"/>
			<ReactBootStrap.Navbar.Collapse id="responsive-navbar-nav">
			<ReactBootStrap.Nav className={`ml-auto ${isActive ? null : "active"}`}>
				<ReactBootStrap.NavDropdown
					title="Mapa de emergencia"
					show={isOpenMapDropdown}
					onClick={handleMapDropdownToggle}
				>
					<div className="container-fluid mx-auto text-center  row">
						<div className="col">
							<Link
								to={{
									pathname: "/mapa-emergencia",
									state: { fromOption: "ucibed" },
								}}
								onClick={()=>{
									window.location.reload();}}
							>
								<img src={camasuci} alt="" />
								Camas UCI 
							</Link>
						</div>						
						
						<div className="col-md-4">
							<Link
								to={{
									pathname: "/mapa-emergencia",
									state: { fromOption: "covidbed" },
								}}
								onClick={()=>{
									window.location.reload();}}
							>
								<img src={camascovid} alt="" />
								Camas COVID
							</Link>
						</div>
						<div className="col-md-4">
							<Link
								to={{
									pathname: "/mapa-emergencia",
									state: { fromOption: "oxigen" },
								}}
								onClick={()=>{
									window.location.reload();}}
							>
								<img src={puntosoxigeno} alt="" />
								Puntos de Oxígeno
							</Link>
						</div>
						
					</div>
				</ReactBootStrap.NavDropdown>
				<ReactBootStrap.NavDropdown
					title="Estado de pandemia"
					show={isOpenPandemicState}
					onClick={handlePandemicDropdownToggle}
					>
					<div className="triangulo-equilatero-bottom"></div>
					<div className="container-fluid mx-auto text-center  row">
						<div className="col-md-4">
							<Link to="estado-pandemia">
								<img src={peru} alt="" />
								Situación regional
							</Link>
						</div>
						<div className="col-md-4">
							<Link to="situacion-distrital-pandemia">
								<img src={contagiodistrital} alt="" />
								Contagios distritales
							</Link>
						</div>
						<div className="col-md-4">
							<Link to="dashboard">
								<img src={analysis} alt="" />
								Dashboard
							</Link>
						</div>
					</div>
				</ReactBootStrap.NavDropdown>
				<ReactBootStrap.Nav.Link as={Link} to="/vacunacion" exact="true">
					Vacunación
				</ReactBootStrap.Nav.Link>
				{/*<Nav.Link
                    as={Link}
                    to="/sobre-covid"
                    exact="true"
                >
                    Sobre COVID
                </Nav.Link>*/}
				<ReactBootStrap.Nav.Link as={Link} to="/nosotros" exact="true">
					Nosotros
				</ReactBootStrap.Nav.Link>
			</ReactBootStrap.Nav>
			</ReactBootStrap.Navbar.Collapse>
		</ReactBootStrap.Navbar>
	);
};

export default Header;
