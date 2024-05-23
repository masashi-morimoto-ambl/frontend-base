import { ERROR_TYPE } from '@/enums'
import React from 'react'

export type AppError = {
  type: ERROR_TYPE
  title?: React.ReactNode
  message?: React.ReactNode
}
