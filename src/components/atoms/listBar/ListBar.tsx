import React from 'react'
import { css } from '~/styled-system/css'

interface ListBarInterface {
  barWidth: string
}

const listBarStyle = css({
  borderWidth: '1px',
  borderColor: 'baseHairline',
})

export const ListBar: React.FC<ListBarInterface> = ({ barWidth }) => {
  return <div className={listBarStyle} style={{ width: barWidth }} />
}
