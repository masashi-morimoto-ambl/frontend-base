import { ListBar } from '@/components/atoms/listBar/ListBar'
import { getRelativeFilePath } from '@/utils'
import { Tabs } from '@ark-ui/react'
import React from 'react'
import { css } from '~/styled-system/css'

interface TabBarSubInterface {
  children: React.ReactNode
  setHamburgerMenuIsOpen: (func: boolean) => void
}

const containerStyle = css({
  display: 'flex',
  alignItems: 'center',
})
const hamburgerStyle = css({
  display: 'flex',
  width: '48px',
  height: '51px',
})
const hamburgerImgStyle = css({
  margin: 'auto',
})
const buttonStyle = css({
  display: 'flex',
  margin: '10px',
  padding: '10px 16px',
  '&[aria-selected=true]': {
    color: 'themePrimary',
    bgColor: 'themePrimary/10',
    borderRadius: '6px',
  },
})

export const TabBarSub: React.FC<TabBarSubInterface> = ({ children, setHamburgerMenuIsOpen }) => {
  return (
    <Tabs.Root defaultValue="accountActivity">
      <Tabs.List className={containerStyle}>
        <div className={hamburgerStyle} onClick={() => setHamburgerMenuIsOpen(true)}>
          <img className={hamburgerImgStyle} src={getRelativeFilePath('hamburgerMenu.svg')} alt="ハンバーガーメニュー" />
        </div>
        <Tabs.Trigger className={buttonStyle} value="accountActivity">
          入出金
        </Tabs.Trigger>
        <Tabs.Trigger className={buttonStyle} value="expenses">
          家計簿
        </Tabs.Trigger>
        <Tabs.Trigger className={buttonStyle} value="assetList">
          資産一覧
        </Tabs.Trigger>
      </Tabs.List>
      <ListBar barWidth="100%" />
      {children}
    </Tabs.Root>
  )
}

export default TabBarSub
