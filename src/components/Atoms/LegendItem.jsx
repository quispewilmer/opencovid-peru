import React from 'react';

const LegendItem = ({legendClass, legendDescription}) => {
    return (
        <li className="legend__item"><span className={`${legendClass} legend__level`}></span>{legendDescription}</li>
    );  
}

export default LegendItem;