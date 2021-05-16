import React from 'react';
import GaugueVaccination from './GaugueVaccination';
import TextHighlights from './TextHighlightsVaccination';
import arrowLeft from '../../img/vaccination/arrow-left.png';
import firstLine from '../../img/vaccination/first-line.svg';
import groupSociety from '../../img/vaccination/group-society.png';
import stateVaccinate from '../../img/vaccination/state-vaccinate.png';
import SectionDoseVaccination from './SectionDoseVaccination';
import VaccinationMap from '../Pages/Vaccination/VaccinationMap';



const CardBodyVaccination=({data})=>{

    
    return (
        <div className="card-body">
            <div className="card-information mx-auto row">
                <div className="col-lg-12">
                    <TextHighlights 
                        sText="Hasta el momento hay "
                        highlight={Intl.NumberFormat().format(data.vacunados).replace(/[,.]/g,' ')}
                        eText={`personas vacunadas*, ellos representan el ${data.vaccProgress}% de la población total elegible para vacunarse`}/>
                </div>
                <div className="col-lg-4">
                    <SectionDoseVaccination data={data}/>
                </div>
                <div className="col-lg-1 d-mobile-none put-shoulder-mt5">
                    <img src={arrowLeft} alt="" className="mt-5"/>
                </div>
                <div className="col-lg-7">
                    <div className="put-shoulder-mt5 row">
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-fase">Fase I
                            </button>
                            <img src={firstLine} alt="" className="mx-auto mt-3"/>
                            <h3 className="mt-2 mx-0 text-success">{Intl.NumberFormat().format(data.vacunados).replace(/[,.]/g,' ')}</h3>
                            <h3>vacunados*</h3>
                            <span>Personal de salud, policías, bomberos y personas mayores de 65 años</span>
                        </div>
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-fase">Fase II
                            </button>
                            <img src={stateVaccinate} alt="" className="mx-auto mt-3"/>
                            <h3 className="mt-2 mx-0 text-success">xx</h3>
                            <h3>vacunados*</h3>
                            <span>Por determinar*</span>
                        </div>
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control  btn-fase">Fase III
                            </button>
                            <img src={groupSociety} alt="" className="mx-auto mt-3"/>
                            <h3 className="mt-2 mx-0 text-success">xx</h3>
                            <h3>vacunados*</h3>
                            <span>Por determinar</span>
                        </div>
                        <div className="col-lg-12 text-center mt-4">
                            <a className="btn-vaccinate" href="https://consultas.pongoelhombro.gob.pe/#/" target="_blank">
                                ¿Cuando me toca vacunarme?
                            </a>
                        </div>
                        <div className="col-lg-12 mt-2 text-right">
                            <span>*Considerando solo la primera dosis</span>
                            <span>Fuente: MINSA 2021. Datos abiertos vacunación</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-information my-3 p-3 mx-auto row d-none">
                <div className="col-lg-5 pt-5">
                    <h4>Estas vacunas se están aplicando a lo largo del territorio nacional, sin embargo se concentran principalmente en Lima</h4>                    
                    <GaugueVaccination total={data.poblacion} avance={data.vacunados} label={data.vaccProgress}/>
                    <span>Fuente: Gobierno del Perú 2021. Coronavirus: vacunas contra la COVID-19 en el Perú</span>
                </div>
                <div className="col-lg-7">
                    <VaccinationMap/>
                </div>
            </div>
        </div>
    )
}

export default CardBodyVaccination;
