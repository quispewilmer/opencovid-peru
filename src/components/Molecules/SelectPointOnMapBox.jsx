import React, {useState, useEffect, useRef} from 'react';
import SelectPointOnMap from '../Atoms/SelectPointOnMap';
import covidbed from '../../img/emergencymap/covidbed.svg';
import essaludhealthcenter from '../../img/emergencymap/essaludhealthcenter.svg';
import ffaapnphealthcenter from '../../img/emergencymap/ffaapnphealthcenter.svg';
import minsahealthcenter from '../../img/emergencymap/minsahealthcenter.svg';
import oxigencharge from '../../img/emergencymap/oxigencharge.svg';
import pharmacy from '../../img/emergencymap/pharmacy.svg';
import privatehealthcenter from '../../img/emergencymap/privatehealthcenter.svg';
import ucibed from '../../img/emergencymap/ucibed.svg';
import arrowup from '../../img/icons/arrowup.svg';

const SelectPointOnMapBox = ({theme, visualizeData, hello}) => {
    const selectPointOnMapBox = useRef(null);

    const [state, setState] = useState({
        mapBoxGridIsDown: false,
    });

    const getDownTheArea = () => {
        setState({
            mapBoxGridIsDown: !state.mapBoxGridIsDown
        })
    }

    return (
        <section className={`select-point-on-map-box ${state.mapBoxGridIsDown ? "select-point-on-map-box--close" : ""}`} ref={selectPointOnMapBox}>
            <div className="select-point-on-map-box__updown" onClick={getDownTheArea.bind()}>
                <span className="select-point-on-map-box__updowntext">{state.mapBoxGridIsDown ? "Ver más" : "Ocultar"}</span>
                <img src={arrowup} alt="" className="select-point-on-map-box__updownicon" style={
                    state.mapBoxGridIsDown ? {
                        transform: 'rotate(180deg)'
                    } : {
                        transform: 'rotate(0deg)'
                    }}/>
            </div>
            <h2 className="select-point-on-map-box__title graphic__title text-center">Selecciona la opción que necesites</h2>
            <div className="select-point-on-map-box__grid">
                <SelectPointOnMap image={ucibed} title="Camas UCI" />
                <SelectPointOnMap image={covidbed} title="Camas COVID" />
                <SelectPointOnMap image={oxigencharge} title="Balones de oxígeno" />
                <SelectPointOnMap image={pharmacy} title="Farmacias" />
                <SelectPointOnMap image={minsahealthcenter} title="Centros de salud MINSA" />
                <SelectPointOnMap image={essaludhealthcenter} title="Centros de salud Essalud" />
                <SelectPointOnMap image={privatehealthcenter} title="Centros de salud privados" />
                <SelectPointOnMap image={ffaapnphealthcenter} title="Centros de salud FF.AA. y la PNP" />
            </div>
        </section>
    );
}

export default SelectPointOnMapBox;