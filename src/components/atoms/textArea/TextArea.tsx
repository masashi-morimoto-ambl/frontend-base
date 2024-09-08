import { textAreaRecipe } from '@/recipes/textArea'
import { Textarea } from '@mantine/core'
import { ComponentPropsWithoutRef, useEffect, useState } from 'react'

interface TextAreaCustomInterface extends ComponentPropsWithoutRef<typeof Textarea> {
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

export const TextArea = ({ value = '', hint = '', sizeSet = 'default', onChange, ...otherProps }: TextAreaCustomInterface) => {
  const [innerValue, setInnerValue] = useState<string>(value)
  useEffect(() => setInnerValue(() => value), [value])
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInnerValue(e.currentTarget.value)
    typeof onChange === 'function' && onChange(e)
  }
  const dataPath = otherProps['data-path'] ? `-${otherProps['data-path']}` : ''

  return (
    <Textarea
      aria-label={`TextArea${dataPath}`}
      value={innerValue}
      className={textAreaRecipe({ sizeSet })}
      description={hint}
      onChange={handleChange}
      {...otherProps}
    />
  )
}
