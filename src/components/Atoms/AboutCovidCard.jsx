import React from 'react';
import {NavLink} from 'react-router-dom';

const AboutCovidCard = ({title, link, image}) => {
    return (
        <div className={`container-fluid col-lg-6 `}>
            <div className="mx-auto card-body py-2 aboutcovid-card row">
                <div className="aboutcovid-card__content col-lg-7">
                    <h4 className="aboutcovid-card__title">{title}</h4>
                    <NavLink to={link}>Ver más</NavLink>
                </div>
                <img src={image} alt={title} className="col-lg-5" height="150px"/>
            </div>
        </div>
    );
} 

export default AboutCovidCard;