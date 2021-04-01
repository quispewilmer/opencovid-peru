import React from 'react';
import Button from '../Atoms/Button';

const Banner = () => {
    return (
        <>
            <div className="banner">
                <h1>Quédate en casa, infórmate y salva vidas</h1>
                <Button
                    text="Quiero informarme"
                    theme="button--white-red"
                    link="/estado-pandemia" />
                <Button
                    text="Tengo una emergencia"
                    theme="button--red"
                    link="/mapa-recursos"/>
            </div>
        </>
    )
}

export default Banner;