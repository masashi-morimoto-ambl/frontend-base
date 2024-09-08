import arrowDown from '@/components/atoms/icon/svg/arrowDown.svg?react'
import arrowDownFill from '@/components/atoms/icon/svg/arrowDownFill.svg?react'
import arrowLeft from '@/components/atoms/icon/svg/arrowLeft.svg?react'
import arrowRight from '@/components/atoms/icon/svg/arrowRight.svg?react'
import arrowUp from '@/components/atoms/icon/svg/arrowUp.svg?react'
import attention from '@/components/atoms/icon/svg/attention.svg?react'
import bank from '@/components/atoms/icon/svg/bank.svg?react'
import calendar from '@/components/atoms/icon/svg/calendar.svg?react'
import card from '@/components/atoms/icon/svg/card.svg?react'
import categoryNotFound from '@/components/atoms/icon/svg/categoryNotFound.svg?react'
import check from '@/components/atoms/icon/svg/check.svg?react'
import completion from '@/components/atoms/icon/svg/completion.svg?react'
import deleteIcon from '@/components/atoms/icon/svg/delete.svg?react'
import expenseCategory00 from '@/components/atoms/icon/svg/expenseCategory00.svg?react'
import expenseCategory03 from '@/components/atoms/icon/svg/expenseCategory03.svg?react'
import expenseCategory04 from '@/components/atoms/icon/svg/expenseCategory04.svg?react'
import expenseCategory05 from '@/components/atoms/icon/svg/expenseCategory05.svg?react'
import expenseCategory06 from '@/components/atoms/icon/svg/expenseCategory06.svg?react'
import expenseCategory07 from '@/components/atoms/icon/svg/expenseCategory07.svg?react'
import expenseCategory08 from '@/components/atoms/icon/svg/expenseCategory08.svg?react'
import expenseCategory09 from '@/components/atoms/icon/svg/expenseCategory09.svg?react'
import expenseCategory10 from '@/components/atoms/icon/svg/expenseCategory10.svg?react'
import expenseCategory11 from '@/components/atoms/icon/svg/expenseCategory11.svg?react'
import expenseCategory12 from '@/components/atoms/icon/svg/expenseCategory12.svg?react'
import expenseCategory13 from '@/components/atoms/icon/svg/expenseCategory13.svg?react'
import expenseCategory14 from '@/components/atoms/icon/svg/expenseCategory14.svg?react'
import expenseCategory15 from '@/components/atoms/icon/svg/expenseCategory15.svg?react'
import expenseCategory16 from '@/components/atoms/icon/svg/expenseCategory16.svg?react'
import expenseCategory18 from '@/components/atoms/icon/svg/expenseCategory18.svg?react'
import expenseCategory20 from '@/components/atoms/icon/svg/expenseCategory20.svg?react'
import expenseCategory21 from '@/components/atoms/icon/svg/expenseCategory21.svg?react'
import externalLink from '@/components/atoms/icon/svg/externalLink.svg?react'
import eyeClose from '@/components/atoms/icon/svg/eyeClose.svg?react'
import eyeOpen from '@/components/atoms/icon/svg/eyeOpen.svg?react'
import hamburgerMenu from '@/components/atoms/icon/svg/hamburgerMenu.svg?react'
import help from '@/components/atoms/icon/svg/help.svg?react'
import home from '@/components/atoms/icon/svg/home.svg?react'
import income from '@/components/atoms/icon/svg/income.svg?react'
import incomeCategory00 from '@/components/atoms/icon/svg/incomeCategory00.svg?react'
import incomeCategory01 from '@/components/atoms/icon/svg/incomeCategory01.svg?react'
import logout from '@/components/atoms/icon/svg/logout.svg?react'
import menu from '@/components/atoms/icon/svg/menu.svg?react'
import mile from '@/components/atoms/icon/svg/mile.svg?react'
import more from '@/components/atoms/icon/svg/more.svg?react'
import outgo from '@/components/atoms/icon/svg/outgo.svg?react'
import pencil from '@/components/atoms/icon/svg/pencil.svg?react'
import plus from '@/components/atoms/icon/svg/plus.svg?react'
import search from '@/components/atoms/icon/svg/search.svg?react'
import setting from '@/components/atoms/icon/svg/setting.svg?react'
import sync from '@/components/atoms/icon/svg/sync.svg?react'
import warning from '@/components/atoms/icon/svg/warning.svg?react'
import warningCircle from '@/components/atoms/icon/svg/warningCircle.svg?react'
import React from 'react'
import { token } from '~/styled-system/tokens'
import close from './svg/close.svg?react'

