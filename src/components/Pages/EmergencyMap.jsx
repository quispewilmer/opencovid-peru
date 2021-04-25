import React, { useState, useEffect } from 'react';
import ReactMapboxGl, { Layer, Feature } from 'react-mapbox-gl';
// import 'mapbox-gl/dist/mapbox-gl.css';
import SelectPointOnMapBox from '../Molecules/SelectPointOnMapBox';
import SearchRegion from '../Molecules/SearchRegion';
import InformationPlaceBox from '../Templates/InformationPlaceBox';

class EmergencyMap extends React.Component {
    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };
    
    render() {
        
        const Map = ReactMapboxGl({
            accessToken:
                'pk.eyJ1IjoicXVpc3Bld2lsbWVyIiwiYSI6ImNrbm8weG1sNzEzZ3cydm1vcWluczVoZHMifQ.51O5VoB0t1sOhThd743wZw'
        });

        return (
            <section className="emergency-map-container">
                <Map
                    style="mapbox://styles/mapbox/streets-v9"
                    containerStyle={{
                        height: '100%',
                        width: '100%',
                        position: 'relative',
                        gridColumnStart: '1',
                        gridColumnEnd: '2',
                        gridRowStart: '1',
                        gridRowEnd: '4'
                    }}
                    >
                    <Layer type="symbol" id="marker" layout={{ 'icon-image': 'marker-15' }}>
                        <Feature coordinates={[-0.481747846041145, 51.3233379650232]} />
                    </Layer>
                </Map>
                <SearchRegion theme="emergency-map-container__search-region" text="Busca tu distrito"/>
                <InformationPlaceBox title="Balones de oxígeno"/>
                <SelectPointOnMapBox theme="emergency-map-container__select-point-on-map-box"/>
            </section>
        );
    }
}

export default EmergencyMap;