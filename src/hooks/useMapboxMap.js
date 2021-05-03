import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapMarker from "../components/Atoms/MapMarker";
import MapMarkerPopup from "../components/Molecules/MapMarkerPopup";

import CovidBedIcon from "../img/emergencymap/covidbed.svg";
import EssaludIcon from "../img/emergencymap/essaludhealthcenter.svg";
import FfaaIcon from "../img/emergencymap/ffaapnphealthcenter.svg";
import MinsaIcon from "../img/emergencymap/minsahealthcenter.svg";
import OxigenIcon from "../img/emergencymap/oxigencharge.svg";
import PharmacyIcon from "../img/emergencymap/pharmacy.svg";
import PrivateIcon from "../img/emergencymap/privatehealthcenter.svg";
import UciBedIcon from "../img/emergencymap/ucibed.svg";
import useSearchMapDistrict from "./useSearchMapDistrict";

mapboxgl.accessToken =
	"pk.eyJ1IjoicXVpc3Bld2lsbWVyIiwiYSI6ImNrbm8weG1sNzEzZ3cydm1vcWluczVoZHMifQ.51O5VoB0t1sOhThd743wZw";

const typeMap = {
	ucibed: {
		icon: UciBedIcon,
		color: "#FF0600",
	},
	covidbed: {
		icon: CovidBedIcon,
		color: "#0019BF",
	},
	oxigen: {
		icon: OxigenIcon,
		color: "#00BFA6",
	},
	pharmacy: {
		icon: PharmacyIcon,
		color: "#FE5B00",
	},
	minsa: {
		icon: MinsaIcon,
		color: "#204E72",
	},
	essalud: {
		icon: EssaludIcon,
		color: "#006C09",
	},
	private: {
		icon: PrivateIcon,
		color: "#01ABF6",
	},
	ffaa: {
		icon: FfaaIcon,
		color: "#8200B2",
	},
};

const clearMarkers = (markersRef) => {
	markersRef.current.forEach((marker) => marker.remove());
	markersRef.current = [];
};

const printMarker = (itemData, name, mapRef, markersRef) => {
	const el = document.createElement("div");
	const htmlString = ReactDOMServer.renderToString(
		<MapMarker icon={typeMap[name].icon} />
	);
	el.innerHTML = htmlString;

	const popupstring = ReactDOMServer.renderToString(
		<MapMarkerPopup
			markerData={itemData}
			nameType={name}
			color={typeMap[name].color}
		/>
	);
	const marker = new mapboxgl.Marker({
		element: el,
	})
		.setLngLat(itemData.location.coordinates)
		.setPopup(
			new mapboxgl.Popup({ offset: 25 }) // add popups
				.setHTML(popupstring)
		)
		.addTo(mapRef.current);

	markersRef.current = [...markersRef.current, marker];
};

const useMapboxMap = (markerData, name) => {
	const mapContainerRef = useRef();
	const mapRef = useRef();
	const markersRef = useRef([]);
	const [{ lng, lat, zoom }, setState] = useState({
		lng: -74.002568,
		lat: -12.11,
		zoom: 5,
	});

	useLayoutEffect(() => {
		const map = new mapboxgl.Map({
			container: mapContainerRef.current,
			style: "mapbox://styles/mapbox/streets-v9",
			center: [lng, lat],
			zoom: zoom,
		});

		mapRef.current = map;

		return () => map.remove();
	}, []);

	useEffect(() => {
		if (markerData) {
			clearMarkers(markersRef);
			markerData.forEach((item) => printMarker(item, name, mapRef, markersRef));
		}
	}, [markerData]);

	const searchDistrict = useSearchMapDistrict(mapRef);

	return { mapRef: mapContainerRef, searchDistrict };
};

export default useMapboxMap;
