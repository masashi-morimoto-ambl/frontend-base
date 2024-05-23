import { fetchPosts } from '@/repositories/service/postRepository'
import { Route } from '@/routes/posts'
import { useSuspenseQuery } from '@tanstack/react-query'
import { Link } from '@tanstack/react-router'

export const Posts = () => {
  const postsQuery = useSuspenseQuery({
    queryKey: ['posts'],
    queryFn: () => fetchPosts(),
    select: (data) => data?.slice(0, 10) || [],
  })
  const posts = postsQuery.data
  const { page, keyword } = Route.useSearch()
  return (
    <>
      <p>
        SearchParams: page: {page}, keyword: {keyword}
      </p>
      <br />
      <div className="p-2 flex gap-2">
        <ul className="list-disc pl-4">
          {[...posts, { id: 'i-do-not-exist', title: 'Non-existent Post' }]?.map((post) => {
            return (
              <li key={post.id} className="whitespace-nowrap">
                <Link
                  to="/"
                  params={{
                    postId: post.id,
                  }}
                  className="block py-1 text-blue-800 hover:text-blue-600"
                  activeProps={{ className: 'text-black font-bold' }}
                >
                  <div>{post.title.substring(0, 20)}</div>
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
    </>
  )
}
