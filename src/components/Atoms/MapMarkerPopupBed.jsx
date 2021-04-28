const MapMarkerPopupBed = ({ markerData, color }) => {
	const { name, address, serv_nc_left } = markerData;

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
					Camas disponibles:
				</span>{" "}
				{serv_nc_left}
			</p>
		</div>
	);
};

export default MapMarkerPopupBed;
