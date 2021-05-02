import React from 'react';
import TextHighlights from './TextHighlightsVaccination';

const CardTop=({theme,isTopTextHighlights,isTopLeftTextHighlights,sText,highlight,eText,textLeftTop,textLeft,text_footer,src_image,image_style,lsVaccination})=>{
    return (
        <div className={`${theme} card-body`}>
            <div className="card-information card-body">
                {/* Esto se ejecutara condicionalmente de acuerdo a si existe algun tipo de dato */}
                {isTopTextHighlights ? 
                    <TextHighlights 
                    sText={sText}
                    highlight={highlight}
                    eText={eText}/>:null}

            

                <div className="row">
                    <div className="col-lg-7">
                        <img src={src_image} className={`${image_style}`} alt=""/>
                    </div>
                    <div className="col-lg-5">
                        {isTopLeftTextHighlights? 
                        <TextHighlights 
                        sText={sText}
                        highlight={highlight}
                        eText={eText}/>:null}

                        {textLeft!=null && textLeft!=""? <h4 className="mt-4">{textLeft}</h4>:null}
                    </div>
                </div>
                <span>{text_footer}</span>   
            </div>
        </div>
    )
}

export default CardTop;