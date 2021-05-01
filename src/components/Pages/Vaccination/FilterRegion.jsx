import React,{useState} from 'react';
import Input from '../../Atoms/Input';
import Select from 'react-select'

const options = [
    {value:'Amazonas',label:'Amazonas'},
    {value:'Áncash',label:'Áncash'},
    {value:'Apurímac',label:'Apurímac'},
    {value:'Arequipa',label:'Arequipa'},
    {value:'Ayacucho',label:'Ayacucho'},
    {value:'Cajamarca',label:'Cajamarca'},
    {value:'Callao',label:'Callao'},
    {value:'Cusco',label:'Cusco'},
    {value:'Huancavelica',label:'Huancavelica'},
    {value:'Huánuco',label:'Huánuco'},
    {value:'Ica',label:'Ica'},
    {value:'Junín',label:'Junín'},
    {value:'La Libertad',label:'La Libertad'},
    {value:'Lambayeque',label:'Lambayeque'},
    {value:'Lima',label:'Lima'},
    {value:'Loreto',label:'Loreto'},
    {value:'Madre de Dios',label:'Madre de Dios'},
    {value:'Moquegua',label:'Moquegua'},
    {value:'Pasco',label:'Pasco'},
    {value:'Piura',label:'Piura'},
    {value:'Puno',label:'Puno'},
    {value:'San Martín',label:'San Martín'},
    {value:'Tacna',label:'Tacna'},
    {value:'Tumbes',label:'Tumbes'},
    {value:'Ucayali',label:'Ucayali'}
  ]

const FilterRegion = ({theme, text}) => {

    return (
        // <form className={`membership-form searchregion-form ${theme}`}>
        //     
        //     {/* <Input typeOf="email" idCustomed="searchregion-form__input" theme="searchregion-form__input py-2 px-1 membership-form__input--right" placeholderCustomed={text} /> */}
            
        // </form>
        <div className={`membership-form searchregion-form ${theme}`}>
            <Input typeOf="submit" theme="membership-form__submit membership-form__submit--left searchregion-form__submit py-2 px-3" text="      " />
            <Select
            placeholder= {text}
            options={options}  className="searchregion-form__input py-2 px-1 membership-form__input--right" />
        </div>
        
    )
}

export default FilterRegion;
