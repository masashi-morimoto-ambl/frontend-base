import { Suspense } from 'react'
import { Posts } from './Posts'

export const PostsPage = () => {
  return (
    <Suspense fallback={'loading...'}>
      <Posts />
    </Suspense>
  )
}
