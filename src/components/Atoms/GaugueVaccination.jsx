import React from 'react';
import ReactSpeedometer from "react-d3-speedometer";

const GaugueVaccination=()=>{
    return(
        <div className="w-100">
            <ReactSpeedometer
                forceRender={true}
                width={380}
                height={250}
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
        </div>
    )
}

export default GaugueVaccination;