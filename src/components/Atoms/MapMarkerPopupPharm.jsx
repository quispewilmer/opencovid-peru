const MapMarkerPopupPharm = ({ markerData, color }) => {
	const { name, address, phone, paginaweb } = markerData;

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
			{phone !== "nan" && (
				<p className="map-marker-popup__p">
					<span className="map-marker-popup__span" style={colorStyle}>
						Teléfono:
					</span>{" "}
					{phone}
				</p>
			)}
			{paginaweb !== "nan" && (
				<p className="map-marker-popup__p">
					<span className="map-marker-popup__span" style={colorStyle}>
						Pagina web:
					</span>{" "}
					<a href={paginaweb} target="_blank">
						{paginaweb}
					</a>
				</p>
			)}
		</div>
	);
};

export default MapMarkerPopupPharm;
