import { mockPosts } from '../../pages/Post/api/mocks/mockPostsHandlers'
import { mockAuthHandlers } from './mockAuthHandlers'

export const handlers = [...mockPosts, ...mockAuthHandlers]
