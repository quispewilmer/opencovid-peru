import React, { useState } from 'react';
import Region from '../../Organisms/Region';
import PuestoRegional from '../../Molecules/PuestoRegion';
import RankingRegional from '../../Molecules/RankingRegion';
import TemplateDashboard from '../../Templates/TemplateDashboard';
import Statistics from '../../Organisms/Statistics';
import Filters from './Filters'
import CovidBeds from './RegionLayout/CovidBeds'
import PositivityRate from './RegionLayout/PositivityRate'
import MortalityRate from './RegionLayout/MortalityRate'

const initialFilters = {
    week: "",
    state: ""
}

const colorsByRisk = {
    extreme: '#FD0600',
    high: '#F38620',
    moderate: '#FFE604',
    low: '#00BF46',
}

const RISKS = ['extreme', 'high', 'moderate', 'low']

const PandemicState = () => {
    const [filters, setFilters] = useState(initialFilters);
    const [risk, setRisk] = useState('extreme')
    const countryWide = !!filters.week;

    console.log('risk!', risk)

    return (
        <div>
            <div>
                <pre style={{ display: 'inline-block' }}>{JSON.stringify(filters, null, 2)}</pre>
            </div>
            <TemplateDashboard type="for-graphics">
                <Filters value={filters} onChange={value => {
                    console.log('value from filters', value)
                    setFilters({...value})
                }} />
                <Region onSwitchClick={(value) => {
                    document.simplemaps_countrymap.back()
                    console.log('onswitchclick filters', filters)
                    setFilters(currentValue => ({...currentValue, state: ""}))
                }} onStateClick={state => {
                    console.log('onstateclick filters', filters)
                    setFilters(currentValue => ({ ...currentValue, state }))
                    setRisk(RISKS[Math.floor(Math.random() * RISKS.length)])
                    }} />
                <CovidBeds risk={risk} />
                <Statistics title="Lima Región" />
                <PositivityRate risk={risk} />
                <MortalityRate risk={risk} />
            </TemplateDashboard>
        </div>
    )
}

export default PandemicState;