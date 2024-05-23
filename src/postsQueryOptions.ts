import { fetchPosts } from '@/repositories/service/postRepository'
import { queryOptions } from '@tanstack/react-query'

export const postsQueryOptions = queryOptions({
  queryKey: ['posts'],
  queryFn: () => fetchPosts(),
  select: (data) => data.slice(0, 10),
})
