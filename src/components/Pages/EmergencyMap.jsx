import React, { useEffect, useState } from "react";
import SelectPointOnMapBox from "../Molecules/SelectPointOnMapBox";
import SearchRegion from "../Molecules/SearchRegion";
import InformationPlaceBox from "../Templates/InformationPlaceBox";
import useMapboxMap from "../../hooks/useMapboxMap";
import "mapbox-gl/dist/mapbox-gl.css";
import useFetch from "../../hooks/useFetch";
import SearchRegion2 from "../Molecules/SearchRegion2";
import useSearchMapDistrict from "../../hooks/useSearchMapDistrict";

const EmergencyMap = () => {
	const [isMapBoxClicked, setMapBoxClicked] = useState(false);
	const [mapBoxState, setMapBoxState] = useState({
		endpoint: undefined,
		name: undefined,
	});
	const { loading, data, error } = useFetch(mapBoxState.endpoint);
	const { mapRef, searchDistrict } = useMapboxMap(data, mapBoxState.name);

	const handlePointClicked = ({ endpoint, name }) => {
		setMapBoxClicked(true);
		setMapBoxState({ endpoint, name });
	};

	const handleSubmit = (value) => {
		searchDistrict(value);
	};

	return (
		<section className="emergency-map-container">
			<div
				ref={mapRef}
				id="map"
				className="emergency-map-container__map-container"
			></div>
			{isMapBoxClicked || (
				<div className="emergency-map-container__map-block"></div>
			)}
			<SearchRegion2
				theme="emergency-map-container__search-region"
				text="Busca tu distrito"
				onSubmit={handleSubmit}
			/>
			{isMapBoxClicked && <InformationPlaceBox title="Balones de oxígeno" />}
			<SelectPointOnMapBox
				theme="emergency-map-container__select-point-on-map-box"
				onPointClick={handlePointClicked}
			/>
		</section>
	);
};

export default EmergencyMap;
