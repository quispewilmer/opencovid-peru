import React from 'react'
import SearchRegion from '../../Molecules/SearchRegion';
import WeekPicker from './WeekPicker'

const Filters = ({ onChange, value }) => {
  return <div className="jafeth-filters">
    <SearchRegion text="Busca una región" />
    <WeekPicker onChange={(week) => {
      onChange({
        ...value,
        week: [week[0], week[week.length-1]]
      })
    }} />
  </div>
}

export default Filters