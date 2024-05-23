import { ApiError, ErrorResponseSchema } from '@/models'

export const client = async <T>(endPoint: RequestInfo, config?: RequestInit): Promise<T> => {
  const headers = {
    'content-type': 'application/json',
  }

  const baseURL = ''

  const response = await fetch(`${baseURL}${endPoint}`, {
    mode: 'cors',
    credentials: 'include',
    ...config,
    headers: {
      ...headers,
      ...config?.headers,
    },
  }).catch(() => {
    return Promise.reject(new ApiError())
  })

  const contentType = response.headers.get('content-type') || ''

  if (!response.ok) {
    const serverErrorContent = isJson(contentType)
      ? ((await response.json()) as ErrorResponseSchema)
      : // エラーレスポンスがjsonではなかった場合、serverErrorContentはセットしない
        undefined

    return Promise.reject(new ApiError(response, serverErrorContent))
  }

  if (isJson(contentType)) return await response.json()

  // contentTypeが不明の場合、レスポンスのbodyはセットしない
  return Promise.resolve() as unknown as Promise<T>
}

const isJson = (contentType: string) => contentType.includes('application/json')
