import { Route } from '@/routes/posts'
import { Link } from '@tanstack/react-router'
import { useGetPostQuery } from './hooks'

export const Posts = () => {
  const { data: posts, isLoading } = useGetPostQuery()
  const { page, keyword } = Route.useSearch()
  return (
    <>
      <p>
        SearchParams: page: {page}, keyword: {keyword}
      </p>
      <br />
      {isLoading ? (
        <p>loading...</p>
      ) : (
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
      )}
    </>
  )
}
