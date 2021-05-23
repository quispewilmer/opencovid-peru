import React from 'react';
import Table from 'react-bootstrap/Table'

const TypeDoses=({data})=>{

    const datos=data.resumeTypes;

    const key = 'type';

    const arrayUnique = [...new Map(datos.map(item =>
        [item[key], item])).values()];
      

    const dose=arrayUnique.map((item,index)=>
    <tr key={index}>
        <td>{item.type}</td>
        <td>{item.cantidad}</td> 
    </tr>);

    return (
        <section className="type-doses-section">
            <Table className="table-borderless">
                <thead>
                    <th>Laboratorio</th>
                    <th>Total</th>
                </thead>
                <tbody>
                <tr>
                    <td>Pfizer</td>
                    <td>3 242 160</td> 
                </tr>
                <tr>
                    <td>Sinopharm</td>
                    <td>1 000 000</td> 
                </tr>
                <tr>
                    <td>AstraZeneca</td>
                    <td>276 000</td> 
                </tr>
                </tbody>
            </Table>
        </section>
    )
}

export default TypeDoses;
