import React from 'react';
import Button from '../Atoms/Button';

const Banner = () => {
    return (
        <>
            <div className="banner container-fluid pt-4">
                <h1 className="font-weight-bold mb-3">Quédate en casa, <br />infórmate y <br /> salva vidas</h1>
                <div className="d-flex align-items-center">
                    <Button
                        text="Quiero informarme"
                        theme="button--white-red"
                        link="/estado-pandemia" />
                    <Button
                        text="Tengo una emergencia"
                        theme="button--red"
                        link="/mapa-recursos"/>
                </div>
            </div>
        </>
    )
}

export default Banner;