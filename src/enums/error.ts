export const ERROR_TYPE = {
  FATAL: 'FATAL',
  NOT_FOUND: 'NOT_FOUND',
  UNAUTHORIZE: 'UNAUTHORIZE',
  FORBIDDEN: 'FORBIDDEN',
} as const

export type ERROR_TYPE = (typeof ERROR_TYPE)[keyof typeof ERROR_TYPE]

export const ERROR_PAGE_TITLE = {
  FATAL: 'エラーが発生しました',
  NOT_FOUND: 'ページが存在しません',
  UNAUTHORIZE: 'セッションタイムアウトが発生しました',
  FORBIDDEN: 'ページを表示できません',
}
