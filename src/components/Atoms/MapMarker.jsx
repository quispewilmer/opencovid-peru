const MapMarker = ({ icon }) => {
	return (
		<div className="map-marker">
			<div className="map-marker__holder"></div>
			<img src={icon} className="map-marker__icon" />
		</div>
	);
};

export default MapMarker;
