import { http, DefaultBodyType, HttpResponse, StrictResponse, delay } from 'msw'
import { API_URL } from '../../../../api/config'
import { DELAY } from '../../../../api/mocks/enums'

const getSample = http.get(API_URL.GET_SAMPLE, async (): Promise<StrictResponse<DefaultBodyType>> => {
  const data = [
    {
      id: 1,
      title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
    },
    {
      id: 2,
      title: 'qui est esse',
    },
    {
      id: 3,
      title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    },
    {
      id: 4,
      title: 'eum et est occaecati',
    },
  ]

  await delay(DELAY)
  return HttpResponse.json(data, { status: 400 })
})

export const mockSample = [getSample]
