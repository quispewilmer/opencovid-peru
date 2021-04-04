import logo from './logo.svg';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from './components/Pages/Home';
import InformYourself from './components/Pages/InformYourself';
import ResourcesMap from './components/Pages/ResourcesMap';
import PandemicState from './components/Pages/PandemicState';
import AboutCovid from './components/Pages/AboutCovid';
import AboutUs from './components/Pages/AboutUs';
import Header from './components/Organisms/Header';
import Footer from './components/Organisms/Footer';
import './styles/styles.css';

// Se definen las rutas
function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/mapa-recursos" component={ResourcesMap} />
        <Route path="/estado-pandemia" component={PandemicState} />
        <Route path="/sobre-covid" component={AboutCovid} />
        <Route path="/nosotros" component={AboutUs} />
        <Route path="/informate" component={InformYourself} />
        <Route component={
          () => (
            <h1>Error 404</h1>
          )
        } />
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
