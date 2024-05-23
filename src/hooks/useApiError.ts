import { useErrorData } from '@/components/pages'
import { isApiError } from '@/models'
import { getErrorType } from '@/utils'
import { useCallback } from 'react'

export const useApiError = () => {
  const { setErrorData } = useErrorData()
  const notifyError = useCallback(
    (mayBeApiError: unknown) => {
      // 想定したAPIのエラー以外は再throwする
      if (!isApiError(mayBeApiError)) {
        throw mayBeApiError
      }
      setErrorData(getErrorType(mayBeApiError))
    },
    [setErrorData],
  )

  return { notifyError }
}
