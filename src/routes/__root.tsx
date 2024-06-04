import { authRepository } from '@/api'
import { MainTemplate } from '@/components/layouts'
import { ERROR_TYPE, PAGE_URL } from '@/enums'
import { isApiError } from '@/models'
import { DefaultErrorPage } from '@/pages/Error/DefaultErrorPage'
import { getErrorType, isApplicationPage, isString } from '@/utils'
import { QueryClient } from '@tanstack/react-query'
import { createRootRouteWithContext, redirect } from '@tanstack/react-router'

interface RouterContext {
  queryClient: QueryClient
}

type PathParamType = {
  authenticationCode?: string
}

export const Route = createRootRouteWithContext<RouterContext>()({
  validateSearch: (search: Record<string, unknown>): PathParamType => {
    return {
      authenticationCode: isString(search.authenticationCode) ? search.authenticationCode : undefined,
    }
  },
  beforeLoad: async ({ search, location }) => {
    if (isApplicationPage(location.pathname) && !isPublicPage(location.pathname)) {
      // 認証が必要なページ && URLパラメータにauthenticationCodeが含まれる場合
      // 画面描画前にログイン処理を実施する
      const authenticationCode = search.authenticationCode
      if (authenticationCode !== undefined) {
        await authRepository.login({ authenticationCode }).catch(() => {
          throw redirect({
            to: PAGE_URL.WALK_THROUGH,
          })
        })
      }
    }
  },
  component: () => {
    return (
      <MainTemplate />
      // <CatchBoundary
      //   getResetKey={() => 'reset'}
      //   onCatch={(error) => {
      //     console.log(
      //       false,
      //       `The following error wasn't caught by any route! 👇 At the very least, consider setting an 'errorComponent' in your RootRoute!`,
      //     )
      //     console.error(error)
      //   }}
      //   errorComponent={() => {
      //     console.log('kita??')
      //   }}
      // >
      //   <MainTemplate />
      // </CatchBoundary>
    )
  },
  errorComponent: ({ error }) => {
    if (isApiError(error)) {
      return <DefaultErrorPage error={getErrorType(error)} />
    }
    // 想定したAPIのエラー以外はERROR_TYPE.FATALページを表示する
    return <DefaultErrorPage error={{ type: ERROR_TYPE.FATAL }} />
  },
  notFoundComponent: () => <DefaultErrorPage error={{ type: ERROR_TYPE.NOT_FOUND }} />,
})

const isPublicPage = (pathname: string) => PUBLIC_PAGES.includes(pathname)

// 認証が不要なページ
const PUBLIC_PAGES: string[] = [
  PAGE_URL.WALK_THROUGH,
  // PAGE_URL.MAINTENANCE,
]