export interface IconInterface {
  svgName: keyof typeof svgNameComponentPair
  size?: 'sm' | 'md' | 'xlg'
  colorSet?: keyof typeof COLOR_MAP
  onClick?: () => void
}

const COLOR_MAP = {
  primary_set: token('colors.themePrimary'),
  secondary_set: token('colors.baseQuaternary'),
  update_set: token('colors.baseSecondary'),
  disabled_set: token('colors.basePale'),
  attention_set: token('colors.baseAttention'),
  approved_set: token('colors.baseApproved'),
  income_set: token('colors.themePrimaryPale'),
  accent_set: token('colors.baseAccent'),
  bright_set: token('colors.baseBright'),
}

export const svgNameComponentPair = {
  // アイコンのSVGファイルは、ここでキー名とコンポーネントとを対応づける。(呼び出し元からはキー名を文字列で指定する。)
  hamburgerMenu: hamburgerMenu,
  expenseCategory16: expenseCategory16,
  expenseCategory03: expenseCategory03,
  expenseCategory15: expenseCategory15,
  expenseCategory00: expenseCategory00,
  expenseCategory14: expenseCategory14,
  expenseCategory10: expenseCategory10,
  expenseCategory04: expenseCategory04,
  expenseCategory05: expenseCategory05,
  expenseCategory11: expenseCategory11,
  expenseCategory07: expenseCategory07,
  expenseCategory13: expenseCategory13,
  expenseCategory12: expenseCategory12,
  expenseCategory06: expenseCategory06,
  expenseCategory08: expenseCategory08,
  expenseCategory20: expenseCategory20,
  expenseCategory21: expenseCategory21,
  expenseCategory09: expenseCategory09,
  expenseCategory18: expenseCategory18,
  incomeCategory00: incomeCategory00,
  incomeCategory01: incomeCategory01,
  invisible: eyeClose,
  pencil: pencil,
  search: search,
  visible: eyeOpen,
  arrowDown: arrowDown,
  bank: bank,
  card: card,
  mile: mile,
  home: home,
  setting: setting,
  help: help,
  more: more,
  sync: sync,
  syncRotate: sync,
  deleteIcon: deleteIcon,
  menu: menu,
  plus: plus,
  outgo: outgo,
  income: income,
  arrowDownFill: arrowDownFill,
  warning: warning,
  warningCircle: warningCircle,
  logout: logout,
  arrowUp: arrowUp,
  arrowRight: arrowRight,
  arrowLeft: arrowLeft,
  calendar: calendar,
  attention: attention,
  completion: completion,
  externalLink: externalLink,
  categoryNotFound: categoryNotFound,
  close: close,
  check: check,
} as const

const sizePxPair = {
  sm: '20px',
  md: '24px',
  xlg: '100px',
}

export const Icon: React.FC<IconInterface> = ({ svgName, size = 'md', colorSet = 'primary_set', onClick = () => {}, ...otherProps }) => {
  if (!Object.keys(svgNameComponentPair).includes(svgName)) {
    console.warn('対象iconが見つかりません')
  }
  const colorStyle = COLOR_MAP[colorSet]
  const svgStyles = {
    color: colorStyle,
    animation: svgName === 'syncRotate' ? '2.5s linear infinite loadingRotating' : 'none',
  }
  const sizePx = sizePxPair[size]
  const SvgComponent = svgNameComponentPair[svgName]

  return (
    <div onClick={onClick} data-testid={`icon-${svgName}`}>
      <SvgComponent style={svgStyles} width={sizePx} height={sizePx} {...otherProps} />
    </div>
  )
}
