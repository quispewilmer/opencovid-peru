import MapMarkerPopupUci from "../Atoms/MapMarkerPopupUci";
import MapMarkerPopupBed from "../Atoms/MapMarkerPopupBed";
import MapMarkerPopupO2 from "../Atoms/MapMarkerPopupO2";
import MapMarkerPopupPharm from "../Atoms/MapMarkerPopupPharm";
import MapMarkerPopupInstitution from "../Atoms/MapMarkerPopupInstitution";

const markerTypeByName = {
	ucibed: MapMarkerPopupUci,
	covidbed: MapMarkerPopupBed,
	oxigen: MapMarkerPopupO2,
	pharmacy: MapMarkerPopupPharm,
	minsa: MapMarkerPopupInstitution,
	essalud: MapMarkerPopupInstitution,
	private: MapMarkerPopupInstitution,
	ffaa: MapMarkerPopupInstitution,
};

const MapMarkerPopup = ({ markerData, nameType, color }) => {
	const ComponentPopup = markerTypeByName[nameType];

	return ComponentPopup ? (
		<ComponentPopup markerData={markerData} color={color} />
	) : (
		<div
			style={{
				maxWidth: "400px",
				minWidth: "200px",
			}}
		>
			<h6>Title</h6>
			<p>desc</p>
		</div>
	);
};

export default MapMarkerPopup;
