import React from 'react';
import moment from 'moment'
import '../../styles/theme/_weeklyinfocard.scss'

const dateToParam = date => moment(date).format('DD-MM-YYYY')

const WeeklyInfoCard = ({ risk, data, weekRange }) => {
	
	const style = {
		color: '#00BFA6'
	}

	const [weekStart, weekEnd] = weekRange

	const formattedWeek = `${dateToParam(weekStart)} - ${dateToParam(weekEnd)}`
	
	const cambioContagios = data.incrementoContagios > 0 ? 'han aumentado' : 'se redujeron'

	return (
		<div className='weekly-info-card-container'>
			<div className='weekly-info-card__title'>Análisis semanal</div>
			<div className='weekly-info-card__weekrange'>{formattedWeek}</div>

			{JSON.stringify(data)=='{}'? <ul>
				<li>Lo sentimos, aún no hay información disponible para esta semana, por favor seleccione una fecha anterior.</li>
			</ul>:<ul>
				<li className='weekly-info-card__li'>
					De las 26 regiones, hay <strong style={style}>{data.riesgoExtremo}</strong> en <strong>riesgo extremo</strong> y <strong style={style}>{data.riesgoAlto}</strong> en <strong>riesgo alto</strong>.
				</li>

				<li className='weekly-info-card__li'>
					En <strong style={style}>{data.capacidadCamasColapsadas}</strong> de las regiones, la <strong>capacidad de camas hospitalarias</strong> y camas UCI <strong>han colapsado</strong>.
				</li>

				<li className='weekly-info-card__li'>
					Los nuevos contagios <strong style={style}>{cambioContagios}</strong> en <strong style={style}>{Math.abs(data.incrementoContagios).toFixed(2)}%</strong> respecto a la semana del {data.semanaPrevia}.
				</li>

				<li className='weekly-info-card__li'>
					El n° de personas fallecidas <strong>ha aumentado</strong> en <strong style={style}>{data.incrementoFallecidos}</strong> regiones y <strong>disminuido</strong> en <strong style={style}>{data.disminucionFallecidos}</strong> regiones respecto a lo que se registró la semana del {data.semanaPrevia}.
				</li>

				<li className='weekly-info-card__li'>
					En <strong style={style}>{data.limiteRecomendado}</strong> de las regiones el n° de personas contagiadas supera el límite recomendado. El <strong>virus multiplica con facilidad</strong>.
				</li>
			</ul>}
			
		</div>
		);
};

export default WeeklyInfoCard;
