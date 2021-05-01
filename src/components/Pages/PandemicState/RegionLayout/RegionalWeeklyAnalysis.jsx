import React from 'react'
import moment from 'moment'
import '../../../../styles/theme/_weeklyinfocard.scss'

const colorsByRisk = {
	extreme: '#FD0600',
	high: '#F38620',
	moderate: '#FFE604',
	low: '#00BF46',
}

const dateToParam = date => moment(date).format('DD-MM-YYYY')

function is_monotonous(num) {
    if (num.length === 1) {
        return true;
    }
    var num_direction = num[1] - num[0];
    for (var i = 0; i < num.length - 1; i++) {
        if (num_direction * (num[i + 1] - num[i]) <= 0) {
            return false;
        }
    }
    return true;
}

const RegionalWeeklyAnalysis = ({risk, data, weekRange}) => {
	const style = {
		color: colorsByRisk[risk]
	}

	const [weekStart, weekEnd] = weekRange

	const formattedWeek = `${dateToParam(weekStart)} - ${dateToParam(weekEnd)}`

  const positivityChange = data.positivityRate.thisWeek - data.positivityRate.lastWeek
	const incidentChange = data.incidentRate.thisWeek - data.incidentRate.lastWeek
  const mortalityChange = data.mortalityRate.thisWeek - data.mortalityRate.lastWeek
  const mortalityConsistency = is_monotonous([data.mortalityRate.prevWeek, data.mortalityRate.lastWeek, data.mortalityRate.thisWeek])

  return (
    <div className='weekly-info-card-container'>
			<div className='weekly-info-card__title'>Análisis semanal</div>
			<div className='weekly-info-card__weekrange'>{formattedWeek}</div>
			<ul>
        <li className='weekly-info-card__li'>
          En la última semana, la <strong>ocupación de camas UCI</strong> estuvo alrededor del <strong style={style}>{data.uciBeds.toFixed(2)}%</strong> y la ocupación de <strong>camas hospitalarias</strong> para COVID alrededor del <strong style={style}>{data.covidBeds.toFixed(2)}%</strong>
				</li>

        <li className='weekly-info-card__li'>
          La <strong>tasa de positividad</strong> <strong style={style}>{positivityChange > 0  ? 'ha aumentado' : 'se redujo'}</strong> respecto a la semana anterior.
				</li>

				<li className='weekly-info-card__li'>
          La tendencia de la <strong>tasa de mortalidad</strong> es <strong style={style}>{mortalityConsistency ? 'consistente' : 'inconsistente'}</strong>.
				</li>

				<li className='weekly-info-card__li'>
          Esta semana la <strong>tasa de mortalidad</strong> ha <strong style={style}>{mortalityChange > 0 ? 'aumentado' : 'disminuido'}</strong>
				</li>

				<li className='weekly-info-card__li'>
          El n° de infectados ha <strong style={style}>{incidentChange > 0 ? 'aumentado' : 'disminuido'}</strong>: el virus ha <strong style={style}>{incidentChange > 0 ? 'acelerado' : 'frenado'}</strong> en la última semana.
        </li>
			</ul>
    </div>
  )
}

export default RegionalWeeklyAnalysis