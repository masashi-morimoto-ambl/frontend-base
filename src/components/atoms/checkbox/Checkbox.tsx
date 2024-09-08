import { checkBoxRecipe } from '@/recipes/checkBox'
import { Checkbox as MCheckbox, CheckboxProps } from '@mantine/core'
import { ComponentPropsWithoutRef } from 'react'
import { token } from '~/styled-system/tokens'
import { Icon } from '../icon/Icon'

interface CheckboxInterface extends ComponentPropsWithoutRef<typeof MCheckbox> {
  checked: boolean
  setChecked: (checked: boolean) => void
  /**
   * useFormで制御する場合にnameを格納
   */
  'data-path'?: string
  sizeSet?: 'default'
}

export const Checkbox = ({ checked, sizeSet = 'default', setChecked, onChange, ...otherProps }: CheckboxInterface) => {
  const dataPath = otherProps['data-path'] ? `-${otherProps['data-path']}` : ''
  return (
    <MCheckbox
      icon={CheckboxIcon}
      iconColor={otherProps.disabled ? token('colors.basePale') : checked ? token('colors.baseBright') : token('colors.baseQuaternary')}
      aria-label={`Checkbox${dataPath}`}
      checked={checked}
      className={checkBoxRecipe({ sizeSet })}
      labelPosition="left"
      onChange={(event) => {
        setChecked(event.currentTarget.checked)
        typeof onChange === 'function' && onChange(event)
      }}
      {...otherProps}
    />
  )
}

const CheckboxIcon: CheckboxProps['icon'] = ({ ...others }) => <Icon svgName="check" {...others} />
