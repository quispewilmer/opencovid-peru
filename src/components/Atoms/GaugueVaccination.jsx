import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const GaugueVaccination=()=>{
    return(
        <div className="w-100 text-center mt-3 mb-4">            
            <ReactSpeedometer
                forceRender={true}
                width={400}
                value={4000}    
                maxValue={100000}            
                segments={2}
                needleColor={'#FA6142'}
                customSegmentStops={[0,4000,100000]}
                segmentColors={['#01ABF6', '#99A8A2']}
                textColor="grey"
                maxSegmentLabels={0}
                currentValueText="2%"
            />
            <button className="btn btn-vaccinate-state text-white">% de la población vacunada</button>
        </div>
    )
}

export default GaugueVaccination;