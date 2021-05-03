import React from 'react';
import pictureBlue from '../../img/vaccination/picture-blue.png';
import pictureGradient from '../../img/vaccination/picture-gradient.png';
import picture from '../../img/vaccination/picture.png';
import {Container,Row,Col} from 'react-bootstrap';

const SectionDoseVaccination=({data})=>{
    return(
        <Container>
            <div className="mt-5 desing-vaccinate-rows row">
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">                            
                        </div>
                        <div className="col-1">                            
                        </div>

                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="first-dose"></div>
                        </div>
                        <div className="col-1">                            
                        </div>
                        <div className="col-1">                            
                        </div>

                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-1">
                            <div className="dose-complete"></div>
                        </div>
                        <div className="col-2">                           
                            <span className="badge badge-dark mt-3">612 mill</span>     
                        </div>
                        {/* <div className="col-1 m-1 p-0"><img src={pictureGradient} alt="" className=""/></div>
                        <div className="col-1 m-1 p-0"><img src={pictureBlue} alt="" className=""/></div>
                        <div className="col-1 m-1 p-0">
                            <span className="badge badge-dark">612 mill</span>
                        </div>                         */}
                        <div className="col-lg-12 mt-4"></div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-lg-11">
                            <p className="pt-1">Sin vacunar ({`${(((data.poblacion-data.vacunados)/data.poblacion)*100)}%`})</p>
                        </div>

                        <div className="col-1">
                            <div className="first-dose"></div>
                        </div>
                        <div className="col-lg-11">
                            <p className="pt-1">Primera dosis ({`${((data.primeraDosis/data.poblacion)*100)}%`})</p>
                        </div>

                        <div className="col-1">
                            <div className="dose-complete"></div>
                        </div>
                        <div className="col-lg-11">
                            <p className="pt-1">Segunda dosis ({`${((data.segundaDosis/data.poblacion)*100)}%`})</p>
                        </div>

                    </div>
        </Container>
    )
}

export default SectionDoseVaccination;