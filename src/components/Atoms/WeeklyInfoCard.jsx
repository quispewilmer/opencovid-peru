import React from 'react';
import '../../styles/theme/_weeklyinfocard.scss'


/* Here is an example of how to call the component
<WeeklyInfoCard 
        date1={'12/04/2021'}
        date2={'18/04/2021'}
        color={'#ffc107'} 
        l1Uci={'30%'} 
        l1Hospital={'30%'}
        l2Variation={'disminuyó'}
        l3Consistency={'consistente'}
        l3Variation={'ascenso'}
        l4Variation={'disminuido'}
        l4State={'frenado'}
        />
        */

const WeeklyInfoCard = ({date1, date2, color, l1Hospital, l1Uci, l2Variation, l3Consistency, l3Variation, l4Variation, l4State}) => {
 	
 	const style = {
 		color: color
 	}

 	let dateOne = date1.split('/').reverse().join('-')
 	let dateTwo = date2.split('/').reverse().join('-')

	return (
		<div class='weekly-info-card-container'>
			<h3 className='weekly-info-card__title'>Análisis semanal</h3>
			<time dateTime={dateOne}>{date1} -</time><time dateTime={dateTwo}> {date2}</time> 
			<ul>
				<li className='weekly-info-card__li'>En la última semana, <strong> ocupación de camas UCI</strong> estuvo alrededor del 
				<strong style={style}> {l1Uci}</strong> y la 
				ocupación de <strong>camas hospitalarias</strong> para COVID alrededor de <strong style={style}>{l1Hospital}</strong></li>
				<li className='weekly-info-card__li'>La <strong>tasa de positividad </strong><strong style={style}>{l2Variation}</strong> respecto a la semana anterior</li>
				<li className='weekly-info-card__li'>La tendencia de la<strong> tasa de mortalidad</strong> es <strong style={style}>{l3Consistency}</strong> en sentido que se puede 
				decir que está en <strong style={style}>{l3Variation}</strong></li>
				<li className='weekly-info-card__li'>El N° de infectados ha <strong style={style}> {l4Variation} </strong> el virus se ha <strong style={style}> {l4State}</strong>
					en la última semana </li>
			</ul>
		</div>
		);
};

export default WeeklyInfoCard;
