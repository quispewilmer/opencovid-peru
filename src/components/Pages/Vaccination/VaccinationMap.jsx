import React from 'react';
import ReactMapboxGl, { Marker } from 'react-mapbox-gl';
import axios from 'axios';


const VaccinationMap=()=>{

    const navStyle = {
        top: 72,
        left: 0,
        padding: '10px'
      };

    const Map = ReactMapboxGl({
        accessToken:
            'pk.eyJ1IjoicXVpc3Bld2lsbWVyIiwiYSI6ImNrbm8weG1sNzEzZ3cydm1vcWluczVoZHMifQ.51O5VoB0t1sOhThd743wZw'
    });

    const data=()=>{
        axios.get(`https://open-covid-2-api-6b3whmne6q-uk.a.run.app/api/vaccine`)
        .then(({ data }) => {
            return data;
        })
    }
    return(        
        <section className="w-100 section-vaccination-map">
                <div className="jafeth-filters">
                    {/* <FilterRegion text="Busca una región" theme="container"/>             */}
                </div>
                    {/* <Map
                            style="mapbox://styles/mapbox/streets-v9"
                            containerStyle={{
                                height: '500px',
                                width: '100%',
                            }}
                            center={[-75.4563193462673,-9.73541086388338]}
                            zoom={[4]}
                        >
                            
                            <Marker coordinates={[-75.4563193462673,-9.73541086388338]}>
                                    <div className="container bg-white">You are here</div>
                            </Marker>
                            
                    </Map> */}
                    <iframe id="inlineFrameExample" width="100%" frameborder="0" src="https://gis.minsa.gob.pe/gisvacunas" className="mapa_s">
                    </iframe>
        </section>
    )
}

export default VaccinationMap;