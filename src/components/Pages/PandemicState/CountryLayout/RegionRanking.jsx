import React, { useMemo } from 'react'
import ExpandInfo from '../../../Atoms/ExpandInfo'
import Regions from '../Regions'

const indexBy = (array, key) => array.reduce((acc, cur) => ({ ...acc, [cur[key]]: cur }), {})

const scoreToRisk = {
    1.0: 'Riesgo Bajo',
    2.0: 'Riesgo Moderado',
    3.0: 'Riesgo Alto',
    4.0: 'Riesgo Extremo',
}

const scoreToColor = {
    4.0: '#FD0600',
    3.0: '#F38620',
    2.0: '#FFE604',
    1.0: '#00BF46',
}

const regionsByValue = indexBy(Regions, 'value')

const RegionRanking = ({ statesData }) => {

  const statesByRisk = useMemo(() => {
    const result = {
      4.0: [],
      3.0: [],
      2.0: [],
      1.0: [],
    }

    Object.values(statesData).forEach(state => result[state.score].push(state))

    return result
  }, [statesData])

  return (
    <div className="region-ranking">
      <div className="region-ranking__title">
        Regiones según su grupo de afectación
        &nbsp;<ExpandInfo text="El impacto de la pandemia es calculado a partir de 6 indicadores: tasa de positividad, tasa de incidencia, mortalidad real, capacidad hospitalaria, capacidad UCI y media de test diarios." />
      </div>
      <div className="region-ranking__list">
        {Object.entries(statesByRisk).map(([risk, states]) => 
          (
            <React.Fragment key={risk}>
              <div className="region-ranking__list__group">
                <span className="region-ranking__risk-icon" style={{ backgroundColor: scoreToColor[risk] }}></span>
                <strong style={{marginLeft: 12}}>{scoreToRisk[risk]}</strong>
              </div>
              {states.map(state => 
                (
                  <div key={state.region} className="region-ranking__list__item">{regionsByValue[state.region].label}</div>
                )
              )}
            </React.Fragment>
          )
        )}
      </div>
    </div>
  )
}

export default RegionRanking