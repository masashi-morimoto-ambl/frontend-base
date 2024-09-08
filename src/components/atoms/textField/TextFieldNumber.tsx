import { textFieldNumberRecipe } from '@/recipes/textFieldNumber'
import { TextInput } from '@mantine/core'
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { Label } from '..'
import { FORMATTERS } from './enums'

interface TextFieldNumberInterface extends ComponentPropsWithoutRef<typeof TextInput> {
  /**
   * 値
   * @default ''
   */
  value?: string
  /**
   * 単位
   * @default undefined
   */
  unit?: string
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

export const TextFieldNumber = ({
  value = '',
  unit,
  hint = '',
  sizeSet = 'default',
  onChange,
  onBlur,
  onFocus,
  disabled,
  ...otherProps
}: TextFieldNumberInterface) => {
  const isUnitUndefined = unit === undefined
  const formatter = FORMATTERS.numericSeparator
  const unitTag = unit ? (
    <Label sizeSet="jp_xx_small" colorSet={disabled ? 'disabled_set' : undefined}>
      {unit}
    </Label>
  ) : undefined
  const [innerValue, setInnerValue] = useState<string>(value)
  useEffect(() => setInnerValue(() => formatter.onBlur(value, 15, 0, false)), [value, formatter])
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = formatter.onFocus(e.currentTarget.value, false)
    setInnerValue(value)
    const newEvent = { ...e }
    newEvent.currentTarget.value = value
    typeof onFocus === 'function' && onFocus(newEvent)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.currentTarget.value)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // autoCompleteを利用した場合、onFocusで処理されない値がstateにセットされてしまう
    // blur処理を行う前に、再度onFocus時の処理を行っておく
    const focusedValue = formatter.onFocus(e.currentTarget.value, false)
    const value = formatter.onBlur(focusedValue, 15, 0, false)
    setInnerValue(value)
    const newEvent = { ...e }
    newEvent.currentTarget.value = value
    typeof onChange === 'function' && onChange(e)
    typeof onBlur === 'function' && onBlur(newEvent)
  }
  const dataPath = otherProps['data-path'] ? `-${otherProps['data-path']}` : ''
  return (
    <TextInput
      aria-label={`TextFieldNumber${dataPath}`}
      value={innerValue}
      className={textFieldNumberRecipe(isUnitUndefined)({ sizeSet })}
      rightSection={unitTag}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      description={hint}
      disabled={disabled}
      {...otherProps}
    />
  )
}

export default TextFieldNumber
