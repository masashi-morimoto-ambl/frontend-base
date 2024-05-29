import { client } from '../client'
import { API_URL } from '../config'

export const login = async (params: {
  authenticationCode: string
}) => {
  const body = JSON.stringify({
    authenticationCode: params.authenticationCode,
  })

  return await client<null>(API_URL.POST_LOGIN, {
    method: 'POST',
    body: body,
  })
}

export const authRepository = {
  login,
}
