import { useSuspenseQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/postRepository'

export const useGetPostSuspenseQuery = () => {
  const { data } = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
    select: (data) => data?.slice(0, 10) || [],
  })
  return { data }
}
