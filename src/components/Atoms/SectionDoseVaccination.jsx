import React from 'react';
import pictureBlue from '../../img/vaccination/picture-blue.png';
import pictureGradient from '../../img/vaccination/picture-gradient.png';
import picture from '../../img/vaccination/picture.png';
import {Container,Row,Col} from 'react-bootstrap';

const SectionDoseVaccination=()=>{
    return(
        <Container>
            <div className="mt-5 row">
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>                                
                        <div className="col-1 m-1 p-0"></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>                                
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>                                
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"></div>                                
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>                        
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>                                
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"></div>    
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={picture} alt="" className="w-100"/></div>
                        <div className="col-1 m-1 p-0"><img src={pictureGradient} alt="" className=""/></div>
                        <div className="col-1 m-1 p-0"><img src={pictureBlue} alt="" className=""/></div>
                        <div className="col-1 m-1 p-0">
                            <span className="badge badge-dark">612 mill</span>
                        </div>                        
                        <div className="col-lg-12 mt-4"></div>
                        <div className="col-lg-2">
                            <img src={picture} alt="" className="w-100"/>
                        </div>
                        <div className="col-lg-10">
                            <p>Sin vacunar (%)</p>
                        </div>

                        <div className="col-lg-2">
                            <img src={pictureGradient} alt="" className="w-100"/>
                        </div>
                        <div className="col-lg-10">
                            <p>Primera dosis (%)</p>
                        </div>

                        <div className="col-lg-2">
                            <img src={pictureBlue} alt="" className="w-100"/>
                        </div>
                        <div className="col-lg-10">
                            <p>Segunda dosis (%)</p>
                        </div>

                    </div>
        </Container>
    )
}

export default SectionDoseVaccination;