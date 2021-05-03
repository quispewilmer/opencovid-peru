import React from 'react';

const TypeDoses=({data})=>{

    const datos=data.resumeTypes;
    const dose=datos.map((item,index)=><li key={index}>{item.type}</li>);

    return (
        <section className="type-doses-section">
            <ul className="mt-3">
                {dose}
            </ul>
        </section>
    )
}

export default TypeDoses;