import React from 'react';
import {Container} from 'react-bootstrap';

const SectionDoseVaccination=({data})=>{

    const items=[];

    let start=1;
    let end=10;
    let percentage=0;

    let no_vaccine=Math.floor(((24070572-data.vacunados)/24070572)*100);
    let first_vaccine=((data.primeraDosis/24070572)*100).toFixed(2);
    let complete_vaccine=((data.segundaDosis/24070572)*100).toFixed(2);


    let diff_vaccine=Math.floor(first_vaccine-complete_vaccine);
    diff_vaccine+=no_vaccine;

    let vacunados=Intl.NumberFormat().format(data.vacunados).replace(/[,.]/g,' ');

    for (let index = 1; index <= 110; index++) {

        if(index>=start &&  index<=end){  
            percentage++;          
            items.push
            (
                <div className="col-1" key={index}>
                    <div className={percentage<=no_vaccine ?"missing-vaccinate":percentage<=diff_vaccine ?"first-dose":"dose-complete"}></div>
                </div>
            );
        }else{
            start+=11;
            end+=11;
            items.push(<div className="col-2" key={index}>{percentage==100? <span className="badge badge-dark mt-3">{vacunados}</span>:null}</div>);
        }
        
    }

    

    return(
        <Container>
            <div className="desing-vaccinate-rows row">
                        
                        {items}

                        <div className="col-lg-12 mt-4"></div>
                        <div className="col-1">
                            <div className="missing-vaccinate"></div>
                        </div>
                        <div className="col-lg-11">
                            <p className="pt-1">Sin vacunar ({`${no_vaccine}%`})</p>
                        </div>

                        <div className="col-1">
                            <div className="first-dose"></div>
                        </div>
                        <div className="col-lg-11">
                            <p className="pt-1">Primera dosis ({`${first_vaccine}%`})</p>
                        </div>

                        <div className="col-1">
                            <div className="dose-complete"></div>
                        </div>
                        <div className="col-lg-11">
                            <p className="pt-1">Segunda dosis ({`${complete_vaccine}%`})</p>
                        </div>

                    </div>
        </Container>
    )
}

export default SectionDoseVaccination;
