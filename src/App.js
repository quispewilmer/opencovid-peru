import React,{useEffect} from 'react';
import { BrowserRouter as Router, Route, Switch} from "react-router-dom";
import PandemicStateFilter from "./components/Pages/PandemicStateFilter";
import InformYourself from "./components/Pages/InformYourself";
import HistoricalData from "./components/Pages/HistoricalData";
import PandemicState from "./components/Pages/PandemicState";
import EmergencyMap from "./components/Pages/EmergencyMap";
import AboutCovid from "./components/Pages/AboutCovid";
import Header from "./components/Organisms/Header";
import Footer from "./components/Organisms/Footer";
import AboutUs from "./components/Pages/AboutUs";
import Home from "./components/Pages/Home";
import "./styles/styles.scss";
import DistricPandemicSituation from "./components/Pages/DistrictPandemicSituation";
import Vaccination from "./components/Pages/Vaccination/Index";
import { hotjar } from 'react-hotjar';

hotjar.initialize(2382218, 6);

// Se definen las rutas
function App() {
	
	return (
		<Router>
			<Header />
			<Switch>
				<Route path={[	"/",
									"/reportes/sinadef",
									"/reportes/desfase",
									"/reportes/minsa-nacional"
								]} exact component={Home} />
				<Route path={[	"/mapa-emergencia",
									"/reportes/movilidad",
									"/reportes/sistema-hospitalario",
									"/camas-covid"
								]} component={EmergencyMap} />
				<Route path={[	"/estado-pandemia",
									"/reportes/cdc",
									"/reportes/pruebas",
									"/reportes/minsa-region",
									"/nacional"
								]} component={PandemicState} />
				<Route path={[	"/sobre-covid"
								]} component={AboutCovid} />
				<Route path={[	"/nosotros",
									"/team"
								]} component={AboutUs} />
				<Route path={[	"/pandemia-filtro"
								]} component={PandemicStateFilter} />
				<Route path={[	"/dashboard",
									"/datos-historicos",
									"/uci-disponible",
									"/reportes/R"
								]} component={HistoricalData}/>
				<Route path={[	"/informate"
								]} component={InformYourself} />
				<Route path={[	"/vacunacion"
								]} component={Vaccination} />
				<Route path={[	"/situacion-distrital-pandemia",
									"/reportes/mapa-semaforo-epidemiologico"
								]} component={DistricPandemicSituation}
				/>
				<Route component={() => <h1>Error 404</h1>} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
