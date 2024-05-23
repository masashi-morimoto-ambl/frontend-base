import { mockAuthHandlers } from './mockAuthHandlers'
import { mockPosts } from './mockPostsHandlers'

export const handlers = [...mockPosts, ...mockAuthHandlers]
