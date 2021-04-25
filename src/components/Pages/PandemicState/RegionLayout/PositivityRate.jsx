import React, { useRef, useEffect } from 'react'
import Chart from 'chart.js/auto';

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
    positive: '#FC9783',
    negative: '#9E100F',
  },
  high: {
    positive: '#FFC685',
    negative: '#9E4B1D',
  },
  moderate: {
    positive: '#F8EE98',
    negative: '#B48F0E',
  },
  low: {
    positive: '#A3EFBF',
    negative: '#007029',
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
    borderSkipped: false
  }, {
    label: 'Casos Negativos',
    data: data.map(week => week.negative),
    backgroundColor: riskToColors[risk].negative,
    borderRadius: {
      topRight: 6,
      topLeft: 6,
    },
    borderSkipped: false
  }]
})

const buildChartConfiguration = ({ data, risk }) => ({
   type: 'bar',
   data: buildDataObject({data, risk}),
   options: {
    responsive: true,
    scales: {
      x: {
        stacked: true,
        grid: {
          display: false,
          drawBorder: false
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
  }, [risk])

  return (
    <section className="positivity-rate-graphic graphic-container graphic">
      <h1 className="graphic__title">Tasa de Positividad</h1>
      <div className="graphic__region-information region-information">
        <canvas ref={chartRef} width='100%' height='110px'></canvas>
      </div>
      <div>Actualizado: 18 de abril del 2021</div>
    </section>
  )
}

export default PositivityRate