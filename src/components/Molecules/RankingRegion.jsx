import React, { Fragment } from 'react';

const RankingRegional = ({ type }) => {
    return (
        <>
            <section className={`graphic-container graphic ranking-graphic ranking-graphic--${type}`}>
                <h1 className="graphic__title ranking-graphic__title">Ranking de impacto del COVID 19 por regiones</h1>
                <div className={`ranking-region-list ranking-region-list--${type}`}>
                    <ul className="ranking-region-list__list">
                        <li className="ranking-region-list__item">1. <span className="ranking-region-list__dot"></span> Lima Región</li>
                        <li className="ranking-region-list__item">2. <span className="ranking-region-list__dot"></span> Arequipa</li>
                        <li className="ranking-region-list__item">3. <span className="ranking-region-list__dot"></span> Junín</li>
                        <li className="ranking-region-list__item">4. <span className="ranking-region-list__dot"></span> Loreto</li>
                        <li className="ranking-region-list__item">5. <span className="ranking-region-list__dot"></span> Ancash</li>
                        <li className="ranking-region-list__item">6. <span className="ranking-region-list__dot"></span> Cusco</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                        <li className="ranking-region-list__item">7. <span className="ranking-region-list__dot"></span> Ucayali</li>
                    </ul>
                </div>
            </section>
        </>
    )
}

export default RankingRegional