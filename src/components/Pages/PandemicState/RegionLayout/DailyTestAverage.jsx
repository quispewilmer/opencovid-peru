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
  extreme: '#730A0A',
  high: '#733615',
  moderate: '#865800',
  low: '#003D16',
}

const buildDataObject = ({ risk, data }) => ({
  labels: data.map(week => week.week),
  datasets: [{
    label: 'Número de Pruebas',
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
            return ` Número de Pruebas: ${Math.round(context.raw)}`
          }
        }
      },
      datalabels: {
        color: '#FFFFFF',
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
          color: '#212529'
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

const DailyTestAverage = ({ risk = 'extreme', data = TEST_DATA }) => {
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
        Promedio Semanales
        &nbsp;<ExpandInfo style={{float: 'right'}} text="Promedio de pruebas por día con respecto al total de la población" />
      </h1>
      <div className="graphic__region-information region-information">
        <canvas ref={chartRef} width='100%' height='110px'></canvas>
      </div>
    </section>
  )
}

export default DailyTestAverage
