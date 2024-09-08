import { textFieldRecipe } from '@/recipes/textField'
import { TextInput } from '@mantine/core'
import React, { ComponentPropsWithoutRef, useEffect, useState } from 'react'
import { FORMATTERS } from './enums'

interface TextFieldCustomInterface extends ComponentPropsWithoutRef<typeof TextInput> {
  /**
   * 値
   * @default ''
   */
  value?: string
  /**
   * フォーマットタイプ
   * default: 入力値の制限なし
   * alphanumeric: 半角英数字のみ
   * halfWidthCharacter: 半角英数字記号のみ
   * @default default
   */
  formatType?: 'default' | 'alphanumeric' | 'halfWidthCharacter'
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

export const TextField = ({
  value = '',
  formatType = 'default',
  hint = '',
  onChange,
  onBlur,
  onFocus,
  sizeSet = 'default',
  ...otherProps
}: TextFieldCustomInterface) => {
  const [innerValue, setInnerValue] = useState<string>(value)
  const formatter = FORMATTERS[formatType]
  useEffect(() => setInnerValue(() => value), [value])
  const handleFocus = (e: React.FocusEvent<HTMLInputElement>) => {
    const value = formatter.onFocus(e.currentTarget.value)
    setInnerValue(value)
    const newEvent = { ...e }
    newEvent.currentTarget.value = value
    typeof onFocus === 'function' && onFocus(newEvent)
  }
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInnerValue(e.currentTarget.value)
    typeof onChange === 'function' && onChange(e)
  }
  const handleBlur = (e: React.FocusEvent<HTMLInputElement>) => {
    // autoCompleteを利用した場合、onFocusで処理されない値がstateにセットされてしまう
    // blur処理を行う前に、再度onFocus時の処理を行っておく
    const focusedValue = formatter.onFocus(e.currentTarget.value)
    const value = formatter.onBlur(focusedValue)
    setInnerValue(value)
    const newEvent = { ...e }
    newEvent.currentTarget.value = value
    typeof onBlur === 'function' && onBlur(newEvent)
  }
  const dataPath = otherProps['data-path'] ? `-${otherProps['data-path']}` : ''
  return (
    <TextInput
      aria-label={`TextField-${formatType}${dataPath}`}
      data-testid="text-input"
      value={innerValue}
      className={textFieldRecipe({ sizeSet })}
      description={hint}
      onFocus={handleFocus}
      onBlur={handleBlur}
      onChange={handleChange}
      {...otherProps}
    />
  )
}

export default TextField
