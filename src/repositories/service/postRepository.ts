import { client } from './client'
import { API_URL } from './config'

export type PostType = {
  id: string
  title: string
  body: string
}

export const fetchPosts = async () => {
  return await client<PostType[]>(API_URL.GET_POSTS)
}
