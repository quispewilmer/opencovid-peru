import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const GaugueVaccination=({total,avance,label})=>{
    return(
        <div className="w-100 text-center mt-3 mb-4">            
            <ReactSpeedometer
                forceRender={true}
                width={400}
                value={avance}    
                maxValue={total}            
                segments={2}
                needleColor={'#FA6142'}
                customSegmentStops={[0,avance,total]}
                segmentColors={['#01ABF6', '#99A8A2']}
                textColor="grey"
                maxSegmentLabels={0}
                currentValueText={`${label}%`}
                labelFontSize={'31px'}
                valueTextFontSize={'37px'}
                valueTextFontWeight={'500'}
                paddingHorizontal={17}
                paddingVertical={17}
            />
            <h3 className="text-center">% de la población vacunada</h3>
        </div>
    )
}

export default GaugueVaccination;