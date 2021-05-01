import React from 'react'
import SearchRegion from '../../Molecules/SearchRegion';
import WeekPicker from './WeekPicker'
import moment from 'moment'

const Filters = ({ onChange, initialValues, value = {} }) => {
  return <div className="pandemic-state-filters">
    <h1 className="pandemic-state-filters__title graphic__title">Situación regional</h1>
    <div className="pandemic-state-filters__containers">
      <SearchRegion className="pandemic-state-filters__item" onChange={state => onChange({state})} value={value.state} />
      <WeekPicker
        className="pandemic-state-filters__item"
        initialDate={initialValues.initialDate}
        disabledDays={{
          after: moment().subtract(7, 'days').endOf('isoWeek').toDate(),
        }}
        onChange={(week) => 
          onChange({
            week: [week[0], week[week.length-1]]
          })
        }
      />
    </div>
  </div>
}

export default Filters