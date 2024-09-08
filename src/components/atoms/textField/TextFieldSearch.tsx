import { Icon } from '@/components/atoms'
import { textFieldSearchRecipe } from '@/recipes/textFieldSearch'
import { TextInput } from '@mantine/core'
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'

interface TextFieldSearchInterface extends ComponentPropsWithoutRef<typeof TextInput> {
  /**
   * 値
   * @default ''
   */
  value?: string
  /**
   * 注釈
   * @default ''
   */
  hint?: string
  /**
   * useFormで制御する場合にnameを格納
   */
  'data-path'?: string
  sizeSet?: 'default'
}

export const TextFieldSearch: React.FC<TextFieldSearchInterface> = ({
  value = '',
  hint = '',
  sizeSet = 'default',
  onChange,
  ...otherProps
}) => {
  const [innerValue, setInnerValue] = useState<string>(value)
  useEffect(() => setInnerValue(() => value), [value])
  const leftSection = <Icon svgName="search" colorSet="primary_set" />
  const leftSectionDisabled = <Icon svgName="search" colorSet="disabled_set" />
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.currentTarget.value)
    typeof onChange === 'function' && onChange(e)
  }
  const dataPath = otherProps['data-path'] ? `-${otherProps['data-path']}` : ''
  return (
    <TextInput
      aria-label={`TextFieldSearch${dataPath}`}
      value={innerValue}
      className={textFieldSearchRecipe({ sizeSet })}
      leftSection={otherProps.disabled ? leftSectionDisabled : leftSection}
      description={hint}
      onChange={handleChange}
      {...otherProps}
    />
  )
}
