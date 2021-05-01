import React, { useState, useEffect } from 'react';
import Regions from '../Pages/PandemicState/Regions'
import Autosuggest from 'react-autosuggest';

const RegionsBy = Regions.reduce((acc, cur) => ({ ...acc, [cur.value]: cur, [cur.label]: cur }), {})

function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

const findSuggestions = (term) => {
    const escapedValue = escapeRegexCharacters(term.trim());
    if (escapedValue === '') return [];

    const regex = new RegExp('^' + escapedValue, 'i');
    return Regions.filter(region => regex.test(region.label));
}

const CustomInput = (props) => {
  return (
    <div className="pandemicstate-filter">
      <div className="pandemicstate-filter__icon pandemicstate-filter__icon--search"></div>
      <input {...props} className="pandemicstate-filter__input" />
    </div>
  )
}

const SearchRegion = ({ value, onChange, className }) => {
    const [inputVal, setInputVal] = useState('')
    const [regionSuggestions, setRegionSuggestions] = useState([])

    useEffect(() => {
        setInputVal(RegionsBy[value] ? RegionsBy[value].label : '')
    }, [value])

    return (
        <div className={className}>
            <Autosuggest 
                suggestions={regionSuggestions}
                onSuggestionsFetchRequested={({value}) => setRegionSuggestions(findSuggestions(value))}
                onSuggestionsClearRequested={() => setRegionSuggestions([])}
                getSuggestionValue={suggestion => suggestion.label}
                onSuggestionSelected={(event, {suggestion}) => onChange(suggestion.value)}
                renderSuggestion={suggestion => <span>{suggestion.label}</span>}
                renderInputComponent={CustomInput}
                inputProps={{
                    value: inputVal,
                    onChange: (_, { newValue }) => {
                        setInputVal(newValue)
                        if(!newValue) onChange('')
                    },
                    placeholder: 'Busca una región'
                }}
            />
        </div>
    )
}

export default SearchRegion;
