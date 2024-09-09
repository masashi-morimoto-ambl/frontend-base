import { toHalfWidthAlphanumeric, toHalfWidthCharacter, toHalfWidthNumber } from './utils'

export const FORMATTERS = {
  number: {
    onFocus: (v: string) => v,
    onBlur: toHalfWidthNumber,
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
