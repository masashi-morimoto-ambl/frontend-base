import { mockPosts } from '@/pages/Post/api/mocks/mockPostsHandlers'
import { mockSample } from '@/pages/Sample/api/mocks/mockSampleHandlers'
import { mockAuthHandlers } from './mockAuthHandlers'

export const handlers = [...mockPosts, ...mockAuthHandlers, ...mockSample]
