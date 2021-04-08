import React from 'react';
import MembershipForm from '../Molecules/MembershipForm';
import RRSS from '../Molecules/RRSS';

const Footer = () => {
    return (
        <footer className="footer mx-auto container-fluid py-4">
            <div className="main-container">
                <div className="row align-items-end main-container mx-0">
                    <MembershipForm theme="col-12"/>
                    <p className="col-7 mb-0 pr-0">&copy; OpenCovid-Peru.com 2021</p>
                    <div className="rrss row px-0 col-5 d-flex flex-column align-items-center pt-3 pt-sm-0">
                        <p className="rrss__text mb-1">Síguenos en nuestras redes sociales</p>
                        <RRSS theme=""/>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;