export const formatNumericSeparator = (
  from: string | number,
  integerDigit: number,
  decimalDigit: number | undefined,
  isAllowNegative?: boolean,
) => {
  const text = isStringNumber(from)

  const number =
    typeof text === 'number'
      ? text
      : parseFloat(
          unFormatNumericSeparator(
            trimExceedNumber(
              text.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0)),
              integerDigit,
            ),
            isAllowNegative,
          ),
        )

  if (Number.isNaN(number)) {
    return ''
  }

  const [intString, decimalString] = number.toString().split('.')
  const isNegative = isAllowNegative && number < 0

  const integerSliceSpan = isNegative
    ? integerDigit + 1 // マイナス(-)の考慮
    : integerDigit

  const withCommaInt = parseInt(intString.slice(0, integerSliceSpan)).toLocaleString()
  return decimalString
    ? `${withCommaInt}${
        parseInt(decimalString.slice(0, decimalDigit)) === 0 || decimalDigit === 0 ? '' : `.${decimalString.slice(0, decimalDigit)}`
      }`
    : withCommaInt
}

export const unFormatNumericSeparator = (from: string | number, isAllowNegative: boolean | undefined) => {
  const reg = isAllowNegative ? /[^0-9０-９-]/g : /[^0-9０-９]/g
  return typeof from === 'string' ? from.replace(reg, '').replace(/(\d)[-]+/g, '$1') : `${from}`
}

/**
 * 全角を含む数字を半角数字に変換する
 * 数字以外の値が含まれる場合は取り除く
 * @param from
 */
export const toHalfWidthNumber = (from: string | number) => {
  const text = isStringNumber(from)
  if (typeof text === 'number') return `${text}`

  const onlyNumber = text.replace(/[^0-9０-９]/g, '')
  return onlyNumber.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
}
/**
 * 半角英数字以外の値が含まれる場合は取り除く
 * 全角を含む数字を半角数字に変換する
 * @param from
 */
export const toHalfWidthAlphanumeric = (from: string | number) => {
  const text = isStringNumber(from)
  if (typeof text === 'number') return `${from}`

  const only = text.replace(/[^A-Za-z0-9０-９]/g, '')
  return only.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
}

/**
 * 半角文字/全角数字以外の値が含まれる場合は取り除く
 * 全角を含む数字を半角数字に変換する
 * @param from
 */
export const toHalfWidthCharacter = (from: string | number) => {
  const text = isStringNumber(from)
  if (typeof text === 'number') return `${text}`

  const only = text.replace(/[^ -~０-９]/g, '').replace(/\s+/g, '')
  return only.replace(/[０-９]/g, (s) => String.fromCharCode(s.charCodeAt(0) - 0xfee0))
}

/**
 * 型をstring or number に絞り込み
 */
const isStringNumber = (from: string | number | null | undefined) => (from == null ? '' : from)

/**
 * 大きすぎる数の場合、1e+28のような表記になってしまい、フォーマットがうまくいかない。
 * そのため、数値以外のものをトリムした時点で15桁以上の場合は15桁まで詰めてからnumberに変換する。
 */
const trimExceedNumber = (source: number | string, integerDigit: number) => {
  const filteredNumbers = String(source).replaceAll(/\D/g, '')
  return filteredNumbers.slice(0, integerDigit)
}
