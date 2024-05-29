import { authRepository } from '@/api'
import { ERROR_PAGE_TITLE, ERROR_TYPE } from '@/enums'
import { AppError } from '@/models'
import { useQuery } from '@tanstack/react-query'
import { useNavigate } from '@tanstack/react-router'
import { useEffect } from 'react'
import { ErrorTemplate } from '../../components/layouts/ErrorTemplate'

type Props = {
  error: AppError
}

export const getErrorContents = (errorType: ERROR_TYPE) => {
  const errorPattern = {
    [ERROR_TYPE.FATAL]: {
      title: ERROR_PAGE_TITLE.FATAL,
      message: <>不正な操作またはシステムエラーが発生したため処理を中断しました。再度ログインしてください。</>,
      buttonText: 'ログインへ',
      to: 'LOGIN',
    },
    [ERROR_TYPE.NOT_FOUND]: {
      title: ERROR_PAGE_TITLE.NOT_FOUND,
      message: <>指定されたページまたは情報が存在しません。変更または削除された可能性があるためトップページより再度操作してください。</>,
      buttonText: 'トップへ戻る',
      to: 'TOP',
    },
    [ERROR_TYPE.UNAUTHORIZE]: {
      title: ERROR_PAGE_TITLE.UNAUTHORIZE,
      message: <>一定期間操作が行われなかった、またはシステムエラーが発生したため処理を中断しました。再度ログインしてください。</>,
      buttonText: 'ログインへ',
      to: 'LOGIN',
    },
    [ERROR_TYPE.FORBIDDEN]: {
      title: ERROR_PAGE_TITLE.FORBIDDEN,
      message: <>アクセス権限がないため、指定された操作またはページを表示することができません。トップページより再度操作してください。</>,
      buttonText: 'トップへ戻る',
      to: 'TOP',
    },
  } as const

  return errorPattern[errorType]
}

export const DefaultErrorPage = (props: Props) => {
  const router = useNavigate()
  const { error } = props
  const { data } = useQuery({
    enabled: error.type === ERROR_TYPE.UNAUTHORIZE,
    queryKey: ['errorUnauthorize'],
    queryFn: () => authRepository.login({ authenticationCode: '' }),
  })
  useEffect(() => {
    if (data === null) {
      router({
        to: '/transaction_histories',
      })
    }
  }, [data, router])
  if (error.type === ERROR_TYPE.UNAUTHORIZE) {
    return null
  }

  const { title: pageTitle } = document

  const defaultContent = getErrorContents(error.type)

  const title = error.title || defaultContent.title
  const message = error.message || defaultContent.message

  const button = 'buttonText' in defaultContent ? <button type="button">{defaultContent.buttonText}</button> : undefined

  return <ErrorTemplate title={title} message={message} navigation={button} pageTitle={pageTitle} />
}
