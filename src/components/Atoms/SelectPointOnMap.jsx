import React from "react";

const SelectPointOnMap = ({
	image,
	title,
	name,
	endpoint,
	isSelected = false,
	getDownTheArea,
	onClick = () => {},
}) => {
	const handleClick = () => {
		getDownTheArea()
		onClick({ name, endpoint, title });
	};

	return (
		<button
			style={{
				all: "unset",
				border: isSelected && "2px solid black",
				borderRadius: isSelected && "4px",
				display: 'flex',
				alignItems: 'flex-start',
				justifyContent: 'center'
			}}
			onClick={handleClick}
		>
			<article className="select-point-on-map">
				<img src={image} alt={title} className="select-point-on-map__img" />
				<h2 className="select-point-on-map__title">{title}</h2>
			</article>
		</button>
	);
};
export default SelectPointOnMap;
