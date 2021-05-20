import axios from 'axios'

const api = axios.create({
  baseURL: 'https://open-covid-api-vwgk4ckqbq-uk.a.run.app/api',
});

export const getPositivity = ({region, fechaGt, fechaLt}) => api.get('/positivity', {
            params: {
                region,
                fechaGt,
                fechaLt
            }
})

export const getMinsaDeaths = ({ region, fechaGt, fechaLt }) => api.get('/minsa-deaths', {
            params: {
                region,
                fechaGt,
                fechaLt
            }
})

export const getWeeklyAnalysis = ({ weekStart }) => api.get('/semaforo/analysis', {
    params: {
        fecha: weekStart
    }
})

export const getRegionsData = ({ weekStart }) => api.get('/semaforo', { params: { fecha: weekStart } })

export const getBedsData = ({ region, fechaGt, fechaLt }) => api.get('/hospital-capacity', {
    params: {
        fechaGt,
        fechaLt,
        region
    }
})