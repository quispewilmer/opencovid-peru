import React, { useState, useEffect } from 'react';
import GoogleMapReact from 'google-map-react';
import SelectPointOnMapBox from '../Molecules/SelectPointOnMapBox';
import SearchRegion from '../Molecules/SearchRegion';
import InformationPlaceBox from '../Organisms/InformationPlaceBox';

const AnyReactComponent = ({ text }) => <div>{text}</div>;

class EmergencyMap extends React.Component {

    static defaultProps = {
        center: {
          lat: 59.95,
          lng: 30.33
        },
        zoom: 11
    };
    
    render() {

        const containerStyle = {
            position: 'static',  
            width: '100%',
            height: '100%'
        }

        return (
            <section className="emergency-map-container">
                <div style={{ height: '100vh', width: '100%'}} className="emergency-map-container__map-container">
                    <GoogleMapReact
                    bootstrapURLKeys={{ key: "AIzaSyA0WvRYjJMt4RyfXhYbQTF7oPy5_suDoOA"}}
                    defaultCenter={this.props.center}
                    defaultZoom={this.props.zoom}
                    >
                    <AnyReactComponent
                        lat={59.955413}
                        lng={30.337844}
                        text="My Marker"
                    />
                    </GoogleMapReact>
                </div>
                <SearchRegion theme="emergency-map-container__search-region" text="Busca tu distrito"/>
                <InformationPlaceBox />
                <SelectPointOnMapBox theme="emergency-map-container__select-point-on-map-box"/>
            </section>
        );
    }
}

export default EmergencyMap;