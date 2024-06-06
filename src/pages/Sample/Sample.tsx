import { ChartArea, ChartBar, ChartPie } from '@/components/atoms'
import { TabBarSub } from '@/components/atoms/tabBar/TabBarSub'
import { Tabs } from '@ark-ui/react'
import { useGetSampleQuery } from './hooks'

export const Sample = () => {
  const { data, isLoading } = useGetSampleQuery()

  return (
    <>
      <TabBarSub
        setHamburgerMenuIsOpen={() => {
          alert('ハンバーガーメニューがクリックされたので、メニューパーツを表示する')
        }}
      >
        <Tabs.Content value="accountActivity">入出金タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="expenses">家計簿タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="assetList">資産一覧タブを押したときに表示するコンテンツ</Tabs.Content>
      </TabBarSub>
      <ChartPie />
      <ChartArea />
      <ChartBar />
      {isLoading ? (
        <p>loading...</p>
      ) : (
        <>
          {data.map((v) => (
            <p key={v.id}>{v.title}</p>
          ))}
        </>
      )}
    </>
  )
}
