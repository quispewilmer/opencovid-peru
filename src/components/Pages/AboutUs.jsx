import React from 'react';
import HighRule from '../Atoms/HighRule';
import TeamCard from '../Molecules/TeamCard';
import members from './Team';
import oxigenoperu from '../../img/aboutus/oxigenoperu.png';
import team from '../../img/aboutus/team.svg';
import volunteers from './Volunteers';

const AboutUs = () => {
    document.title = "OpenCovid-Perú - Nosotros"
    return (
        <main className="about-us">
            <section className="the-team">
                <div className="main-container">
                    <h1 className="thanks__title main-title text-center font-weight-bold">Equipo</h1>
                    <HighRule />
                    <p className="the-team__description mt-4 mb-4">Somos un grupos de científicos e investigadores que se juntó en el contexto de la pandemia con el objetivo de aportar a la sociedad a través del análisis de datos de la COVID-19. Nuestra misión es facilitar el acceso a la información de la ciudadanía y poner a disposición nuestra asesoría al Perú.</p>
                    <div className="the-team__grid">
                        {members.map((member) =>
                            <TeamCard
                                key={member.key}
                                photo={member.photo}
                                name={member.name}
                                profession={member.profession}
                                description={member.description}
                                linkedin={member.linkedin}
                                twitter={member.twitter}
                                instagram={member.instagram}
                            />
                        )}
                    </div>
                </div>
            </section>
            <section className="thanks">
                <div className="main-container">
                    <h1 className="thanks__title main-title text-center font-weight-bold">Voluntarios</h1>
                    <HighRule />
                    <p className="thanks__description mt-4">Queremos extender nuestras más sinceros agradecimientos al grupo de desarrolladores voluntarios que se sumó en la etapa final del cambio de diseño; sin su participación, este proyecto no hubiera podido terminar de realizarse en tan corto tiempo. </p>
                    <p className="thanks__description mt-2">Lista de voluntatios:</p>
                    <ul className="thanks__list">
                        {volunteers.map(volunteer => (
                            <li className="thanks__item thanks__description" key={volunteer.key}>{volunteer.name}
                                <span style={{ marginLeft: 'auto' }}>
                                    {
                                        volunteer.github != "" ?
                                            <a href={volunteer.github} className="team-card__social" target="_blank">GitHub
                                                <span className="team-card__icon">↗</span>
                                            </a>
                                            :
                                            ""
                                    }
                                    {
                                        volunteer.twitter != "" ?
                                            <a href={volunteer.twitter} className="team-card__social" target="_blank">Twitter
                                                <span className="team-card__icon">↗</span>
                                            </a>
                                            :
                                            ""
                                    }
                                    {
                                        volunteer.instagram != "" ?
                                            <a href={volunteer.instagram} className="team-card__social" target="_blank">Instagram
                                                <span className="team-card__icon">↗</span>
                                            </a>
                                            :
                                            ""
                                    }
                                    {
                                        volunteer.linkedin != "" ?
                                            <a href={volunteer.linkedin} className="team-card__social" target="_blank">Linkedin
                                                <span className="team-card__icon">↗</span>
                                            </a>
                                            :
                                            ""
                                    }
                                </span>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className="contributions">
                <div className="main-container">
                    <h1 className="contributions__title main-title text-center font-weight-bold">Gracias por las contribuciones de: </h1>
                    <HighRule />
                    <div className="contributions__oxigeno-peru">
                        <img src={oxigenoperu} alt="Oxígeno Perú" />
                    </div>
                </div>
                <img src={team} alt="Colaboradores" className="contributions__persons" />
            </section>
        </main>
    )
}

export default AboutUs;