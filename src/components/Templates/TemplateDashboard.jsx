import React, {useState} from 'react';

const TemplateDashboard = ({ type, children }) => {

    return (
        type == "for-graphics" ?
            <main className="dashboard">
                <section className="dashboard__content dashboard--for-graphics">
                    {children}
                </section>
            </main>
            :
            <main className="dashboard">
                <section className="dashboard__content dashboard--for-map">

                </section>
            </main>
    );
}

export default TemplateDashboard;