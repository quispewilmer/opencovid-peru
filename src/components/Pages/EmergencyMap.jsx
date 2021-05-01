import React, { useState, useMemo } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import SelectPointOnMapBox from "../Molecules/SelectPointOnMapBox";
import SearchRegion from "../Molecules/SearchRegion";
import InformationPlaceBox from "../Templates/InformationPlaceBox";
import useFetch from "../../hooks/useFetch";
import useMapboxMap from "../../hooks/useMapboxMap";

const EmergencyMap = () => {
	const [isMapBoxClicked, setMapBoxClicked] = useState(false);
	const [mapBoxState, setMapBoxState] = useState({
		endpoint: undefined,
		name: undefined,
		title: undefined,
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
		setMapBoxState({ endpoint, name, title });
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
			<SearchRegion
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
			/>
		</section>
	);
};

export default EmergencyMap;
