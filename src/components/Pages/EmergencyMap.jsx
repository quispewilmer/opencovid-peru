import React, { useState, useMemo } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import SelectPointOnMapBox from "../Molecules/SelectPointOnMapBox";
import InformationPlaceBox from "../Templates/InformationPlaceBox";
import useFetch from "../../hooks/useFetch";
import useMapboxMap from "../../hooks/useMapboxMap";
import SearchMapbox from "../Molecules/SearchMapbox";
import { useLocation } from "react-router";

const mapEndpoints = {
	ucibed: { endpoint: "/api/uci", title: "Camas UCI" },
	covidbed: { endpoint: "/api/cama", title: "Camas COVID" },
	oxigen: { endpoint: "/api/o2", title: "Balones de oxígeno" },
};

const buildItemState = (name) => [
	name === "ucibed",
	name === "covidbed",
	name === "oxigen",
	name === "pharmacy",
	name === "minsa",
	name === "essalud",
	name === "private",
	name === "ffaa",
];

const useFromLinkOption = () => {
	const { state } = useLocation();
	if (state) {
		return [true, state.fromOption];
	}

	return [false, undefined];
};

const EmergencyMap = () => {
	const [hasOption, option] = useFromLinkOption();
	const [isMapBoxClicked, setMapBoxClicked] = useState(() => hasOption);
	const [itemSelectedState, setItemSelectedState] = useState(() => {
		return hasOption
			? buildItemState(option)
			: [false, false, false, false, false, false, false, false];
	});
	const [mapBoxState, setMapBoxState] = useState(() => {
		if (hasOption) {
			return {
				endpoint: mapEndpoints[option].endpoint,
				name: option,
				title: mapEndpoints[option].title,
			};
		}
		return {
			endpoint: undefined,
			name: undefined,
			title: undefined,
		};
	});
	const { loading, data, error } = useFetch(mapBoxState.endpoint);
	const { mapRef, searchDistrict } = useMapboxMap(data, mapBoxState.name);

	const filteredData = useMemo(() => {
		if (data) {
			return data.filter(({ serv_uci_left }) => serv_uci_left !== 0);
		}
		return [];
	}, [data]);

	const handlePointClicked = ({ endpoint, name, title }) => {
		setMapBoxClicked(true);
		setItemSelectedState(buildItemState(name));
		setMapBoxState({ endpoint, name, title });
	};

	const handleSubmit = (value) => {
		searchDistrict(value);
	};

	return (
		<section className="emergency-map-container">
			<div
				ref={mapRef}
				id="map-emergency"
				className="emergency-map-container__map-container"
			></div>
			{isMapBoxClicked || (
				<div className="emergency-map-container__map-block"></div>
			)}
			<SearchMapbox
				theme="emergency-map-container__search-region"
				text="Busca tu distrito"
				onSubmit={handleSubmit}
			/>
			{isMapBoxClicked && filteredData.length > 0 && (
				<InformationPlaceBox title={mapBoxState.title} data={filteredData} />
			)}
			<SelectPointOnMapBox
				theme="emergency-map-container__select-point-on-map-box"
				onPointClick={handlePointClicked}
				itemSelectedState={itemSelectedState}
			/>
		</section>
	);
};

export default EmergencyMap;
