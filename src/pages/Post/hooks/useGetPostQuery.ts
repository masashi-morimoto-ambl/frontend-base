import { useQuery } from '@tanstack/react-query'
import { fetchPosts } from '../api/postRepository'
import { PostType } from '../models'

export const useGetPostQuery = () => {
  const fallback: PostType[] = []
  const { data = fallback, isLoading } = useQuery(
    {
      queryKey: ['posts'],
      queryFn: () => fetchPosts(),
      select: (data) => data?.slice(0, 10) || [],
      retry: 0,
    },
    // new QueryClient({
    //   queryCache: new QueryCache({
    //     onError(error) {
    //       console.log('error in queryCache', error)
    //       throw error
    //     },
    //   }),
    // }),
  )
  return { data, isLoading }
}
