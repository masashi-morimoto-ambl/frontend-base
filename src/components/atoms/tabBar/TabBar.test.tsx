import * as AssetUtil from '@/utils'
import { Tabs } from '@ark-ui/react'
import '@testing-library/jest-dom/vitest'
import { fireEvent, render, screen, waitFor } from '@testing-library/react'
import { describe, expect, test, vi } from 'vitest'
import TabBarSub from './TabBarSub'

const menuOpenFunc = () => {}

describe('正常系: テストの中でグルーピングしたい場合はdescribeで囲う', () => {
  test('正常系: ボタンを押してタブが切り替わることを確認', async () => {
    // TODO: 本実装時は削除するテストケース
    render(
      <TabBarSub setHamburgerMenuIsOpen={menuOpenFunc}>
        <Tabs.Content value="accountActivity">入出金タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="expenses">家計簿タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="assetList">資産一覧タブを押したときに表示するコンテンツ</Tabs.Content>
      </TabBarSub>,
    )
    const contentAreaBefore = screen.getByRole('tabpanel', { hidden: false })

    expect(contentAreaBefore?.textContent).toBe('入出金タブを押したときに表示するコンテンツ')

    const tabButton = screen.getByRole('tab', { name: '家計簿' })
    fireEvent.click(tabButton)

    // クリック等イベント発火後、テスト対象の要素が見つかるまで待機が必要な場合がある。
    await waitFor(() => {
      const contentAreaAfter = screen.getByRole('tabpanel', { hidden: false })
      expect(contentAreaAfter?.textContent).toBe('家計簿タブを押したときに表示するコンテンツ')
    })
  })

  test('正常系: モックを使う', async () => {
    vi.spyOn(AssetUtil, 'getRelativeFilePath').mockImplementation(() => {
      return '/src/assets/barGraphButton.svg'
    })
    render(
      <TabBarSub setHamburgerMenuIsOpen={menuOpenFunc}>
        <Tabs.Content value="accountActivity">入出金タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="expenses">家計簿タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="assetList">資産一覧タブを押したときに表示するコンテンツ</Tabs.Content>
      </TabBarSub>,
    )

    // クリック等イベント発火後、テスト対象の要素が見つかるまで待機が必要な場合がある。
    await waitFor(() => {
      const imgElement = screen.getByRole('img')
      expect(imgElement.getAttribute('src')).toBe('/src/assets/barGraphButton.svg')
    })
  })

  test('正常系: モックで関数の呼び出しをチェックする', async () => {
    // TODO: 本実装時は削除するテストケース
    const spyFunction = vi.fn()
    render(
      <TabBarSub setHamburgerMenuIsOpen={spyFunction}>
        <Tabs.Content value="accountActivity">入出金タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="expenses">家計簿タブを押したときに表示するコンテンツ</Tabs.Content>
        <Tabs.Content value="assetList">資産一覧タブを押したときに表示するコンテンツ</Tabs.Content>
      </TabBarSub>,
    )
    const imgElement = screen.getByRole('img')
    fireEvent.click(imgElement!)
    expect(spyFunction).toHaveBeenCalled()
  })
})
