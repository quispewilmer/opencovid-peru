import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';
import ExpandInfo from '../../../Atoms/ExpandInfo'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const TEST_DATA = [
  {
    week: '29 de Marzo',
    value: 40
  },
  {
    week: '5 de Abril',
    value: 50
  },
  {
    week: '12 de Abril',
    value: 20
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
  data: buildDataObject({ risk, data }),
  plugins: [ChartDataLabels],
  options: {
    responsive: true,
    plugins: {
      legend: {
        display: false
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            return ` Casos Positivos: ${Math.round(context.raw)}`
          }
        }
      },
      datalabels: {
        color: ['extreme', 'high'].includes(risk) ? '#FFFFFF' : '#3A3838',
        font: {
          size: '16px'
        },
        formatter: function (value, context) {
          return Math.round(value)
        }
      }
    },
    scales: {
      x: {
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#212529',
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

const IncidentRate = ({ risk = 'extreme', data = TEST_DATA }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
        
    const chart = new Chart(myChartRef, buildChartConfiguration({risk, data}));
    return () => {
      chart.destroy()
    }
  }, [risk, data])

  return (
    <section className="mortality-rate-graphic graphic-container graphic">
      <h1 className="graphic__title">
        Casos Confirmados Semanales
        &nbsp;<ExpandInfo style={{float: 'right'}} text="N° de personas que dieron positivo por Covid-19 en esa región durante esa semana" />
      </h1>
      <div className="graphic__region-information region-information">
        <canvas ref={chartRef} width='100%' height='110px'></canvas>
      </div>
    </section>
  )
}

export default IncidentRate
