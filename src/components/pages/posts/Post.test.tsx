import { server } from '@/repositories/mocks/server'
import { API_URL } from '@/repositories/service/config'
import { render, waitFor } from '@/test/utils/test-utils'
import { http, HttpResponse } from 'msw'
import { afterEach, describe, expect, test, vi } from 'vitest'

describe('Post', () => {
  const mockFn = vi.fn()
  afterEach(() => {
    mockFn.mockReset()
  })
  test('初期表示でポスト取得APIがコールされること', async () => {
    server.use(
      http.get(`*${API_URL.GET_POSTS}`, () => {
        mockFn()
        const data = [
          {
            userId: 1,
            id: 1,
            title: 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
            body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto',
          },
        ]
        return HttpResponse.json(data, { status: 200 })
      }),
    )
    render('/posts')
    await waitFor(() => {
      expect(mockFn).toHaveBeenCalled()
    })
  })
})
