import { PAGE_URL } from '@/enums'
import { AppRoutePaths } from '@/models'

export const isString = (value: unknown): value is string => {
  return typeof value === 'string'
}

// pathnameが定義済みのrouteであるか判定する
export const isApplicationPage = (pathname: unknown): pathname is AppRoutePaths => {
  return typeof pathname === 'string' && Object.values(PAGE_URL).includes(pathname as AppRoutePaths)
}
