import React from 'react';
import GaugueVaccination from './GaugueVaccination';
import TextHighlights from './TextHighlightsVaccination';
import pictureBlue from '../../img/vaccination/picture-blue.png';
import pictureGradient from '../../img/vaccination/picture-blue.png';
import picture from '../../img/vaccination/picture.png';
import arrowLeft from '../../img/vaccination/arrow-left.png';
import groupSociety from '../../img/vaccination/group-society.png';

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
                    <div className="row">
                        <div className="col-lg-2">
                            <img src={picture} alt=""/>
                        </div>
                        <div className="col-lg-10">
                            <p>Sin vacunar (%)</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <img src={pictureGradient} alt=""/>
                        </div>
                        <div className="col-lg-10">
                            <p>Primera dosis (%)</p>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-lg-2">
                            <img src={pictureBlue} alt=""/>
                        </div>
                        <div className="col-lg-10">
                            <p>Segunda dosis (%)</p>
                        </div>
                    </div>
                    
                    
                </div>
                <div className="col-lg-1">
                    <img src={arrowLeft} alt="" className="mt-5"/>
                </div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-success btn-fase">Fase I
                            </button>
                            <img src={groupSociety} alt="" className="mx-auto mt-3"/>
                            <h3 className="text-success">xx</h3>
                            <h3>vacunados*</h3>
                            <span>Personal de salud, policías, bomberos y personas mayores de 65 años</span>
                        </div>
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-success btn-fase">Fase II
                            </button>
                            <img src={groupSociety} alt="" className="mx-auto mt-3"/>
                            <h3 className="text-success">xx</h3>
                            <h3>vacunados*</h3>
                            <span>Por determinar</span>
                        </div>
                        <div className="col-lg-4 text-center">
                            <button className="btn form-control btn-success btn-fase">Fase III
                            </button>
                            <img src={groupSociety} alt="" className="mx-auto mt-3"/>
                            <h3 className="text-success">xx</h3>
                            <h3>vacunados*</h3>
                            <span></span>
                        </div>
                        <div className="col-lg-12 text-center mt-4">
                            <button className="btn bg-light btn-search vaccinate">
                                ¿Cuando me toca vacunarme?
                            </button>
                        </div>
                        <div className="col-lg-12 text-right">
                            <span>*Considerando solo la primera dosis</span>
                            <span>Fuente: MINSA 2021. Datos abiertos vacunación</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-information my-3 p-3 mx-auto row">
                <div className="col-lg-6">
                    <h4>Estas vacunas se están aplicando a lo largo del territorio nacional, sin embargo se concentran principalmente en Lima</h4>
                    <GaugueVaccination/>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    )
}

export default CardBodyVaccination;
