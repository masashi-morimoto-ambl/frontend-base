import { Posts } from '@/pages/Post/Posts'
import { isString } from '@/utils'
import { createFileRoute } from '@tanstack/react-router'

type PathParamType = {
  page: number
  keyword: string
}

export const Route = createFileRoute('/posts/')({
  validateSearch: (search: Record<keyof PathParamType, unknown>): PathParamType => {
    return {
      page: Number(search.page) || 1,
      keyword: isString(search.keyword) ? search.keyword : '',
    }
  },
  component: Posts,
  // errorComponent: ({ error }) => {
  //　画面個別でエラーコンポーネントを指定したい場合はこちらに
  //　defaultErrorComponentは呼ばれない
  // },
})
