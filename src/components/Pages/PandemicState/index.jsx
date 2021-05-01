import React, { useState, useEffect } from 'react';
import moment from 'moment';
import axios from 'axios'
import WeeklyInfoCard from '../../Atoms/WeeklyInfoCard'
import Region from '../../Organisms/Region';
import TemplateDashboard from '../../Templates/TemplateDashboard';
import CovidBeds from './RegionLayout/CovidBeds'
import PositivityRate from './RegionLayout/PositivityRate'
import MortalityRate from './RegionLayout/MortalityRate'
import UciBeds from './RegionLayout/UciBeds'
import IncidentRate from './RegionLayout/IncidentRate'
import DailyTestAverage from './RegionLayout/DailyTestAverage'
import RegionalWeeklyAnalysis from './RegionLayout/RegionalWeeklyAnalysis'
import RegionRanking from './CountryLayout/RegionRanking'
import { getRegionsData, getBedsData, getWeeklyAnalysis } from './api'
import Filters from './Filters'
import { getWeekRange } from './WeekPicker'
import mapState from './mapState'
import Regions from './Regions'
import {
    buildAverageDailyTestsData,
    buildPositivityRateData,
    buildIncidentRateData,
    buildMortalityRateData,
    buildUciBedsData,
    buildCovidBedsData,
    buildRegionalWeeklyAnalysisData
} from './chartDataCalculation'

const scoreToRisk = {
    1.0: 'low',
    2.0: 'moderate',
    3.0: 'high',
    4.0: 'extreme',
}

const colorsByRisk = {
    extreme: '#FD0600',
    high: '#F38620',
    moderate: '#FFE604',
    low: '#00BF46',
}

const indexBy = (array, key) => array.reduce((acc, cur) => ({ ...acc, [cur[key]]: cur }), {})

const dateToParam = date => moment(date).format('DD-MM-YYYY')

const getCurrentState = ({ latitude, longitude }) => axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
    params: {
        latlng: `${latitude},${longitude}`,
        sensor: false,
        key: 'AIzaSyBjv13ctPjJFiKAEp79RXzAgPLULbrKEII'
    }
});

const regionsByLabel = indexBy(Regions, 'label')

const gMapsMap = {
    'Municipalidad Metropolitana de Lima': 'Lima Metropolitana',
    'Cuzco': 'Cusco',
}

function mapGMapsState(name) {
    name = gMapsMap[name] || name
    return regionsByLabel[name]
}

