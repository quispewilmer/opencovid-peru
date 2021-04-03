import React from 'react';
import {NavLink} from 'react-router-dom';

const AboutCovidCard = ({theme, title, link, image}) => {
    return (
        <div className={`container-fluid aboutcovid-card mb-3 ${theme}`}>
            <div className="px-2 row d-flex align-items-center py-2">
                <div className="aboutcovid-card__content col-7 col-lg-8">
                    <h2 className="aboutcovid-card__title">{title}</h2>
                    <NavLink to={link} className="aboutcovid-card__link">Ver más</NavLink>
                </div>
                <img src={image} alt={title} className="col-5 col-lg-4 aboutcovid-card__image"/>
            </div>
        </div>
    );
} 

export default AboutCovidCard;
