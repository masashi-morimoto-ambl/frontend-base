import { AppError } from '@/models'
import { createContext, useContext, useState } from 'react'

type ErrorData = {
  error: AppError | null
}
type ErrorContextValue = ErrorData & {
  setErrorData: (data: AppError) => void
  clearErrorData: () => void
}

const ErrorContext = createContext<ErrorContextValue | null>(null)

export const useErrorData = () => {
  const errorValue = useContext(ErrorContext)
  if (!errorValue) {
    throw new Error('Error! ErrorContext called from outside the ErrorContextProvider')
  }

  if (errorValue.error) {
    throw errorValue.error
  }

  return errorValue
}

export const ErrorContextProvider = ({ children }: React.PropsWithChildren<object>) => {
  const [errorState, setErrorState] = useState<AppError | null>(null)

  const setErrorData = ({ type, title, message }: AppError) => setErrorState({ type, title, message })

  const clearErrorData = () => setErrorState(null)

  return <ErrorContext.Provider value={{ error: errorState, clearErrorData, setErrorData }}>{children}</ErrorContext.Provider>
}
