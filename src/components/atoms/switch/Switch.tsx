import { switchRecipe } from '@/recipes/switch'
import { Switch as MSwitch } from '@mantine/core'
import { ComponentPropsWithoutRef } from 'react'

interface SwitchInterface extends ComponentPropsWithoutRef<typeof MSwitch> {
  /**
   * useFormで制御する場合にnameを格納
   */
  'data-path'?: string
  sizeSet?: 'default'
}

export const Switch = ({ value, checked, sizeSet = 'default', onChange, ...otherProps }: SwitchInterface) => {
  const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'

  /**
   * checkedにbooleanが設定されていた場合はcheckedを優先それ以外はvalueの値を使用する
   */
  const isUseValue = isBoolean(value)
  const _checked = isUseValue ? value : checked
  const dataPath = otherProps['data-path'] ? `-${otherProps['data-path']}` : ''

  return (
    <MSwitch
      aria-label={`Switch${dataPath}`}
      value={value}
      checked={_checked}
      className={switchRecipe({ sizeSet })}
      labelPosition="left"
      onChange={onChange}
      {...otherProps}
    />
  )
}
