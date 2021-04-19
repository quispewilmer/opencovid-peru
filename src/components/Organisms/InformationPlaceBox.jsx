import React from 'react';

const InformationPlaceBox = () => { 
    return (
        <section className="information-place-box">
            <header className="information-place-box__section information-place-header">
                <span className="information-place-header__title">Kilómetros de distancia</span>
                <input type="range" />
            </header>
            <main className="information-place-box__section information-place-content">
                <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                }}>
                    <span className="information-place-content__title graphic__title">Balones de oxígeno</span>
                    <span>filtro</span>
                </div>
            </main>
        </section>
    );
}

export default InformationPlaceBox;