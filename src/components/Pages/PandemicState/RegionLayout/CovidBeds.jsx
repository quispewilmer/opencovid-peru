import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';
import ExpandInfo from '../../../Atoms/ExpandInfo'
import ChartDataLabels from 'chartjs-plugin-datalabels';

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

const LABELS = ["Disponibles", "No disponibles"]

const buildDataObject = ({ data, risk }) => ({
  labels: LABELS,
  datasets: [
    {
      fill: true,
      backgroundColor: [riskToColors[risk].available, riskToColors[risk].unavailable],
      data,
    }
  ]
})

const buildChartConfiguration = ({ data, risk, totalBeds }) => ({
  type: 'pie',
  data: buildDataObject({ data, risk }),
  options: {
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const count = Math.round((context.raw / 100) * totalBeds)
            return ` ${LABELS[context.dataIndex]}: ${count}`
          }
        }
      },
      datalabels: {
        color: function (context) {
          const index = context.dataIndex;
          return index === 0 ? '#3A3838' : '#FFFFFF'
        },
        font: {
          size: '16px'
        },
        formatter: function (value, context) {
          return `${Math.round(value)}%`
        }
      }
    }
  },
  plugins: [ChartDataLabels]
})

const CovidBeds = ({ risk = 'extreme', data = TEST_DATA, totalBeds }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const chart = new Chart(chartRef.current.getContext("2d"), buildChartConfiguration({ risk, data, totalBeds }));
    return () => {
      chart.destroy()
    }
  }, [risk, data])

  return (
    <section className="graphic-container graphic covid-beds-graphic pandemic-state-graphic">
      <div className="graphic-container graphic">
        <h1 className="graphic__title">
          Camas COVID
          &nbsp;<ExpandInfo style={{float: 'right'}} text=" % de camas COVID hospitalarias ocupadas. Promedio semanal" />
        </h1>
        <div className="graphic__region-information region-information">
          <canvas ref={chartRef} width='100%' height='80px'></canvas>
        </div>
      </div>
    </section>
  )
}

export default CovidBeds