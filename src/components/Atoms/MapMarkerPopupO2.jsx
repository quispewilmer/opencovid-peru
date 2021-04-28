const availability = (flag) => (flag ? "Disponible" : "No disponible");

const MapMarkerPopupO2 = ({ markerData, color }) => {
	const {
		name,
		address,
		phone,
		venta,
		recarga,
		alquiler,
		paginaweb,
	} = markerData;

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
			<p className="map-marker-popup__p">
				<span className="map-marker-popup__span" style={colorStyle}>
					Venta:
				</span>{" "}
				{availability(venta)}
			</p>
			<p className="map-marker-popup__p">
				<span className="map-marker-popup__span" style={colorStyle}>
					Recarga:
				</span>{" "}
				{availability(recarga)}
			</p>
			<p className="map-marker-popup__p">
				<span className="map-marker-popup__span" style={colorStyle}>
					Alquiler:
				</span>{" "}
				{availability(alquiler)}
			</p>
			<p className="map-marker-popup__p">
				<span className="map-marker-popup__span" style={colorStyle}>
					Recarga:
				</span>{" "}
				{availability(recarga)}
			</p>
		</div>
	);
};

export default MapMarkerPopupO2;
