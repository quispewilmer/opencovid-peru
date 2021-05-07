import React, { useState, useRef } from "react";
import SelectPointOnMap from "../Atoms/SelectPointOnMap";
import covidbed from "../../img/emergencymap/covidbed.svg";
import essaludhealthcenter from "../../img/emergencymap/essaludhealthcenter.svg";
import ffaapnphealthcenter from "../../img/emergencymap/ffaapnphealthcenter.svg";
import minsahealthcenter from "../../img/emergencymap/minsahealthcenter.svg";
import oxigencharge from "../../img/emergencymap/oxigencharge.svg";
import pharmacy from "../../img/emergencymap/pharmacy.svg";
import privatehealthcenter from "../../img/emergencymap/privatehealthcenter.svg";
import ucibed from "../../img/emergencymap/ucibed.svg";
import arrowup from "../../img/icons/arrowup.svg";

const SelectPointOnMapBox = ({
	theme,
	visualizeData,
	itemSelectedState,
	onPointClick,
}) => {
	const selectPointOnMapBox = useRef(null);

	const [state, setState] = useState({
		mapBoxGridIsDown: false,
	});

	const getDownTheArea = () => {
		setState({
			mapBoxGridIsDown: !state.mapBoxGridIsDown,
		});
	};

	return (
		<section
			className={`select-point-on-map-box ${
				state.mapBoxGridIsDown ? "select-point-on-map-box--close" : ""
			}`}
			ref={selectPointOnMapBox}
		>
			<div
				className="select-point-on-map-box__updown"
				onClick={getDownTheArea.bind()}
			>
				<span className="select-point-on-map-box__updowntext">
					{state.mapBoxGridIsDown ? "Ver más" : "Ocultar"}
				</span>
				<img
					src={arrowup}
					alt=""
					className="select-point-on-map-box__updownicon"
					style={
						state.mapBoxGridIsDown
							? {
									transform: "rotate(180deg)",
							  }
							: {
									transform: "rotate(0deg)",
							  }
					}
				/>
			</div>
			<h2 className="select-point-on-map-box__title graphic__title text-center">
				Selecciona la opción que necesites
			</h2>
			<div className="select-point-on-map-box__grid">
				<SelectPointOnMap
					image={ucibed}
					title="Camas UCI"
					name="ucibed"
					isSelected={itemSelectedState[0]}
					endpoint="/api/uci/near?"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={covidbed}
					title="Camas COVID"
					name="covidbed"
					isSelected={itemSelectedState[1]}
					endpoint="/api/cama?"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={oxigencharge}
					title="Balones de oxígeno"
					name="oxigen"
					isSelected={itemSelectedState[2]}
					endpoint="/api/o2/near?"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={pharmacy}
					title="Farmacias"
					name="pharmacy"
					isSelected={itemSelectedState[3]}
					endpoint="/api/farmacia?"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={minsahealthcenter}
					title="Centros de salud MINSA"
					name="minsa"
					isSelected={itemSelectedState[4]}
					endpoint="/api/institution?type=MINSA&"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={essaludhealthcenter}
					title="Centros de salud Essalud"
					name="essalud"
					isSelected={itemSelectedState[5]}
					endpoint="/api/institution?type=ESSALUD&"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={privatehealthcenter}
					title="Centros de salud privados"
					name="private"
					isSelected={itemSelectedState[6]}
					endpoint="/api/institution?type=PRIVADO&"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={ffaapnphealthcenter}
					title="Centros de salud FF.AA. y la PNP"
					name="ffaa"
					isSelected={itemSelectedState[7]}
					endpoint="/api/institution?type=FFAA_PNP&"
					onClick={onPointClick}
				/>
			</div>
		</section>
	);
};
export default SelectPointOnMapBox;
