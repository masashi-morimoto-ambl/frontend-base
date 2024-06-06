import { QueryCache, QueryClient, useQuery } from '@tanstack/react-query'
import { fetchSample } from '../api/sampleRepository'
import { SampleType } from '../models'

export const useGetSampleQuery = () => {
  const fallback: SampleType[] = []
  const { data = fallback, isLoading } = useQuery(
    {
      queryKey: ['sample'],
      queryFn: () => fetchSample(),
      select: (data) => data?.slice(0, 10) || [],
    },
    new QueryClient({
      defaultOptions: {
        queries: {
          retry: 0,
        },
      },
      queryCache: new QueryCache({
        onError(error) {
          // 共通エラーではなく個別のエラー処理をしたい場合はonErrorを実装
          throw error
        },
      }),
    }),
  )
  return { data, isLoading }
}
