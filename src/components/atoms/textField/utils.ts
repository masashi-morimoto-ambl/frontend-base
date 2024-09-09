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
