import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';

const TEST_DATA = [
  {
    week: '29 de Marzo',
    value: 30
  },
  {
    week: '5 de Abril',
    value: 60
  },
  {
    week: '12 de Abril',
    value: 10
  },
]

const riskToColors = {
  extreme: '#F21616',
  high: '#FF772E',
  moderate: '#FFE200',
  low: '#00F058',
}

const buildDataObject = ({ risk, data }) => ({
  labels: data.map(week => week.week),
  datasets: [{
    label: 'Casos Positivos',
    data: data.map(week => week.value),
    backgroundColor: riskToColors[risk],
    borderSkipped: false,
    borderRadius: 6
  }]
})

const buildChartConfiguration = ({ risk, data }) => ({
  type: 'bar',
  data: buildDataObject({risk, data}),
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        }
      },
      y: {
        ticks: {
          display: false
        },
        grid: {
          display: false,
          drawBorder: false,
        }
      },
    }
  }
})

const MortalityRate = ({ risk = 'extreme', data = TEST_DATA }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
        
    const chart = new Chart(myChartRef, buildChartConfiguration({risk, data}));
    return () => {
      chart.destroy()
    }
  }, [risk])

  return (
    <section className="place-graphic graphic-container graphic">
      <h1 className="graphic__title">Tasa de Mortalidad</h1>
      <div className="graphic__region-information region-information">
        <canvas ref={chartRef} width="400" height="400"></canvas>
      </div>
      <div>Actualizado: 18 de abril del 2021</div>
    </section>
  )
}

export default MortalityRate
