const API_ERROR = 'ApiError'

export const isApiError = (error: any): error is ApiError => {
  if (error instanceof ApiError) {
    return true
  }

  if (error instanceof Object && error.name === API_ERROR) return true
  return false
}

export type ErrorResponseSchema = {
  errorCode?: string
  message?: string
  location?: string
}

export class ApiError extends Error {
  name: string
  url?: string
  status?: number
  statusText?: string
  serverErrorContent?: ErrorResponseSchema
  constructor(response?: Response, serverErrorContent?: ErrorResponseSchema) {
    super(response?.statusText || 'network error')
    this.name = API_ERROR
    this.status = response?.status
    this.statusText = response?.statusText
    this.url = response?.url
    this.serverErrorContent = serverErrorContent
  }
}
