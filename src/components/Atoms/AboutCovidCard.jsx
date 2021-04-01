import React from 'react';
import {NavLink} from 'react-router-dom';

const AboutCovidCard = ({title, link, image}) => {
    return (
        <div className="aboutcovid-card">
            <div className="aboutcovid-card__content">
                <h2 className="aboutcovid-card__title">{title}</h2>
                <NavLink to={link}>Ver más</NavLink>
            </div>
            <img src={image} alt={title}/>
        </div>
    );
} 

export default AboutCovidCard;