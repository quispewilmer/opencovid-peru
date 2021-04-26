import React from "react";

const SelectPointOnMap = ({
	image,
	title,
	name,
	endpoint,
	onClick = () => {},
}) => {
	const handleClick = () => {
		onClick({ name, endpoint });
	};

	return (
		<button style={{ all: "unset" }} onClick={handleClick}>
			<article className="select-point-on-map">
				<img src={image} alt={title} className="select-point-on-map__img" />
				<h2 className="select-point-on-map__title">{title}</h2>
			</article>
		</button>
	);
};

export default SelectPointOnMap;
