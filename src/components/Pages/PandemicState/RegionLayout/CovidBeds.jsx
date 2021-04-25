import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';

const TEST_DATA = [5, 95];

const riskToColors = {
  extreme: {
    available: '#FC9783',
    unavailable: '#9E100F',
  },
  high: {
    available: '#FFC685',
    unavailable: '#9E4B1D',
  },
  moderate: {
    available: '#F8EE98',
    unavailable: '#B48F0E',
  },
  low: {
    available: '#A3EFBF',
    unavailable: '#007029',
  },
}

const buildDataObject = ({ data, risk }) => ({
  labels: ["Disponibles", "No disponibles"],
  datasets: [
    {
      fill: true,
      backgroundColor: [riskToColors[risk].available, riskToColors[risk].unavailable],
      data,
    }
  ]
})

const buildChartConfiguration = ({ data, risk }) => ({
  type: 'pie',
  data: buildDataObject({ data, risk }),
  options: {},
})

const CovidBeds = ({ risk = 'extreme', data = TEST_DATA }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = new Chart(chartRef.current.getContext("2d"), buildChartConfiguration({ risk, data }));
    return () => {
      chart.destroy()
    }
  }, [risk])

  console.log('risk inside covid beds', risk)

  return (
    <section className="graphic-container graphic covid-beds-graphic">
      <h1 className="graphic__title">Camas COVID</h1>
      <div className="graphic__region-information region-information">
        <canvas ref={chartRef} width='100%' height='80px'></canvas>
      </div>
      <div className="pt-3">Actualizado: 18 de abril del 2021</div>
    </section>
  )
}

export default CovidBeds