import { PureComponent } from 'react'
import { Bar, BarChart, ResponsiveContainer, XAxis } from 'recharts'

const data = [
  {
    month: '6月',
    value: 2400,
  },
  {
    month: '7月',
    value: 1400,
  },
  {
    month: '8月',
    value: 900,
  },
  {
    month: '9月',
    value: 3000,
  },
  {
    month: '10月',
    value: 2400,
  },
  {
    month: '11月',
    value: 2200,
    fill: '#283296',
  },
]

interface ChartBarInterface {
  barData: Array<any>
  sampleDataMonth: number
}

export class ChartBar extends PureComponent<any, ChartBarInterface> {
  constructor(props: any) {
    super(props)
    this.state = {
      barData: data,
      sampleDataMonth: 5,
    }
  }

  addSampleData = () => {
    // NOTE: 1月ずつ追加する場合
    this.setState(
      (currentState) => ({
        barData: [
          {
            month: `${currentState.sampleDataMonth}月`,
            value: 2400,
          },
        ].concat(currentState.barData),
      }),
      //   // NOTE: 1月ずつさかのぼる場合
      //   this.setState((currentState) => (
      //     {
      //       barData: [
      //         {
      //           month: `${currentState.sampleDataMonth}月`,
      //           value: 2400,
      //         }
      //       ].concat([...currentState.barData].slice(0, -1))
      //     }
      //   )
      // )
      //   this.setState((currentState) => (
      //     {
      //       sampleDataMonth: currentState.sampleDataMonth - 1
      //     }
      //   )
      // // NOTE: まとめて表示中のデータをリプレイスする場合
      // this.setState((currentState) => (
      //   {
      //     barData: [12, 1, 2, 3, 4, 5].map((i) => {
      //       return {
      //         month: `${i}月`,
      //         value: 300 * i,
      //       }
      //     })
      //   }
      // )
    )
    this.setState((currentState) => ({
      sampleDataMonth: currentState.sampleDataMonth - 1,
    }))
  }

  render() {
    return (
      // 親要素に合わせて幅を変える。
      <div
        style={{
          height: '300px',
          width: '600px',
          display: 'flex',
        }}
      >
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <img src="/src/assets/barGraphButton.svg" style={{ padding: '5px' }} onClick={this.addSampleData} alt="ハンバーガーメニュー" />
        </div>
        <ResponsiveContainer>
          <BarChart className="bar-chart" data={this.state.barData}>
            <XAxis dataKey="month" tickLine={false} />
            <Bar dataKey="value" fill="#AAAFD5" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    )
  }
}
