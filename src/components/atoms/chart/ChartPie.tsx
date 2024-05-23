import { PureComponent } from 'react'
import { Cell, Pie, PieChart } from 'recharts'

const data = [
  { category: 'cash', name: '現金・カード', value: 64521 },
  { category: 'housing', name: '住宅', value: 47200 },
  { category: 'special', name: '特別な支出', value: 46380 },
  { category: 'utility', name: '水道・光熱費', value: 8430 },
  { category: 'communication', name: '通信費', value: 6770 },
]
const COLORS = ['#D3955F', '#349F76', '#ADC383', '#2EAAD9', '#8A49B5']

export class ChartPie extends PureComponent {
  render() {
    return (
      <PieChart width={140} height={140}>
        <Pie
          pointerEvents={'none'}
          data={data}
          cx={65}
          cy={65}
          startAngle={90}
          endAngle={-270}
          innerRadius={34.52}
          outerRadius={69.73}
          stroke="none"
          fill="#8884d8"
          dataKey="value"
        >
          {data.map((cellData, index) => (
            <Cell key={`cell-${cellData['category']}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
      </PieChart>
    )
  }
}