const PandemicState = () => {
    const initialWeek = getWeekRange(moment().subtract(7, 'days'))
    const [filters, setFilters] = useState({
        week: [initialWeek.from, initialWeek.to],
        state: ""
    });
    const [states, setStates] = useState({})
    const [prevWeekStates, setPrevWeekStates] = useState(null)
    const [prevPrevWeekStates, setPrevPrevWeekStates] = useState(null)
    const [bedsData, setBedsData] = useState([])
    const [weeklyAnalysis, setWeeklyAnalysis] = useState({})
    const [currentState, setCurrentState] = useState('LIMA REGION')

    const countryWide = !filters.state;
    const risk = countryWide ? 'extreme' : scoreToRisk[states[filters.state].score]
    const statesData = [prevPrevWeekStates, prevWeekStates, states]
    const prevWeekStart = moment(filters.week[0]).subtract(1, 'weeks')
    const prevPrevWeekStart = moment(filters.week[0]).subtract(2, 'weeks')
    const weekStartDates = [prevPrevWeekStart, prevWeekStart, filters.week[0]]

    const [uciBedsData, totalUciBeds] = buildUciBedsData(bedsData)
    const [covidBedsData, totalCovidBeds] = buildCovidBedsData(bedsData)
    const incidentRateData = buildIncidentRateData(statesData, filters.state, weekStartDates)
    const mortalityRateData = buildMortalityRateData(statesData, filters.state, weekStartDates)
    const positivityRateData = buildPositivityRateData(statesData, filters.state, weekStartDates)

    useEffect(() => {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(position => {
                const { latitude, longitude } = position.coords;
                getCurrentState({ latitude, longitude }).then(({ data }) => {
                    const { address_components } = data.results[0]
                    const component = address_components.find(component => component.types.includes('administrative_area_level_1'))
                    const stateInfo = mapGMapsState(component.short_name)
                    if (stateInfo) {
                        setCurrentState(stateInfo.value)
                    }
                })
            })
        }
    }, [])

    useEffect(() => {
        if (filters.state) {
            getBedsData({
                region: filters.state,
                fechaGt: dateToParam(filters.week[0]),
                fechaLt: dateToParam(filters.week[1])
            }).then(response => setBedsData(response.data))

            document.simplemaps_countrymap.state_zoom(mapState[filters.state])
        } else {
            if (typeof document.simplemaps_countrymap.back === 'function') {
                document.simplemaps_countrymap.back()
            }
        }
    }, [filters.state])

    useEffect(() => {
        getRegionsData({ weekStart: dateToParam(filters.week[0]) }).then(response => {
            if (response.data.length === 0) {
                alert('Todavía no hay datos para la semana seleccionada!')
                return
            }

            const responseRegions = response.data[0].regions;
            responseRegions.forEach(region => {
                const color = colorsByRisk[scoreToRisk[region.score]];
                const stateCode = mapState[region.region];
                document.simplemaps_countrymap_mapdata.state_specific[stateCode].color = color
                document.simplemaps_countrymap.refresh()
            })
            setStates(indexBy(responseRegions, 'region'))
        })
        
        getRegionsData({ weekStart: dateToParam(prevWeekStart) }).then(response => {
            setPrevWeekStates(
                response.data.length > 0 ? indexBy(response.data[0].regions, 'region') : null
            )
        })
        getRegionsData({ weekStart: dateToParam(prevPrevWeekStart) }).then(response => {
            setPrevPrevWeekStates(
                response.data.length > 0 ? indexBy(response.data[0].regions, 'region') : null
            )
        })

        getBedsData({
            region: filters.state,
            fechaGt: dateToParam(filters.week[0]),
            fechaLt: dateToParam(filters.week[1])
        }).then(response => setBedsData(response.data))

        getWeeklyAnalysis({
            weekStart: dateToParam(filters.week[0])
        }).then(response => {
            setWeeklyAnalysis(response.data)
        })
    }, [filters.week])

    return (
        <div>
            <TemplateDashboard type="for-graphics">
                <Filters
                    onChange={newFilters => {
                        setFilters(currFilters => ({ ...currFilters, ...newFilters }))
                    }}
                    initialValues={{
                        initialDate: initialWeek.from
                    }}
                    value={filters}
                />
                <Region
                    countryWide={countryWide}
                    onSwitchClick={(newValue) => {
                        if (newValue) {
                            document.simplemaps_countrymap.back()
                            setFilters(currentValue => ({...currentValue, state: ""}))
                        } else {
                            setFilters(currentValue => ({...currentValue, state: currentState}))
                        }
                    }}
                    onStateClick={state => {
                        const stateName = mapState[state]
                        setFilters(currentValue => ({ ...currentValue, state: stateName }))
                    }}
                />
                {countryWide ? 
                    (
                        <>
                            <div className="graphic-container graphic" style={{
                                gridColumnStart:'3',
                                gridColumnEnd:'5',
                                gridRowStart:'1',
                                gridRowEnd:'3'
                            }}>
                                <WeeklyInfoCard 
                                    risk={risk}
                                    data={weeklyAnalysis}
                                    weekRange={filters.week}
                                />
                            </div>
                            <div className="graphic-container graphic" style={{
                                gridColumnStart:'3',
                                gridColumnEnd:'5',
                                gridRowStart:'3',
                                gridRowEnd:'5'
                            }}>
                                <RegionRanking statesData={states} />
                            </div>
                        </>
                    )
                :
                    (
                        <>
                            <div className="graphic-container graphic" style={{
                                gridColumnStart:'3',
                                gridColumnEnd:'5',
                                gridRowStart:'1',
                                gridRowEnd:'3'
                            }}>
                                <RegionalWeeklyAnalysis
                                    risk={risk}
                                    weekRange={filters.week}
                                    data={buildRegionalWeeklyAnalysisData({
                                        uciBedsData,
                                        covidBedsData,
                                        incidentRateData,
                                        mortalityRateData,
                                        positivityRateData,
                                    })}
                                />
                            </div>
                            <div className="graphic-container graphic" style={{
                                gridColumnStart:'2',
                                gridColumnEnd:'3',
                                gridRowStart:'4',
                                gridRowEnd:'5'
                            }}>
                                <UciBeds risk={risk} data={uciBedsData} totalBeds={totalUciBeds} />
                            </div>
                            <div className="graphic-container graphic" style={{
                                gridColumnStart:'3',
                                gridColumnEnd:'4',
                                gridRowStart:'4',
                                gridRowEnd:'5'
                            }}>
                                <IncidentRate risk={risk} data={incidentRateData} />
                            </div>
                            <div className="graphic-container graphic" style={{
                                gridColumnStart:'4',
                                gridColumnEnd:'5',
                                gridRowStart:'4',
                                gridRowEnd:'5'
                            }}>
                                <DailyTestAverage
                                    risk={risk}
                                    data={buildAverageDailyTestsData(statesData, filters.state, weekStartDates)}
                                />
                            </div>
                            <CovidBeds risk={risk} data={covidBedsData} totalBeds={totalCovidBeds} />
                            <MortalityRate risk={risk} data={mortalityRateData} />
                            <PositivityRate risk={risk} data={positivityRateData} />
                        </>
                    )
                }
            </TemplateDashboard>
        </div>
    )
}

export default PandemicState;
