import { http, DefaultBodyType, HttpResponse, StrictResponse, delay } from 'msw'
import { API_URL } from '../config'
import { DELAY } from './enums'

const postLogin = http.post(API_URL.POST_LOGIN, async (): Promise<StrictResponse<DefaultBodyType>> => {
  await delay(DELAY)
  return HttpResponse.json(null, { status: 200 })
})

export const mockAuthHandlers = [postLogin]
