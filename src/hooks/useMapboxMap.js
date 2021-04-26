import React, { useEffect, useLayoutEffect, useRef, useState } from "react";
import ReactDOMServer from "react-dom/server";
import mapboxgl from "mapbox-gl/dist/mapbox-gl";
import MapMarker from "../components/Atoms/MapMarker";

mapboxgl.accessToken =
	"pk.eyJ1IjoicXVpc3Bld2lsbWVyIiwiYSI6ImNrbm8weG1sNzEzZ3cydm1vcWluczVoZHMifQ.51O5VoB0t1sOhThd743wZw";

const clearMarkers = (markersRef) => {
	markersRef.current.forEach((marker) => marker.remove());
	markersRef.current = [];
};

const printMarker = (itemData, name, mapRef, markersRef) => {
	const el = document.createElement("div");
	const htmlString = ReactDOMServer.renderToString(<MapMarker name={name} />);
	el.innerHTML = htmlString;

	const marker = new mapboxgl.Marker({
		element: el,
	})
		.setLngLat(itemData.location.coordinates)
		.setPopup(
			new mapboxgl.Popup({ offset: 25 }) // add popups
				.setHTML(
					`
					<h5>title</h5>
					<p>desc</p>
					`
				)
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
		if (markerData && markerData.length > 0) {
			clearMarkers(markersRef);
			markerData.forEach((item) => printMarker(item, name, mapRef, markersRef));
		}
	}, [markerData]);

	return mapContainerRef;
};

export default useMapboxMap;
