import React from 'react';
import MembershipForm from '../Molecules/MembershipForm';
import RRSS from '../Molecules/RRSS';

const Footer = () => {
    return (
        <footer class="footer container-fluid">
            <div>
                <MembershipForm />
                <p>&copy; OpenCovid-Peru.com 2021</p>
            </div>
            <div className="rrss">
                <p className="rrss__text">Síguenos en nuestras redes:</p>
                <RRSS />
            </div>
        </footer>
    )
}

export default Footer;