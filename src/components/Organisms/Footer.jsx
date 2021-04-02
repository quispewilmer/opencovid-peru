import React from 'react';
import MembershipForm from '../Molecules/MembershipForm';
import RRSS from '../Molecules/RRSS';

const Footer = () => {
    return (
        <footer class="footer mx-auto container-fluid py-4">
            <div className="row align-items-end">
                <MembershipForm theme="col-12"/>
                <p className="col-7 mb-0 pr-0">&copy; OpenCovid-Peru.com 2021</p>
                <div className="rrss row px-0 col-5 d-flex flex-column align-items-center pt-3">
                    <p className="rrss__text mb-1">Síguenos</p>
                    <RRSS theme=""/>
                </div>
            </div>
        </footer>
    )
}

export default Footer;