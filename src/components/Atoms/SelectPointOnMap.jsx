import React from 'react';

const SelectPointOnMap = ({image, title, url, changeOption}) => {
    return (
        <article className="select-point-on-map" onClick={() => changeOption(title, url)}>
            <img src={image} alt={title} className="select-point-on-map__img"/>
            <h2 className="select-point-on-map__title">{title}</h2>
        </article>
    );
}

export default SelectPointOnMap;