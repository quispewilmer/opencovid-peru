const MapMarkerPopupInstitution = ({ markerData, color }) => {
	const { name, address } = markerData;

	const colorStyle = { color };

	return (
		<div>
			<h6 className="map-marker-popup__h">{name}</h6>
			<p className="map-marker-popup__p">
				<span className="map-marker-popup__span" style={colorStyle}>
					Dirección:
				</span>{" "}
				{address}
			</p>
		</div>
	);
};

export default MapMarkerPopupInstitution;
