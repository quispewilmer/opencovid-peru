import React from 'react';
import ucibed from '../../img/icons/ucibed.svg';
import InformationPlaceContentItem from '../Molecules/InformationPlaceContentItem';
import arrowleft from '../../img/icons/arrowleft.svg';
import arrowright from '../../img/icons/arrowright.svg';

const InformationPlaceContent = ({title}) => {
    return (
        <main className="information-place-box__section information-place-content">
            <span className="information-place-content__title graphic__title">{title}</span>
            <span className="information-place-content__available">Disponibilidad</span>
            <ul className="information-place-content__list">
                <li className="information-place-content__item">
                    <span>Hospital Naval</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval1</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval2</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval3</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval4</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval5</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval</span>
                    <span><img src={ucibed} />29</span>
                </li>
                <li className="information-place-content__item">
                    <span>Hospital Naval</span>
                    <span><img src={ucibed} />29</span>
                </li>
                
            </ul>
            <div className="information-place-content__pagination-container">
                <div className="information-place-content__pagination">
                    <img src={arrowleft} alt="" className="information-place-content__pagination-left information-place-content__arrow" />
                    <span className="information-place-content__pagination-num-1">
                        1
                    </span>
                        /
                    <span className="information-place-content__pagination-num-2">
                        2
                    </span>
                    <img src={arrowright} alt="" className="information-place-content__pagination-right information-place-content__arrow" />
                </div>
            </div>
        </main>
    );
}

export default InformationPlaceContent;