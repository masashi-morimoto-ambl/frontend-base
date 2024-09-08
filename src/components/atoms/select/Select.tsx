import { Icon } from '@/components/atoms/icon/Icon'
import { selectRecipe, selectWrapperRecipe } from '@/recipes/select'
import { ComboboxItem, Select as SelectM } from '@mantine/core'
import React, { ComponentPropsWithoutRef, ReactNode, useState } from 'react'

export interface SelectInterface extends ComponentPropsWithoutRef<typeof SelectM> {
  leftIcon?: ReactNode
  /**
   * useFormで制御する場合にnameを格納
   */
  'data-path'?: string
  sizeSet?: 'default'
}

export const Select: React.FC<SelectInterface> = ({
  data,
  leftIcon,
  leftSection,
  sizeSet = 'default',
  onChange,
  ...otherProps
}: SelectInterface) => {
  const [innerValue, setInnerValue] = useState<string | null>(null)
  const pulldownIcon = otherProps.disabled ? <></> : <Icon svgName="arrowDown" />

  const _leftSection = leftIcon ? <div left-icon="true">{leftIcon}</div> : leftSection

  const onChangeSelectBox = (value: string | null, option: ComboboxItem) => {
    setInnerValue(value)
    typeof onChange === 'function' && onChange(value, option)
  }
  const dataPath = otherProps['data-path'] ? `-${otherProps['data-path']}` : ''

  return (
    <div className={selectWrapperRecipe({ sizeSet })}>
      <SelectM
        aria-label={`Select${dataPath}`}
        rightSection={pulldownIcon}
        withCheckIcon={false}
        data={data}
        value={innerValue}
        className={selectRecipe({ sizeSet })}
        onChange={onChangeSelectBox}
        comboboxProps={{ offset: 0, withinPortal: false }}
        allowDeselect={false}
        leftSection={_leftSection}
        {...otherProps}
      />
    </div>
  )
}

export default Select
