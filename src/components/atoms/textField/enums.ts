import { formatNumericSeparator, toHalfWidthAlphanumeric, toHalfWidthCharacter, toHalfWidthNumber, unFormatNumericSeparator } from './utils'

export const FORMATTERS = {
  number: {
    onFocus: (v: string) => v,
    onBlur: toHalfWidthNumber,
  },
  numericSeparator: {
    onFocus: unFormatNumericSeparator,
    onBlur: formatNumericSeparator,
  },
  alphanumeric: {
    onFocus: (v: string) => v,
    onBlur: toHalfWidthAlphanumeric,
  },
  halfWidthCharacter: {
    onFocus: (v: string) => v,
    onBlur: toHalfWidthCharacter,
  },
  default: {
    onFocus: (v: string) => v,
    onBlur: (v: string) => v,
  },
}
