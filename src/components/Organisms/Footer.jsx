import React from 'react';
import MembershipForm from '../Molecules/MembershipForm';
import RRSS from '../Molecules/RRSS';

const Footer = () => {
    return (
        <footer className="footer mx-auto py-4">
            <div className="main-container">
                <div className="footer__grid"/*"row align-items-end mx-0"*/>
                    <MembershipForm theme="col-12 footer__form"/>
                    <p className="mb-0 mt-3 pr-0 footer__copyright col-12">&copy; OpenCovid-Peru.com 2021</p>
                    <div className="rrss flex-column align-items-center pt-3 pt-sm-0">
                        <p className="rrss__text mb-1">Síguenos</p>
                        <RRSS theme=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;