import { AppRoutePaths } from '@/models'

export const PAGE_URL = {
  POSTS: '/posts',
  SAMPLE: '/sample',
  WALK_THROUGH: '/',
  TRANSACTION_HISTORIES: '/transaction_histories',
} satisfies Record<string, AppRoutePaths>
