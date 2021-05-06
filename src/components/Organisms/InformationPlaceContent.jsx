import React, { useState, useEffect, useRef } from 'react';
import ucibed from '../../img/icons/informationplacebox/ucibed.svg';
import covidbed from '../../img/icons/informationplacebox/covidbed.svg';
import pharmacy from '../../img/icons/informationplacebox/pharmacy.svg';
import minsahc from '../../img/icons/informationplacebox/minsahc.svg';
import essaludhc from '../../img/icons/informationplacebox/essaludhc.svg';
import privatehc from '../../img/icons/informationplacebox/privatehc.svg';
import faapnphc from '../../img/icons/informationplacebox/faapnphc.svg';
import oxygen from '../../img/icons/informationplacebox/oxygen.svg';
import InformationPlaceContentItem from '../Molecules/InformationPlaceContentItem';
import arrowleft from '../../img/icons/arrowleft.svg';
import arrowright from '../../img/icons/arrowright.svg';

const icons = {
    "Camas UCI": ucibed,
    "Camas COVID": covidbed,
    "Balones de oxígeno": oxygen,
    "Farmacias": pharmacy,
    "Centros de salud MINSA": minsahc,
    "Centros de salud Essalud": essaludhc,
    "Centros de salud privados": privatehc,
    "Centros de salud FF.AA. y la PNP": faapnphc,
}

const InformationPlaceContent = ({ title, data }) => {
    const informationPlaceContentList = useRef(null);
    
    const [state, setState] = useState({
        actualPage: 1,
        totalPage:  Math.ceil(data.length / 5),
    });
    
    useEffect(() => {
        setState({
            actualPage: 1,
            totalPage: Math.ceil(data.length / 5)
        })
    }, [data])

    const slideToLeft = () => {
        setState({
            actualPage: state.actualPage === 1 ?
                state.actualPage = state.totalPage :
                state.actualPage -= 1,
            totalPage: state.totalPage
        })
    }

    const slideToRight = () => {
        setState({
            actualPage: state.actualPage == state.totalPage ?
                state.actualPage = 1 :
                state.actualPage += 1,
            totalPage: state.totalPage
        })
    }

    return (
        <main className="information-place-box__section information-place-content">
            <span className="information-place-content__title graphic__title">{title}</span>
            <span className="information-place-content__available">{title.includes('Camas') ? 'Disponibles' : 'Distancia' }</span>
            <ul className="information-place-content__list" ref={informationPlaceContentList}>
                {
                    data.slice(state.actualPage * 5 - 5, state.actualPage * 5).map(item => (
                        <li className="information-place-content__item" key={item.id}>
                            <span title={item.name} className={`place-box-item--${title.replace(/ /g, "-").toLowerCase()}`}>{item.name.toLowerCase()}</span>
                            <span><img src={icons[title]} alt='icon'/>{title.includes('Camas') ? item.serv_uci_left : '2 km' }</span>
                        </li>
                    ))
                }

            </ul>
            <div className="information-place-content__pagination-container">
                <div className="information-place-content__pagination">
                    <img
                        src={arrowleft}
                        alt=""
                        className="information-place-content__pagination-left information-place-content__arrow"
                        onClick={slideToLeft.bind()} />
                    <span className="information-place-content__pagination-num-1">
                        {state.actualPage}
                    </span>
                        /
                    <span className="information-place-content__pagination-num-2">
                        {state.totalPage}
                    </span>
                    <img
                        src={arrowright}
                        alt=""
                        className="information-place-content__pagination-right information-place-content__arrow"
                        onClick={slideToRight.bind()} />
                </div>
            </div>
        </main>
    );
}

export default InformationPlaceContent;