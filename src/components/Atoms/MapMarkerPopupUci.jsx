const MapMarkerPopupUci = ({ markerData, color }) => {
	const { name, address, serv_uci_left } = markerData;

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
			<p className="map-marker-popup__p">
				<span className="map-marker-popup__span" style={colorStyle}>
					Uci disponibles:
				</span>{" "}
				{serv_uci_left}
			</p>
		</div>
	);
};

export default MapMarkerPopupUci;
