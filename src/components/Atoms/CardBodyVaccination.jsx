import React from 'react';
import GaugueVaccination from './GaugueVaccination';
import TextHighlights from './TextHighlightsVaccination';
import arrowLeft from '../../img/vaccination/arrow-left.png';
import firstLine from '../../img/vaccination/first-line.svg';
import groupSociety from '../../img/vaccination/group-society.png';
import stateVaccinate from '../../img/vaccination/state-vaccinate.png';
import SectionDoseVaccination from './SectionDoseVaccination';
import FilterRegion from '../Pages/Vaccination/FilterRegion';



const CardBodyVaccination=()=>{
    
    return (
        <div className="card-body">
            <div className="card-information p-3 mx-auto row">
                <div className="col-lg-12">
                    <TextHighlights 
                        sText="Hasta el momento hay "
                        highlight="612 061"
                        eText=" personas vacunadas*, ellos representan el 2% de la población total elegible para vacunarse"/>
                </div>
                <div className="col-lg-3">
                    <SectionDoseVaccination/>
                </div>
                <div className="col-lg-1">
                    <img src={arrowLeft} alt="" className="mt-5"/>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-success btn-fase">Fase I
                            </button>
                            <img src={firstLine} alt="" className="mx-auto mt-3"/>
                            <h3 className="m-0 text-success">xx</h3>
                            <h3>vacunados*</h3>
                            <span>Personal de salud, policías, bomberos y personas mayores de 65 años</span>
                        </div>
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-success btn-fase">Fase II
                            </button>
                            <img src={stateVaccinate} alt="" className="mx-auto mt-3"/>
                            <h3 className="text-success m-0">xx</h3>
                            <h3>vacunados*</h3>
                            <span>Por determinar*</span>
                        </div>
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-success btn-fase">Fase III
                            </button>
                            <img src={groupSociety} alt="" className="mx-auto mt-3"/>
                            <h3 className="m-0 text-success">xx</h3>
                            <h3>vacunados*</h3>
                            <span>Por determinar</span>
                        </div>
                        <div className="col-lg-12 text-center mt-4">
                            <button className="btn bg-light btn-search vaccinate">
                                ¿Cuando me toca vacunarme?
                            </button>
                        </div>
                        <div className="col-lg-12 mt-2 text-right">
                            <span>*Considerando solo la primera dosis</span>
                            <span>Fuente: MINSA 2021. Datos abiertos vacunación</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-information my-3 p-3 mx-auto row">
                <div className="col-lg-6 pt-5">
                    <h4>Estas vacunas se están aplicando a lo largo del territorio nacional, sin embargo se concentran principalmente en Lima</h4>
                    <div className="mt-5 mb-5">
                        <div className="jafeth-filters">
                            <FilterRegion text="Busca una región" theme="container"/>
                        </div>
                    </div>
                    <GaugueVaccination/>
                    <span>Fuente: Gobierno del Perú 2021. Coronavirus: vacunas contra la COVID-19 en el Perú</span>
                </div>
                <div className="col-lg-6">
                    <iframe id="inlineFrameExample" title="Inline Frame Example" width="100%" height="700" frameborder="0" src="https://gis.minsa.gob.pe/gisvacunas" class="mapa_s">
                    </iframe>
                </div>
            </div>
        </div>
    )
}

export default CardBodyVaccination;