import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PandemicStateFilter from "./components/Pages/PandemicStateFilter";
import InformYourself from "./components/Pages/InformYourself";
import PandemicState from "./components/Pages/PandemicState";
import ResourcesMap from "./components/Pages/ResourcesMap";
import EmergencyMap from "./components/Pages/EmergencyMap";
import AboutCovid from "./components/Pages/AboutCovid";
import Header from "./components/Organisms/Header";
import Footer from "./components/Organisms/Footer";
import AboutUs from "./components/Pages/AboutUs";
import Home from "./components/Pages/Home";
import "./styles/styles.css";
import DistricPandemicSituation from "./components/Pages/DistrictPandemicSituation";
import Vaccination from "./components/Pages/Vaccination/Index";

import { hotjar } from 'react-hotjar';
import DashboardAdvanced from "./components/Pages/DashboardAdvanced";

hotjar.initialize(2382218, 6);

// Se definen las rutas
function App() {
	return (
		<Router>
			<Header />
			<Switch>
				<Route path="/" exact component={Home} />
				<Route path="/mapa-emergencia" component={EmergencyMap} />
				<Route path="/mapa-recursos" component={ResourcesMap} />
				<Route path="/estado-pandemia" component={PandemicState} />
				<Route path="/sobre-covid" component={AboutCovid} />
				<Route path="/nosotros" component={AboutUs} />
				<Route path="/pandemia-filtro" component={PandemicStateFilter} />
				<Route path="/informate" component={InformYourself} />
				<Route path="/vacunacion" component={Vaccination} />
				<Route path="/dashboard-advanced" component={DashboardAdvanced}/>
				<Route
					path="/situacion-distrital-pandemia"
					component={DistricPandemicSituation}
				/>
				<Route component={() => <h1>Error 404</h1>} />
			</Switch>
			<Footer />
		</Router>
	);
}

export default App;
