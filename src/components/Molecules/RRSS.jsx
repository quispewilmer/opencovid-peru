import React from 'react';
import facebook from '../../img/rrss/facebook-icon.svg';
import twitter from '../../img/rrss/twitter-icon.svg';
import linkedin from '../../img/rrss/linkedin-icon.svg';
import instagram from '../../img/rrss/instagram-icon.svg';

const RRSS = ({theme}) => {
    return (
        <div className={`rrss ${theme}`}>
            <a href="https://www.facebook.com/OpenCovidPeru/">
                <img src={facebook} alt="open-covid-facebook"/>
            </a>
            <a href="https://twitter.com/opencovidperu">
                <img src={twitter} alt="open-covid-twitter"/>   
            </a>
            <a href="https://www.linkedin.com/company/opencovid-peru/">
                <img src={linkedin} alt="open-covid-linkedin"/>   
            </a>
            <a href="https://www.instagram.com/opencovidperu/">
                <img src={instagram} alt="open-covid-instagram"/>   
            </a>
        </div>
    )
}

export default RRSS;