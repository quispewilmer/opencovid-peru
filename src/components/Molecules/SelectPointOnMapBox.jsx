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

const SelectPointOnMapBox = ({theme, visualizeData, changeOption}) => {
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
                <SelectPointOnMap image={ucibed} title="Camas UCI" url="api/uci" changeOption={changeOption} />
                <SelectPointOnMap image={covidbed} title="Camas COVID" url="api/cama" changeOption={changeOption} />
                <SelectPointOnMap image={oxigencharge} title="Balones de oxígeno" url="api/cama" changeOption={changeOption} />
                <SelectPointOnMap image={pharmacy} title="Farmacias" url="api/cama" changeOption={changeOption} />
                <SelectPointOnMap image={minsahealthcenter} title="Centros de salud MINSA" url="api/cama" changeOption={changeOption} />
                <SelectPointOnMap image={essaludhealthcenter} title="Centros de salud Essalud" url="api/cama" changeOption={changeOption} />
                <SelectPointOnMap image={privatehealthcenter} title="Centros de salud privados" url="api/cama" changeOption={changeOption} />
                <SelectPointOnMap image={ffaapnphealthcenter} title="Centros de salud FF.AA. y la PNP" url="api/cama" changeOption={changeOption} />
            </div>
        </section>
    );
}

export default SelectPointOnMapBox;