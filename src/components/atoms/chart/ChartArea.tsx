import { PureComponent } from 'react'
import { Area, AreaChart, CartesianGrid, YAxis } from 'recharts'

const data = [...Array(30)].map((_, index) => {
  return { date: index, value: Math.trunc(Math.random() * 100) }
})

export class ChartArea extends PureComponent {
  render() {
    return (
      <AreaChart
        className="area-chart"
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid horizontal={true} vertical={false} stroke="#E2E4EA" />
        <YAxis dataKey="value" unit="万" tickLine={false} />
        <Area type="linear" dataKey="value" stroke="#000066" fill="#00006633" />
      </AreaChart>
    )
  }
}
