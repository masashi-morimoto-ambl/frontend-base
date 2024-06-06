import { client } from '../../../api/client'
import { API_URL } from '../../../api/config'
import { PostType } from '../models'

export const fetchPosts = async () => {
  return await client<PostType[]>(API_URL.GET_POSTS)
}
