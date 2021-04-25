import React from 'react';
import TextHighlights from './TextHighlightsVaccination';

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
                <div className="col-lg-3"></div>
                <div className="col-lg-1"></div>
                <div className="col-lg-8">
                    <div className="row">
                        <div className="col-lg-4"><button className="btn form-control btn-success btn-fase">Fase</button></div>
                        <div className="col-lg-4"><button className="btn form-control btn-success btn-fase">Fase</button></div>
                        <div className="col-lg-4"><button className="btn form-control btn-success btn-fase">Fase</button></div>
                        <div className="col-lg-12 text-center mt-4">
                            <button className="btn bg-light btn-search vaccinate">¿Cuando me toca vacunarme?</button>
                        </div>
                    </div>
                </div>
            </div>

            <div className="card-information my-3 p-3 mx-auto row">
                <div className="col-lg-6">
                    <h4>Estas vacunas se están aplicando a lo largo del territorio nacional, sin embargo se concentran principalmente en Lima</h4>
                </div>
                <div className="col-lg-6"></div>
            </div>
        </div>
    )
}

export default CardBodyVaccination;