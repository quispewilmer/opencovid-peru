import React, { useState, useMemo, useEffect, useRef } from "react";
import "mapbox-gl/dist/mapbox-gl.css";
import SelectPointOnMapBox from "../Molecules/SelectPointOnMapBox";
import InformationPlaceBox from "../Templates/InformationPlaceBox";
import useFetch from "../../hooks/useFetch";
import useMapboxMap from "../../hooks/useMapboxMap";
import SearchMapbox from "../Molecules/SearchMapbox";
import { useLocation } from "react-router";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import ReactDOMServer from "react-dom/server";
import MapMarker from "../Atoms/MapMarker";
import Marcador from '../../img/emergencymap/maps-and-flags (1).svg'
import SearchPlaces from "../Organisms/SearchPlaces";

const mapEndpoints = {
	ucibed: { endpoint: "/api/uci/near?", title: "Camas UCI" },
	covidbed: { endpoint: "/api/cama/near?", title: "Camas COVID" },
	oxigen: { endpoint: "/api/o2/near?", title: "Balones de oxígeno" },
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

const buildQueryString = object => new URLSearchParams(object).toString()

const limaCoordinates = {
	latitude: -12.0266034,
	longitude: -77.1278636
}

const addMarker = (coordinates, mapboxInstance) => {
	const el = document.createElement("div");
	const htmlString = ReactDOMServer.renderToString(
		<MapMarker icon={Marcador} />
	);
	el.innerHTML = htmlString;

	const popupstring = ReactDOMServer.renderToString(
		<div>
			Posición actual
		</div>
	);
	const marker = new mapboxgl.Marker({
		element: el,
	})
		.setLngLat(coordinates)
		.setPopup(
			new mapboxgl.Popup({ offset: 25 }) // add popups
				.setHTML(popupstring)
		)
		.addTo(mapboxInstance);
	return marker
};


const EmergencyMap = () => {
	const [hasOption, option] = useFromLinkOption();
	const [isMapBoxClicked, setMapBoxClicked] = useState(() => hasOption);
	const [referencePoint, setReferencePoint] = useState(limaCoordinates)
	const referenceMarker = useRef(null)
	const [radiusDistance, setRadiusDistance] = useState(1000)
	const [radiusDistanceLimit, setRadiusDistanceLimit] = useState(1000)
	const [distanceQueryString, setDistanceQueryString] = useState(buildQueryString({
		lat: referencePoint.latitude,
		lon: referencePoint.longitude,
		radio: radiusDistance * 1000
	}))
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
	const { loading, data, error } = useFetch(mapBoxState.endpoint + distanceQueryString);
	const { mapRef, mapboxInstance, searchDistrict } = useMapboxMap(data, mapBoxState.name);

	const filteredData = useMemo(() => {
		if (data) {
			return data.filter(({ serv_uci_left }) => serv_uci_left !== 0);
		}
		return [];
	}, [data]);

	useEffect(() => {
			if (navigator.geolocation) {
					navigator.geolocation.getCurrentPosition(position => {
						const { latitude, longitude } = position.coords;
						setReferencePoint({ latitude, longitude })
						const qs = buildQueryString({ lat: latitude, lon: longitude, radio: radiusDistance * 1000 })
						setDistanceQueryString(qs)
						mapboxInstance.current.flyTo({
							center: [longitude, latitude],
							zoom: 13,
						})
					})
			}
	}, [])

	useEffect(() => {
		if (mapboxInstance.current) {
			mapboxInstance.current.on('zoomend', function () {
				//const zoom = mapboxInstance.current.getZoom()
				//const newLimit = Math.round(Math.pow(1.9, (22 - zoom)) * 20 / 1000)
				//setRadiusDistance(currentRadius => currentRadius > newLimit ? newLimit : currentRadius)	
				//setRadiusDistanceLimit(newLimit)
				
			})
		}
	}, [])

	useEffect(() => {
		const qs = buildQueryString({ lat: referencePoint.latitude, lon: referencePoint.longitude, radio: radiusDistance * 1000 })
		//setDistanceQueryString(qs)
		//filteredData.splice(0,filteredData.length);
	}, [radiusDistance])

	useEffect(() => {
		if (mapboxInstance.current) {
			if (referenceMarker.current) referenceMarker.current.remove();
			referenceMarker.current = addMarker([referencePoint.longitude, referencePoint.latitude], mapboxInstance.current)
		}
	}, [referencePoint])

	const handlePointClicked = ({ endpoint, name, title }) => {
		setMapBoxClicked(true);
		setItemSelectedState(buildItemState(name));
		setMapBoxState({ endpoint, name, title });
	};

	const handleSubmit = (value) => {
		searchDistrict(value).then((response) => {
			if (response) {
				setReferencePoint({ latitude: response[1], longitude: response[0] })
				const qs = buildQueryString({ lat: response[1], lon: response[0], radio: radiusDistance * 1000 })
				setDistanceQueryString(qs)
			}
		});
	};

	const handlePlaceSelected = (center) => {
		mapboxInstance.current.flyTo({
			center,
			essential: true,	
			zoom: 13.5,
		})
	}

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
			<SearchPlaces onSubmit={handleSubmit} onPlaceSelected={handlePlaceSelected} />
			
			<SelectPointOnMapBox
				theme="emergency-map-container__select-point-on-map-box"
				onPointClick={handlePointClicked}
				itemSelectedState={itemSelectedState}
			/>
		</section>
	);
};

export default EmergencyMap;
