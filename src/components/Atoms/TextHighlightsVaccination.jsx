import React from 'react';

const TextHighlights=({sText,highlight,eText})=>{
    return (
        <h4>{sText} <b className={`text-success`}>{highlight}</b> {eText}</h4>
    )
}

export default TextHighlights;