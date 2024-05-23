import '@testing-library/jest-dom/vitest'
import { beforeAll, afterEach, afterAll } from 'vitest'
import { server } from './src/repositories/mocks/server'
import { cleanup } from '@testing-library/react'

beforeAll(() => server.listen())
afterEach(() => {
  server.resetHandlers()
  // renderした結果がテスト間で影響し合う可能性があるため、テスト終了時に初期化する
  cleanup()
})
afterAll(() => server.close())
