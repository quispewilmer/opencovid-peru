import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';
import ExpandInfo from '../../../Atoms/ExpandInfo'
import ChartDataLabels from 'chartjs-plugin-datalabels';

const TEST_DATA = [
  {
    week: '29 de Marzo',
    positive: 30,
    negative: 30,
  },
  {
    week: '5 de Abril',
    positive: 60,
    negative: 40,
  },
  {
    week: '12 de Abril',
    positive: 10,
    negative: 90,
  },
]

const riskToColors = {
  extreme: {
    negative: '#FC9783',
    positive: '#9E100F',
  },
  high: {
    negative: '#FFC685',
    positive: '#9E4B1D',
  },
  moderate: {
    negative: '#F8EE98',
    positive: '#B48F0E',
  },
  low: {
    negative: '#A3EFBF',
    positive: '#007029',
  },
}

const buildDataObject = ({ data, risk }) => ({
  labels: data.map(week => week.week),
  datasets: [{
    label: 'Casos Positivos',
    data: data.map(week => week.positive),
    backgroundColor: riskToColors[risk].positive,
    borderRadius: {
      bottomLeft: 6,
      bottomRight: 6
    },
    borderSkipped: false,
    datalabels: {
      color: '#FFFFFF'
    }
  }, {
    label: 'Casos Negativos',
    data: data.map(week => week.negative),
    backgroundColor: riskToColors[risk].negative,
    borderRadius: {
      topRight: 6,
      topLeft: 6,
    },
    borderSkipped: false,
    datalabels: {
      color: '#3A3838'
    }
  }]
})

const buildChartConfiguration = ({ data, risk }) => ({
  type: 'bar',
  data: buildDataObject({ data, risk }),
  plugins: [ChartDataLabels],
  
  options: {
    responsive: true,
    plugins: {
      tooltip: {
        callbacks: {
          label: function (context) {
            const value = Math.round(context.raw)
            const label = context.dataset.label
            return ` ${label}: ${value}%`
          }
        }
      },
      datalabels: {
        font: {
          size: '16px'
        },
        formatter: function (value, context) {
          return `${Math.round(value)}%`
        }
      }
    },
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false
        },
        ticks: {
          color: '#212529'
        }
      },
      y: {
        stacked: true,
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

const PositivityRate = ({ risk = 'extreme', data = TEST_DATA }) => {
  const chartRef = useRef(null)

  useEffect(() => {
    const myChartRef = chartRef.current.getContext("2d");
        
    const chart = new Chart(myChartRef, buildChartConfiguration({data, risk}));
    return () => {
      chart.destroy()
    }
  }, [risk, data])

  return (
    <section className="positivity-rate-graphic graphic-container graphic pandemic-state-graphic">
      <div className="graphic-container graphic">
        <h1 className="graphic__title">
          Positividad
          &nbsp;<ExpandInfo style={{float: 'right'}} text="% de pruebas que salen positivas y negativas" />
        </h1>
        <div className="graphic__region-information region-information">
          <canvas ref={chartRef} width='100%' height='110px'></canvas>
        </div>
      </div>
    </section>
  )
}

export default PositivityRate