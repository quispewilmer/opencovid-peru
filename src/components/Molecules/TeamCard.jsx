import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../img/opencovid-logo.svg';

const TeamCard = ({photo, name, profession, description, linkedin, twitter, instagram}) => {
    return (
        <article className="team-card">
            <img src={photo} alt=""/>
            <div className="team-card__name">
                {name}
                <img src={logo} alt="" className="team-card__logo"/>
            </div>
            <div className="team-card__content">
                <p className="team-card__profession">
                    {profession}
                </p>
                <div style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    height: '100%'
                }}>
                    <p className="team-card__description">
                        {description}
                    </p>
                    <div className="team-card__rrss">
                        {linkedin != "" ? <a href={linkedin} className="team-card__social" target="_blank">Linkedin <span className="team-card__icon">↗</span></a> : ""}
                        {twitter != "" ? <a href={twitter} className="team-card__social" target="_blank">Twitter <span className="team-card__icon">↗</span></a> : ""}
                        {instagram != "" ? <a href={instagram} className="team-card__social" target="_blank">Instagram <span className="team-card__icon">↗</span></a> : ""}
                    </div>
                </div>
            </div>
        </article>
    )
}

export default TeamCard;