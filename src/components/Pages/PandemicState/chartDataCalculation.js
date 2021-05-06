import moment from 'moment';
import { getWeekRange } from './WeekPicker'

export function buildAverageDailyTestsData(statesData, state, weekStartDates) {
    return statesData.map((states, index) => {
        if (!(states && states[state])) return null;
        const weekRange = getWeekRange(weekStartDates[index])
        return {
            week: moment(weekRange.from).format('DD-MM-YYYY'),
            value: states[state].avgTest
        }
    }).filter(dataPoint => !!dataPoint)
}

export function buildPositivityRateData(statesData, state, weekStartDates) {
    return statesData.map((states, index) => {
        if (!(states && states[state])) return null;
        const weekRange = getWeekRange(weekStartDates[index])
        const positivity = states[state].positividad
        return {
            week: moment(weekRange.from).format('DD-MM-YYYY'),
            positive: positivity,
            negative: 100 - positivity
        }
    }).filter(dataPoint => !!dataPoint)
}

export function buildIncidentRateData(statesData, state, weekStartDates) {
    return statesData.map((states, index) => {
        if (!(states && states[state])) return null;
        const weekRange = getWeekRange(weekStartDates[index])
        return {
            week: moment(weekRange.from).format('DD-MM-YYYY'),
            value: states[state].incid_100 * states[state].poblacion / 100000
        }
    }).filter(dataPoint => !!dataPoint)
}

export function buildMortalityRateData(statesData, state, weekStartDates) {
    return statesData.map((states, index) => {
        if (!(states && states[state])) return null;
        const weekRange = getWeekRange(weekStartDates[index])
        return {
            week: moment(weekRange.from).format('DD-MM-YYYY'),
            value: states[state].fall_100 * states[state].poblacion / 100000
        }
    }).filter(dataPoint => !!dataPoint)
}

export function buildUciBedsData(bedsData) {
    const totalBeds = bedsData.reduce((acc, cur) => acc + cur.uci_zc_cama_total, 0)
    const availableBeds = bedsData.reduce((acc, cur) => acc + cur.uci_zc_cama_disp, 0)
    const availabilityRate = totalBeds > 0 ? (availableBeds / totalBeds) * 100 : 0
    return [[availabilityRate, 100 - availabilityRate], totalBeds]
}

export function buildCovidBedsData(bedsData) {
    const totalBeds = bedsData.reduce((acc, cur) => acc + cur.uci_znc_cama_total, 0)
    const availableBeds = bedsData.reduce((acc, cur) => acc + cur.uci_znc_cama_disp, 0)
    const availabilityRate = totalBeds > 0 ? (availableBeds / totalBeds) * 100 : 0
    return [[availabilityRate, 100 - availabilityRate], totalBeds]
}

export function buildRegionalWeeklyAnalysisData({ uciBedsData, covidBedsData, incidentRateData, mortalityRateData, positivityRateData, }) {
    return {
        uciBeds: uciBedsData[1],
        covidBeds: covidBedsData[1],
        incidentRate: {
            thisWeek: incidentRateData[incidentRateData.length - 1]?.value || 0,
            lastWeek: incidentRateData[incidentRateData.length - 2]?.value || 0
        },
        positivityRate: {
            thisWeek: positivityRateData[positivityRateData.length - 1]?.positive || 0,
            lastWeek: positivityRateData[positivityRateData.length - 2]?.positive || 0,
        },
        mortalityRate: {
            thisWeek: mortalityRateData[mortalityRateData.length - 1]?.value || 0,
            lastWeek: mortalityRateData[mortalityRateData.length - 2]?.value || 0,
            prevWeek: mortalityRateData[mortalityRateData.length - 3]?.value || 0,
        }
    }
}
