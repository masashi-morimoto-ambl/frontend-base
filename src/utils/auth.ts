import { ERROR_TYPE, HTTP_STATUS } from '@/enums'
import { ApiError, AppError } from '@/models'

export const getErrorType = (error: ApiError): AppError => {
  switch (error.status) {
    case HTTP_STATUS.BAD_REQUEST:
    case HTTP_STATUS.SERVER_ERROR:
      return { type: ERROR_TYPE.FATAL }
    case HTTP_STATUS.FORBIDDEN:
      return { type: ERROR_TYPE.FORBIDDEN }
    case HTTP_STATUS.NOT_FOUND:
      return { type: ERROR_TYPE.NOT_FOUND }
    case HTTP_STATUS.UNAUTHORIZE:
      return { type: ERROR_TYPE.UNAUTHORIZE }
    default:
      return { type: ERROR_TYPE.FATAL }
  }
}
