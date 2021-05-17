import React from 'react';
import TypeDoses from '../Pages/Vaccination/TypeDoses';
import TextHighlights from './TextHighlightsVaccination';



const CardTop=({theme,isTopTextHighlights,isTopLeftTextHighlights,sText,highlight,eText,textLeft,text_footer,src_image,image_style,dataTypeDoses})=>{
    return (
        <div className={`${theme} card-body`} >
            <div className="card-information card-body">
                {/* Esto se ejecutara condicionalmente de acuerdo a si existe algun tipo de dato */}
                {isTopTextHighlights ? 
                    <TextHighlights 
                    sText={sText}
                    highlight={highlight}
                    eText={eText}/>:null}

            

                <div className="row" >
                    <div className="col-lg-7">
                        <img src={src_image} className={`${image_style}`} alt=""/>
                    </div>
                    <div className="col-lg-5">
                        {isTopLeftTextHighlights? 
                        <TextHighlights 
                        sText={sText}
                        highlight={highlight}
                        eText={eText}/>:null}

                        {textLeft!=null ? <h4 className={`${isTopTextHighlights? "mt-5":""} text-left-card`}>{textLeft}</h4>:null}

                        {dataTypeDoses!=null? <TypeDoses data={dataTypeDoses}/>:null}
                    </div>
                </div>
                <span>{text_footer}</span>   
            </div>
        </div>
    )
}

export default CardTop;
