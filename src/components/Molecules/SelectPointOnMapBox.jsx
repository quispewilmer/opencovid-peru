import React, { useState, useEffect } from "react";
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

const SelectPointOnMapBox = ({ theme, onPointClick }) => {
	let updownButton, mapBoxGrid, mapBox, arrowIcon;

	let [state, setState] = useState({
		mapBoxGridIsDown: true,
		mapBoxTitle: "Ocultar",
	});

	useEffect(() => {
		updownButton = document.querySelector(".select-point-on-map-box__updown");
		mapBoxGrid = document.querySelector(".select-point-on-map-box__grid");
		mapBox = document.querySelector(".select-point-on-map-box");
		arrowIcon = document.querySelector(".select-point-on-map-box__updownicon");
	});

	const getDownTheArea = () => {
		setState({
			mapBoxGridIsDown: state.mapBoxGridIsDown ? false : true,
			mapBoxTitle: state.mapBoxTitle == "Ocultar" ? "Ver más" : "Ocultar",
		});

		moveTheElement();
	};

	const moveTheElement = () => {
		if (state.mapBoxGridIsDown) {
			let bottomUpdownButton = updownButton.getBoundingClientRect().bottom;
			let bottomMapBoxGrid = mapBoxGrid.getBoundingClientRect().bottom;
			let difference = bottomMapBoxGrid - bottomUpdownButton;

			mapBox.style.transform = `translateY(${difference}px)`;
			arrowIcon.style.transform = `rotate(180deg)`;
		} else {
			mapBox.style.transform = `translateY(0px)`;
			arrowIcon.style.transform = `rotate(0deg)`;
		}
	};

	return (
		<section className="select-point-on-map-box graphic">
			<div
				className="select-point-on-map-box__updown"
				onClick={getDownTheArea.bind(this)}
			>
				<span className="select-point-on-map-box__updowntext">
					{state.mapBoxTitle}
				</span>
				<img
					src={arrowup}
					alt=""
					className="select-point-on-map-box__updownicon"
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
					endpoint="/api/uci"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={covidbed}
					title="Camas COVID"
					name="covidbed"
					endpoint="/api/cama"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={oxigencharge}
					title="Balones de oxígeno"
					name="oxigen"
					endpoint="/api/o2"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={pharmacy}
					title="Farmacias"
					name="pharmacy"
					endpoint="/api/farmacia"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={minsahealthcenter}
					title="Centros de salud MINSA"
					name="minsa"
					endpoint="/api/institution?type=MINSA"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={essaludhealthcenter}
					title="Centros de salud Essalud"
					name="essalud"
					endpoint="/api/institution?type=ESSALUD"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={privatehealthcenter}
					title="Centros de salud privados"
					name="private"
					endpoint="/api/institution?type=PRIVADO"
					onClick={onPointClick}
				/>
				<SelectPointOnMap
					image={ffaapnphealthcenter}
					title="Centros de salud FF.AA. y la PNP"
					name="ffaa"
					endpoint="/api/institution?type=FUERZA_AEREA"
					onClick={onPointClick}
				/>
			</div>
		</section>
	);
};

export default SelectPointOnMapBox;
